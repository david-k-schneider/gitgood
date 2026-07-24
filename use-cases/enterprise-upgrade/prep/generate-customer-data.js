#!/usr/bin/env node
// GitGood Enterprise Upgrade — Customer Data Prep Script
// ======================================================
// Generates a customized data.js for a specific customer using
// internal data sources (Kusto, Salesforce, public GitHub API).
//
// Usage:
//   node prep/generate-customer-data.js --org "acme-corp"
//   node prep/generate-customer-data.js --enterprise "acme-corp-enterprise"
//   node prep/generate-customer-data.js --salesforce-id "001XXXXXXXXXXXX"
//
// Prerequisites:
//   - az login (for Kusto queries)
//   - gh auth login (for GitHub API)
//
// Output: Writes a customized js/data.js file with real customer metrics.

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Parse CLI arguments
const args = process.argv.slice(2);
const flags = {};
for (let i = 0; i < args.length; i += 2) {
  flags[args[i].replace('--', '')] = args[i + 1];
}

if (!flags.org && !flags.enterprise && !flags['salesforce-id']) {
  console.error('Usage: node prep/generate-customer-data.js --org <github-org-name>');
  console.error('       node prep/generate-customer-data.js --enterprise <enterprise-slug>');
  process.exit(1);
}

async function main() {
  console.log('🔍 Fetching customer data...\n');

  const customerData = {
    orgName: flags.org || flags.enterprise || 'Customer',
    repoCount: 0,
    developerCount: 0,
    languages: {},
    repos: [],
  };

  // Step 1: Try public GitHub API for org data
  if (flags.org) {
    console.log(`📡 Querying GitHub API for org: ${flags.org}`);
    try {
      const orgJson = execSync(
        `gh api orgs/${flags.org} --jq '{login, name, public_repos, total_private_repos, collaborators}'`,
        { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
      );
      const org = JSON.parse(orgJson);
      customerData.orgName = org.name || org.login;
      customerData.repoCount = (org.public_repos || 0) + (org.total_private_repos || 0);
      customerData.developerCount = org.collaborators || 0;
      console.log(`   ✅ Found: ${customerData.orgName} — ${customerData.repoCount} repos, ${customerData.developerCount} members`);
    } catch (e) {
      console.log(`   ⚠️  Public API failed (${e.message.split('\n')[0]}). Trying Kusto...`);
    }

    // Fetch repos for language breakdown
    try {
      const reposJson = execSync(
        `gh api "orgs/${flags.org}/repos?per_page=100&sort=updated" --jq '[.[] | {name, language, private, updated_at}]'`,
        { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
      );
      const repos = JSON.parse(reposJson);
      customerData.repos = repos;
      repos.forEach(r => {
        if (r.language) {
          customerData.languages[r.language] = (customerData.languages[r.language] || 0) + 1;
        }
      });
      console.log(`   ✅ Fetched ${repos.length} repos. Top languages: ${Object.entries(customerData.languages).sort((a,b) => b[1]-a[1]).slice(0,3).map(([l]) => l).join(', ')}`);
    } catch (e) {
      console.log(`   ⚠️  Repo fetch failed.`);
    }
  }

  // Step 2: Try Kusto for enterprise-level data (if enterprise slug provided)
  if (flags.enterprise || (customerData.developerCount === 0 && flags.org)) {
    const slug = flags.enterprise || flags.org;
    console.log(`\n📊 Querying Kusto for enterprise: ${slug}`);

    const kustoQuery = `
      let ent = "${slug}";
      github_mysql1_businesses
      | where snapshot_date == format_datetime(datetime_add('day', -1, now()), 'yyyy-MM-dd')
      | where slug =~ ent or name =~ ent
      | project business_id = id, name, slug, plan_name, seats_purchased = billable_seats
      | take 1
    `;

    try {
      // This requires az login and access to gh-analytics
      const result = execSync(
        `az kusto query --cluster "https://ghanalytics.eastus2.kusto.windows.net" --database "snapshots" --query '${kustoQuery.replace(/'/g, "\\'")}' 2>/dev/null`,
        { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
      );
      const parsed = JSON.parse(result);
      if (parsed && parsed.length > 0) {
        const row = parsed[0];
        customerData.orgName = row.name || customerData.orgName;
        customerData.developerCount = row.seats_purchased || customerData.developerCount;
        console.log(`   ✅ Kusto: ${row.name} — ${row.plan_name}, ${row.seats_purchased} seats`);
      }
    } catch (e) {
      console.log(`   ⚠️  Kusto query failed (auth issue or no access). Using API data only.`);
    }
  }

  // Step 3: Generate the customized data.js
  console.log('\n📝 Generating customized data.js...');

  const repoEntries = generateRepoEntries(customerData);
  const findings = calculateFindings(repoEntries);

  const output = `// GitGood Enterprise Upgrade Demo — Customer Data
// ================================================
// Auto-generated for: ${customerData.orgName}
// Generated at: ${new Date().toISOString()}
// Source: ${flags.org ? 'GitHub API' : 'Kusto'} + simulated findings
//
// To regenerate: node prep/generate-customer-data.js --org "${flags.org || flags.enterprise}"

const customerProfile = {
  orgName: "${customerData.orgName}",
  repoCount: ${customerData.repoCount || repoEntries.length},
  developerCount: ${customerData.developerCount || 50},
  currentPlan: "Teams",
  currentCostPerUser: 4,
  enterpriseCostPerUser: 21,
};

const repositories = ${JSON.stringify(repoEntries, null, 2)};

const securityFindings = {
  totalSecrets: ${findings.secrets},
  totalVulns: ${findings.vulns},
  totalDeps: ${findings.deps},
  unprotectedRepos: ${findings.unprotected},
  auditGapDays: 90,
};
`;

  const outputPath = path.join(__dirname, '..', 'js', 'data.js');
  fs.writeFileSync(outputPath, output);
  console.log(`   ✅ Written to: ${outputPath}`);
  console.log(`\n🎉 Done! Open index.html to see the personalized demo.`);
  console.log(`   Customer: ${customerData.orgName}`);
  console.log(`   Repos: ${customerData.repoCount || repoEntries.length}`);
  console.log(`   Developers: ${customerData.developerCount || 50}`);
  console.log(`   Simulated findings: ${findings.secrets} secrets, ${findings.vulns} vulns, ${findings.deps} dep alerts`);
}

function generateRepoEntries(customerData) {
  const langColors = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'Python': '#3572A5',
    'Java': '#b07219', 'Go': '#00ADD8', 'Ruby': '#701516', 'C#': '#178600',
    'C++': '#f34b7d', 'PHP': '#4F5D95', 'Swift': '#F05138', 'Kotlin': '#A97BFF',
    'Rust': '#dea584', 'Shell': '#89e051', 'HTML': '#e34c26', 'HCL': '#844FBA',
  };

  // Use real repos if we have them
  if (customerData.repos.length > 0) {
    return customerData.repos.slice(0, 12).map((repo, i) => {
      const roll = Math.random();
      let severity = 'ok';
      let findings = { secrets: 0, vulns: 0, deps: 0 };

      if (roll < 0.25) {
        severity = 'critical';
        findings = { secrets: Math.ceil(Math.random() * 3), vulns: Math.ceil(Math.random() * 2), deps: Math.floor(Math.random() * 3) };
      } else if (roll < 0.65) {
        severity = 'warning';
        findings = { secrets: 0, vulns: 0, deps: Math.ceil(Math.random() * 5) };
      }

      return {
        name: repo.name,
        lang: repo.language || 'Unknown',
        langColor: langColors[repo.language] || '#8b949e',
        findings,
        severity,
      };
    });
  }

  // Fallback: generate realistic-looking repo names
  const templates = [
    'api-gateway', 'web-app', 'auth-service', 'data-pipeline',
    'mobile-backend', 'admin-portal', 'shared-libs', 'infra-config',
    'notification-svc', 'billing-api', 'search-service', 'analytics-engine',
  ];
  const topLangs = Object.entries(customerData.languages).sort((a,b) => b[1]-a[1]).map(([l]) => l);
  const langs = topLangs.length > 0 ? topLangs : ['TypeScript', 'Python', 'Go', 'Java'];

  return templates.map((name, i) => {
    const lang = langs[i % langs.length];
    const roll = Math.random();
    let severity = 'ok';
    let findings = { secrets: 0, vulns: 0, deps: 0 };

    if (roll < 0.25) {
      severity = 'critical';
      findings = { secrets: Math.ceil(Math.random() * 3), vulns: Math.ceil(Math.random() * 2), deps: Math.floor(Math.random() * 3) };
    } else if (roll < 0.65) {
      severity = 'warning';
      findings = { secrets: 0, vulns: 0, deps: Math.ceil(Math.random() * 5) };
    }

    return { name, lang, langColor: langColors[lang] || '#8b949e', findings, severity };
  });
}

function calculateFindings(repos) {
  return {
    secrets: repos.reduce((sum, r) => sum + r.findings.secrets, 0),
    vulns: repos.reduce((sum, r) => sum + r.findings.vulns, 0),
    deps: repos.reduce((sum, r) => sum + r.findings.deps, 0),
    unprotected: Math.max(3, Math.round(repos.length * 0.3)),
  };
}

main().catch(console.error);
