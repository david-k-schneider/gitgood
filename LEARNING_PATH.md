# Learning Path

Your journey through the GitHub platform, one milestone at a time.

Each milestone is a hands-on task. Complete them in order. GitHub Actions will post explainer comments along the way, so you'll learn as you build.

---

## Milestone 1: Fork & Setup ✅

**Goal**: Get the project running on your machine.

**What you'll do**:
1. Fork this repository to your own GitHub account
2. Clone it locally
3. Run `npm install` to set up dependencies
4. Run `npm start` to verify the app starts

**What you'll learn**: Repositories are the foundation of GitHub. Every piece of code, every config file, every automation lives in a repo. When customers evaluate GitHub, the repository experience is where it starts.

**Open the Issue**: Create a new Issue using the **"Milestone 1: Setup Complete"** template to track your progress.

---

## Milestone 2: Plan with Issues 📋

**Goal**: Create an Issue to plan a feature.

**What you'll do**:
1. Open a new Issue: "Add webhook endpoint to receive form submissions"
2. Add labels (e.g., `enhancement`, `good first issue`)
3. Assign it to yourself
4. Add it to a Project board (if available)

**What you'll learn**: Issues are how teams plan, discuss, and track work. Unlike external tools (Jira, ServiceNow), GitHub Issues live alongside the code. When a developer references `#42` in a commit message, the Issue and code are automatically linked. This traceability is a key differentiator.

---

## Milestone 3: Branch & Build with Copilot 🤖

**Goal**: Create a branch and use Copilot to write your webhook handler.

**What you'll do**:
1. Create a branch: `git checkout -b feature/webhook-handler`
2. Open `src/webhook.js` in your editor
3. Follow the TODO comments and let Copilot generate the code
4. Open `src/notify.js` and let Copilot help you build the Slack notification sender

**What you'll learn**: Branching lets developers work on features in isolation without affecting the main codebase. Combined with Copilot, developers stay in flow because they spend less time context-switching to documentation, Stack Overflow, or writing boilerplate. Copilot doesn't just autocomplete; it understands the project context and generates meaningful, functional code.

**Pro tip**: Try typing a comment describing what you want, then let Copilot generate the implementation. For example:
```javascript
// Parse the incoming webhook payload and extract the form fields
```

---

## Milestone 4: First Commit 💾

**Goal**: Commit your code with a meaningful message.

**What you'll do**:
1. Stage your changes: `git add .`
2. Commit with a descriptive message: `git commit -m "feat: add webhook handler for form submissions"`
3. Push to your fork: `git push origin feature/webhook-handler`

**What you'll learn**: Every commit is a snapshot in time. Enterprise customers love that Git provides a complete audit trail. Who changed what, when, and why, all linked back to the Issue that requested the change. Conventional commit messages (like `feat:`, `fix:`, `docs:`) help teams automate changelogs and releases.

---

## Milestone 5: Open a Pull Request 🔀

**Goal**: Propose your changes for review.

**What you'll do**:
1. Go to your fork on GitHub
2. Click **"Compare & pull request"**
3. Write a description of what you built and why
4. Reference your Issue: "Closes #2" (this auto-links the PR to the Issue)
5. Submit the PR

**What you'll learn**: Pull Requests are the collaboration hub. They're where code review happens, automated checks run, and decisions are documented. For enterprise customers, PRs are also a compliance mechanism: branch protection rules can require reviews, passing CI, and specific approvers before code can be merged. This is governance without friction.

---

## Milestone 6: CI with GitHub Actions ⚙️

**Goal**: Watch automated tests run on your PR.

**What you'll do**:
1. After opening your PR, go to the **Checks** tab
2. Watch the CI workflow run your tests
3. If tests fail, use the logs to debug and push a fix
4. See the green checkmark when everything passes

**What you'll learn**: GitHub Actions is CI/CD built into the platform. No separate Jenkins server, no CircleCI integration, no context switching. Developers push code and see results in the same place. Actions supports 15,000+ community-built actions in the Marketplace, and enterprises can create private, reusable actions across their organization. This is where "developer velocity" becomes measurable.

---

## Milestone 7: Code Review 👀

**Goal**: Experience the review process.

**What you'll do**:
1. Review the automated Copilot code review comments on your PR (if enabled)
2. Read through the diff yourself
3. Make any requested changes and push updates
4. Approve and merge when ready

**What you'll learn**: Code review is a quality multiplier. Studies show it reduces defects by 60-90%. GitHub's review tools (inline comments, suggested changes, review threads) make it collaborative rather than adversarial. Copilot code review automates the first pass, catching bugs and style issues so human reviewers can focus on architecture and logic. For enterprises, required reviews are a branch protection rule that enforces quality gates.

---

## Milestone 8: Security Scanning 🔒

**Goal**: See GitHub Advanced Security in action.

**What you'll do**:
1. Check the **Security** tab on your repository
2. Review any Dependabot alerts for vulnerable dependencies
3. Check for secret scanning alerts (try committing a test API key pattern)
4. Review any code scanning results

**What you'll learn**: GitHub Advanced Security (GHAS) is the security suite that finds vulnerabilities before they reach production. Dependabot monitors dependencies, secret scanning catches leaked credentials, and code scanning (CodeQL) finds bugs in your code. The key value prop: security is integrated into the developer workflow, not bolted on as a separate gate. Developers fix issues in the PR, not weeks later in a security review.

---

## Milestone 9: Merge & Deploy 🚢

**Goal**: Merge your PR and see deployment in action.

**What you'll do**:
1. Merge your PR using the **"Squash and merge"** option
2. Watch the deployment workflow trigger
3. Verify your webhook integration is live

**What you'll learn**: Merging is the moment code becomes official. Squash merging keeps the main branch clean (one commit per feature). GitHub Environments and deployment protection rules let enterprises require approvals before deploying to production, configure environment-specific secrets, and track deployment history. This is where "ship with confidence" becomes real.

---

## Milestone 10: Graduation 🎓

**Goal**: Complete the learning path.

**What you'll do**:
1. Create a final Issue using the **"Milestone 10: Graduation"** template
2. The graduation workflow will verify your completed milestones
3. Receive your completion badge

**What you'll learn**: You've now experienced the full GitHub platform as a developer. Every feature you used maps to a customer conversation:

| You Did This | Customer Value |
|-------------|---------------|
| Forked a repo | Source code management |
| Planned with Issues | Integrated project planning |
| Branched and coded with Copilot | AI-powered developer productivity |
| Committed and pushed | Audit trail and version control |
| Opened a PR | Collaboration and quality gates |
| Ran CI with Actions | Built-in automation |
| Reviewed code | Defect prevention and knowledge sharing |
| Scanned for security issues | Shift-left security |
| Merged and deployed | Confidence in production |

**You don't need to be a developer to sell GitHub. But having built something real gives you credibility that no slide deck can match.**

---

## What's Next?

- **Customize your project**: Extend the webhook handler to support different event sources
- **Explore Actions Marketplace**: Find actions that automate your workflow
- **Try Copilot Chat**: Ask Copilot to explain code, suggest improvements, or generate tests
- **Share your experience**: Tell your team what you learned and help them get started
