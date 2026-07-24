# GitHub Advanced Security (GHAS) — Shift-Left Security

## What It Is
GitHub Advanced Security is a suite of security tools built into the developer workflow. It finds vulnerabilities, leaked secrets, and insecure dependencies before code reaches production.

## The Components

### 1. Code Scanning (CodeQL)
- Static analysis that finds bugs and vulnerabilities in your code
- Supports 10+ languages (JavaScript, Python, Java, Go, C/C++, C#, Ruby, Swift, Kotlin)
- Runs on every PR, results appear as inline annotations
- Custom queries let security teams encode their own rules

### 2. Secret Scanning
- Detects 200+ types of leaked credentials (API keys, tokens, passwords)
- Scans commits, Issues, PR descriptions, and wikis
- **Push protection**: Blocks pushes that contain secrets *before* they enter the repo
- Partner program notifies service providers when their tokens are leaked

### 3. Dependabot
- Monitors dependencies for known vulnerabilities (CVEs)
- Automatically opens PRs to update vulnerable packages
- Version updates keep dependencies current (not just security fixes)
- Grouped updates reduce PR noise

### 4. Security Overview
- Organization and enterprise-wide dashboard of security posture
- Track enablement, alert trends, and mean time to remediation
- Risk-based prioritization across hundreds of repos

## Why Customers Care

### For Developers
- **Fix where you code**: Vulnerabilities appear as PR comments, not separate security tickets weeks later
- **Actionable**: Each alert includes a description, severity, and fix suggestion
- **No extra tools**: Security is in the same platform they already use

### For Security Teams
- **Shift left**: Find issues in development, not production
- **Coverage at scale**: Enable across the entire organization with one policy
- **Metrics**: Track mean time to remediation, alert trends, and coverage
- **Custom rules**: Encode your security standards as CodeQL queries

### For CxOs
- **Risk reduction**: Find and fix vulnerabilities before they become incidents
- **Compliance**: Demonstrate proactive security practices to auditors
- **Consolidation**: Replace Snyk, SonarQube, and separate secret management tools
- **ROI**: Preventing one breach pays for GHAS many times over

## Talk Track
> "GHAS brings security into the developer workflow. Instead of a separate security team finding vulnerabilities weeks after code is written, developers see security alerts right on their Pull Request. Secret scanning with push protection stops leaked credentials before they ever reach the repo. And Dependabot automatically updates vulnerable dependencies. It's security that scales with your development velocity."

## Common Customer Questions

**Q: How does GHAS compare to Snyk?**
A: Both find vulnerabilities, but GHAS is native to GitHub. No separate tool, no context switching, no additional vendor relationship. CodeQL is more powerful for custom analysis. Snyk has broader language support for SCA but lacks the integrated secret scanning and push protection.

**Q: Is it included with our GitHub plan?**
A: GHAS is included with GitHub Enterprise Cloud. Dependabot alerts and security advisories are free for all plans. Secret scanning is available for all public repos for free.

**Q: Can it block deployments on security findings?**
A: Yes. Branch protection rules can require security checks to pass before merging. You can set severity thresholds (e.g., block on critical/high, warn on medium).
