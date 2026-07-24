// GitGood Enterprise Upgrade Demo — Customer Data
// ================================================
// Edit this file to customize the demo for each customer.
// The values below drive the entire interactive experience.

const customerProfile = {
  orgName: "Acme Corp",
  repoCount: 48,
  developerCount: 85,
  currentPlan: "Teams",
  currentCostPerUser: 4,
  enterpriseCostPerUser: 21,
};

// Simulated repositories (shown in the grid)
// Customize names/languages to match what the customer actually uses
const repositories = [
  { name: "payments-api", lang: "TypeScript", langColor: "#3178c6", findings: { secrets: 2, vulns: 1, deps: 3 }, severity: "critical" },
  { name: "web-frontend", lang: "JavaScript", langColor: "#f1e05a", findings: { secrets: 0, vulns: 2, deps: 5 }, severity: "warning" },
  { name: "auth-service", lang: "Python", langColor: "#3572A5", findings: { secrets: 3, vulns: 1, deps: 2 }, severity: "critical" },
  { name: "mobile-app", lang: "Swift", langColor: "#F05138", findings: { secrets: 1, vulns: 0, deps: 4 }, severity: "warning" },
  { name: "data-pipeline", lang: "Python", langColor: "#3572A5", findings: { secrets: 2, vulns: 1, deps: 1 }, severity: "critical" },
  { name: "internal-tools", lang: "Go", langColor: "#00ADD8", findings: { secrets: 1, vulns: 0, deps: 2 }, severity: "warning" },
  { name: "docs-site", lang: "Markdown", langColor: "#083fa1", findings: { secrets: 0, vulns: 0, deps: 1 }, severity: "ok" },
  { name: "infra-config", lang: "HCL", langColor: "#844FBA", findings: { secrets: 3, vulns: 0, deps: 0 }, severity: "critical" },
  { name: "analytics-api", lang: "Java", langColor: "#b07219", findings: { secrets: 0, vulns: 1, deps: 3 }, severity: "warning" },
  { name: "notification-svc", lang: "TypeScript", langColor: "#3178c6", findings: { secrets: 0, vulns: 0, deps: 2 }, severity: "ok" },
  { name: "user-service", lang: "Go", langColor: "#00ADD8", findings: { secrets: 1, vulns: 2, deps: 1 }, severity: "critical" },
  { name: "shared-libs", lang: "JavaScript", langColor: "#f1e05a", findings: { secrets: 0, vulns: 0, deps: 4 }, severity: "warning" },
];

// Aggregate stats (computed from repos + reasonable estimates)
const securityFindings = {
  totalSecrets: 12,
  totalVulns: 5,
  totalDeps: 47,
  unprotectedRepos: 7,
  auditGapDays: 90,
};
