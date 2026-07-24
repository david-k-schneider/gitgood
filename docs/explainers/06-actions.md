# GitHub Actions — Built-in CI/CD

## What It Is
GitHub Actions is GitHub's automation platform. It lets you build, test, and deploy code directly from your repository. Workflows are defined in YAML files and triggered by events (push, PR, schedule, manual dispatch, or any of 35+ webhook events).

## The Technical Reality
- Workflows live in `.github/workflows/` as YAML files
- **Triggers**: push, pull_request, schedule (cron), workflow_dispatch (manual), issue events, and more
- **Runners**: GitHub-hosted (Ubuntu, Windows, macOS) or self-hosted (your infrastructure)
- **Actions Marketplace**: 15,000+ community-built reusable actions
- **Matrix builds**: Test across multiple OS/version combinations in parallel
- **Reusable workflows**: Share workflow definitions across repos

## Why Customers Care

### For Developers
- **Zero setup CI**: Push a YAML file, get CI. No Jenkins server to maintain.
- **Native integration**: Results show directly on PRs — no context switching
- **Fast feedback**: Know if your code works within minutes of pushing
- **Marketplace ecosystem**: Pre-built actions for almost any task

### For Engineering Leaders
- **Consolidation**: Replace Jenkins, CircleCI, TravisCI with a built-in solution
- **Standardization**: Reusable workflows enforce consistent CI/CD across the org
- **Visibility**: See build status, deployment history, and workflow runs in one place
- **Cost**: GitHub-hosted runners mean no infrastructure to manage (or use self-hosted for control)

### For Security/Compliance
- **Environment protection rules**: Require approvals before deploying to production
- **OIDC integration**: No long-lived cloud credentials needed
- **Audit trail**: Every workflow run is logged with inputs, outputs, and approvals
- **Required status checks**: PRs can only merge when CI passes

## Key Differentiator vs. Competitors
Actions is the only major CI/CD platform that's native to the code hosting platform. Jenkins requires separate servers. CircleCI/TravisCI are third-party integrations. GitLab CI is comparable in concept but lacks the Actions Marketplace ecosystem and GitHub's community network effect.

## Talk Track
> "GitHub Actions is CI/CD that lives with your code. No separate tool to configure, no server to maintain. You define your pipeline in a YAML file, commit it to the repo, and every push triggers automatically. The Marketplace has 15,000+ pre-built actions, and reusable workflows let you standardize CI/CD across hundreds of repos. Teams typically replace 2-3 separate tools when they adopt Actions."

## Common Customer Questions

**Q: Can we use our own build servers?**
A: Yes. Self-hosted runners let you run Actions on your own infrastructure. This is common for compliance requirements, GPU workloads, or on-premises builds. Runners can be physical machines, VMs, or containers.

**Q: How does pricing work?**
A: GitHub-hosted runners are included with GitHub plans (with usage limits). Self-hosted runners are free. Larger GitHub-hosted runners are available for compute-intensive workloads at published per-minute rates.

**Q: Can we restrict which actions are allowed?**
A: Yes. Enterprise admins can restrict actions to only those from verified creators, specific organizations, or an explicit allow list. This prevents supply chain risks from untrusted actions.
