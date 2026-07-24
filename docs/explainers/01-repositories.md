# Repositories — The Foundation

## What It Is
A repository (repo) is a container for your project. It holds all your files, every revision of every file, and the entire history of changes.

## The Technical Reality
- Git tracks every change as a **commit** (a snapshot in time)
- Every commit has a unique hash, author, timestamp, and message
- Branches are lightweight pointers to commits (not copies of files)
- The `.git` folder stores the full history locally — you can work offline

## Why Customers Care

### For Developers
- **Single source of truth**: No more "which version is the latest?" confusion
- **Full history**: Roll back any change, see who changed what and why
- **Offline work**: The entire history is on your machine
- **Fast operations**: Branching and switching is milliseconds, not minutes

### For Engineering Leaders
- **Visibility**: See activity, contributions, and velocity across the org
- **Standards**: Repository templates enforce consistent project structure
- **Access control**: Fine-grained permissions at the repo, branch, and environment level
- **Compliance**: Audit logs track who accessed what and when

### For Security Teams
- **Branch protection**: Prevent direct pushes to production branches
- **Signed commits**: Verify the identity of contributors
- **CODEOWNERS**: Require specific teams to review changes to sensitive files
- **Secret scanning**: Detect leaked credentials in the commit history

## Key Differentiator vs. Competitors
GitHub repositories combine code hosting, project management (Issues, Projects), automation (Actions), and security (GHAS) in one place. Competitors like GitLab and Bitbucket offer similar Git hosting, but GitHub's network effect (100M+ developers), AI features (Copilot), and ecosystem (Marketplace, Sponsors, Packages) create a platform advantage.

## Talk Track
> "A GitHub repository isn't just a place to store code. It's where your team plans, builds, reviews, tests, secures, and deploys — all in one place. Every other tool in your stack is an integration away from the code. GitHub puts everything next to it."

## Common Customer Questions

**Q: How does GitHub compare to GitLab for repos?**
A: Both host Git repositories. GitHub's advantage is the developer community (100M+ developers means easier hiring and open source participation), Copilot AI integration, and the breadth of the Marketplace ecosystem.

**Q: Can we migrate our repos from Bitbucket/GitLab?**
A: Yes. GitHub Enterprise Importer (GEI) handles migration of repos, PRs, and Issues at scale. Most migrations are completed in days, not months.

**Q: What about monorepos?**
A: GitHub supports repositories of any size. Large enterprises like Microsoft, Google, and Meta use GitHub for massive monorepos. Features like sparse checkout, CODEOWNERS, and path-based branch protection make large repos manageable.
