// GitGood Enterprise Upgrade Demo — Live API Connector
// =====================================================
// Fetches real public data from a GitHub org via the REST API.
// No auth required for public data; optional PAT for private repos.

const API_BASE = 'https://api.github.com';

async function fetchOrgData(orgName, token = null) {
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const results = {
    org: null,
    repos: [],
    languages: {},
    stats: { repoCount: 0, memberCount: 0, publicRepos: 0, privateRepos: 0 },
    error: null,
  };

  try {
    // Fetch org profile
    const orgRes = await fetch(`${API_BASE}/orgs/${orgName}`, { headers });
    if (!orgRes.ok) {
      if (orgRes.status === 404) {
        results.error = `Organization "${orgName}" not found. Check the spelling or try the username.`;
      } else if (orgRes.status === 403) {
        results.error = 'Rate limited. Try again in a minute, or add a token for higher limits.';
      } else {
        results.error = `GitHub API returned ${orgRes.status}`;
      }
      return results;
    }
    results.org = await orgRes.json();
    results.stats.publicRepos = results.org.public_repos;
    results.stats.memberCount = results.org.members_count || results.org.collaborators || 0;

    // Fetch repos (up to 100 for the demo)
    const reposRes = await fetch(
      `${API_BASE}/orgs/${orgName}/repos?per_page=100&sort=updated&direction=desc`,
      { headers }
    );
    if (reposRes.ok) {
      const repos = await reposRes.json();
      results.repos = repos;
      results.stats.repoCount = repos.length;

      // Count private repos if visible
      results.stats.privateRepos = repos.filter(r => r.private).length;
      results.stats.publicRepos = repos.filter(r => !r.private).length;

      // Aggregate languages
      repos.forEach(repo => {
        if (repo.language) {
          results.languages[repo.language] = (results.languages[repo.language] || 0) + 1;
        }
      });
    }

    return results;
  } catch (err) {
    results.error = `Network error: ${err.message}`;
    return results;
  }
}

// Generate simulated findings based on actual repo languages
function generateFindings(repos) {
  const findingTemplates = {
    'JavaScript': [
      { type: 'Dependency', desc: 'Prototype pollution in lodash < 4.17.21', severity: 'high' },
      { type: 'Secret', desc: 'npm token in .npmrc committed to repo', severity: 'critical' },
      { type: 'Code Scanning', desc: 'XSS via unsanitized innerHTML assignment', severity: 'high' },
    ],
    'TypeScript': [
      { type: 'Dependency', desc: 'jsonwebtoken signature bypass (CVE-2022-23529)', severity: 'critical' },
      { type: 'Secret', desc: 'Stripe API key in config file', severity: 'critical' },
      { type: 'Code Scanning', desc: 'Type assertion bypasses null check', severity: 'medium' },
    ],
    'Python': [
      { type: 'Dependency', desc: 'Remote code execution in PyYAML < 6.0', severity: 'critical' },
      { type: 'Secret', desc: 'AWS credentials in settings.py', severity: 'critical' },
      { type: 'Code Scanning', desc: 'SQL injection via string formatting', severity: 'critical' },
    ],
    'Java': [
      { type: 'Dependency', desc: 'Log4Shell (CVE-2021-44228) in transitive dep', severity: 'critical' },
      { type: 'Secret', desc: 'Database connection string with credentials', severity: 'high' },
      { type: 'Code Scanning', desc: 'Insecure deserialization of user input', severity: 'high' },
    ],
    'Go': [
      { type: 'Dependency', desc: 'Path traversal in golang.org/x/net', severity: 'high' },
      { type: 'Secret', desc: 'GCP service account key in source', severity: 'critical' },
      { type: 'Code Scanning', desc: 'Unbounded goroutine creation from user input', severity: 'medium' },
    ],
    'Ruby': [
      { type: 'Dependency', desc: 'Remote code execution in Nokogiri < 1.13', severity: 'critical' },
      { type: 'Secret', desc: 'Rails secret_key_base in version control', severity: 'critical' },
      { type: 'Code Scanning', desc: 'Mass assignment vulnerability', severity: 'high' },
    ],
    'C#': [
      { type: 'Dependency', desc: 'Vulnerable Newtonsoft.Json deserialization', severity: 'high' },
      { type: 'Secret', desc: 'Azure connection string in appsettings.json', severity: 'critical' },
      { type: 'Code Scanning', desc: 'SQL injection in LINQ raw query', severity: 'high' },
    ],
  };

  // Default findings for languages without specific templates
  const defaultFindings = [
    { type: 'Secret', desc: 'API key pattern detected in source file', severity: 'high' },
    { type: 'Dependency', desc: 'Outdated dependency with known vulnerability', severity: 'medium' },
  ];

  return repos.map(repo => {
    const lang = repo.language || 'Unknown';
    const templates = findingTemplates[lang] || defaultFindings;

    // Simulate: ~30% of repos have critical findings, 40% have warnings
    const roll = Math.random();
    let severity = 'ok';
    let repoFindings = { secrets: 0, vulns: 0, deps: 0 };

    if (roll < 0.3) {
      severity = 'critical';
      repoFindings = {
        secrets: Math.floor(Math.random() * 3) + 1,
        vulns: Math.floor(Math.random() * 2) + 1,
        deps: Math.floor(Math.random() * 3),
      };
    } else if (roll < 0.7) {
      severity = 'warning';
      repoFindings = {
        secrets: 0,
        vulns: 0,
        deps: Math.floor(Math.random() * 5) + 1,
      };
    }

    return {
      name: repo.name,
      lang: lang,
      langColor: getLanguageColor(lang),
      findings: repoFindings,
      severity: severity,
      sampleFindings: templates,
    };
  });
}

// Apply fetched data to the demo
function applyLiveData(orgData) {
  // Update customer profile
  customerProfile.orgName = orgData.org.name || orgData.org.login;
  customerProfile.repoCount = orgData.stats.repoCount + (orgData.stats.privateRepos > 0 ? 0 : Math.round(orgData.stats.repoCount * 0.6));
  customerProfile.developerCount = orgData.stats.memberCount || Math.max(20, Math.round(orgData.stats.repoCount * 1.5));

  // Generate findings based on real repos
  const reposWithFindings = generateFindings(orgData.repos.slice(0, 12));

  // Update the global repositories array
  repositories.length = 0;
  reposWithFindings.forEach(r => repositories.push(r));

  // Recalculate aggregate stats
  securityFindings.totalSecrets = repositories.reduce((sum, r) => sum + r.findings.secrets, 0);
  securityFindings.totalVulns = repositories.reduce((sum, r) => sum + r.findings.vulns, 0);
  securityFindings.totalDeps = repositories.reduce((sum, r) => sum + r.findings.deps, 0);
  securityFindings.unprotectedRepos = Math.max(3, Math.round(repositories.length * 0.3));

  // Re-render everything
  updateCustomerBanner();
  renderTeamsGrid();
  renderEnterpriseGrid();
  updateAlertCounts();
  document.getElementById('roiDevCount').value = customerProfile.developerCount;
  calculateROI();
}

// Language color mapping (subset of GitHub's linguist colors)
function getLanguageColor(lang) {
  const colors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Ruby': '#701516',
    'C#': '#178600',
    'C++': '#f34b7d',
    'PHP': '#4F5D95',
    'Swift': '#F05138',
    'Kotlin': '#A97BFF',
    'Rust': '#dea584',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'HCL': '#844FBA',
    'Dockerfile': '#384d54',
  };
  return colors[lang] || '#8b949e';
}
