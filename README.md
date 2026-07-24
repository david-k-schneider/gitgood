# 🎯 GitGood

**Learn GitHub by building something real.**

GitGood is a hands-on learning environment where you pick a project, use GitHub Copilot to build it, and experience every part of the GitHub platform along the way. No prior coding experience required; Copilot does the heavy lifting. You just need curiosity.

## How It Works

1. **Pick a use case** from the catalog
2. **Say**: `I need to GitGood [use-case]`
3. **Build** with Copilot guiding you through the code
4. **Learn** as contextual explainers fire at every stage
5. **Graduate** with hands-on experience you can bring to every customer conversation

## Pick Your Project

| Use Case | What You'll Build | Difficulty |
|----------|------------------|-----------|
| 🔌 **[webhook-connector](USE_CASES.md#-use-case-1-webhook-connector)** | A service that relays events to Slack | ⭐⭐ |
| 📊 **[deal-dashboard](USE_CASES.md#-use-case-2-deal-signal-dashboard)** | A live web dashboard with deal signals | ⭐⭐⭐ |
| 🤖 **[meeting-prep](USE_CASES.md#-use-case-3-meeting-prep-bot)** | A CLI tool that auto-generates meeting briefs | ⭐⭐⭐ |
| 📝 **[standup-bot](USE_CASES.md#-use-case-4-team-standup-collector)** | A daily standup collector with Slack digest | ⭐⭐ |
| 🔒 **[secret-vault](USE_CASES.md#-use-case-5-secret-vault-api)** | An encrypted key-value API (surfaces GHAS) | ⭐⭐⭐ |
| 🌐 **[portfolio-site](USE_CASES.md#-use-case-6-personal-portfolio-site)** | A personal portfolio deployed on GitHub Pages | ⭐ |

> **Not sure?** Start with **webhook-connector** (the default). It's practical, approachable, and what your customers build every day.

See **[USE_CASES.md](USE_CASES.md)** for detailed descriptions of each project.

## What You'll Learn

By the end of this journey, you'll have first-hand experience with:

| Feature | What You'll Do | Why Customers Care |
|---------|---------------|-------------------|
| **Repositories** | Fork this repo, clone it locally | Central source of truth for all code |
| **Issues** | Plan your work with Issues | Project tracking integrated with code |
| **Branching** | Create a feature branch | Parallel work without breaking production |
| **Copilot** | Generate code with AI pair programming | 55% faster task completion for developers |
| **Commits** | Save your work with meaningful history | Full auditability and rollback capability |
| **Pull Requests** | Propose changes for review | Quality gates before code reaches production |
| **Actions** | Run automated tests on every push | CI/CD that lives alongside the code |
| **Code Review** | Review and approve changes | Knowledge sharing and defect prevention |
| **Security** | Scan for vulnerabilities and secrets | Shift-left security without extra tools |
| **Deployment** | Merge and deploy your integration | Ship with confidence |

## Getting Started

### Prerequisites
- A GitHub account with Copilot enabled
- [Node.js](https://nodejs.org/) installed (v18 or later)
- A code editor (VS Code recommended, with the GitHub Copilot extension)

### Step 1: Fork This Repository

Click the **Fork** button in the top right. This creates your own copy to work in.

> 💡 **Sales context**: Forking is how open source contributors propose changes. Enterprise customers use organization-owned repos and branching instead, but the collaboration model is the same.

### Step 2: Clone and Setup

```bash
git clone https://github.com/YOUR-USERNAME/gitgood.git
cd gitgood
npm install
```

### Step 3: Pick Your Use Case

Choose a project from the table above, then open your first Issue using the matching template. The learning path adapts to your choice.

### Step 4: Follow the Learning Path

Each milestone builds on the last. See **[LEARNING_PATH.md](LEARNING_PATH.md)** for the full journey.

As you complete each step, GitHub Actions will post **contextual explainer comments** on your Issues and PRs, translating what just happened into customer value language.

---

## How the Explainers Work

This sandbox is instrumented with GitHub Actions that watch for key events:

- **Open an Issue** → You'll get an explainer about project planning on GitHub
- **Create a branch** → You'll learn about branching strategies and parallel development
- **Open a PR** → You'll see how code review and collaboration work
- **CI runs** → You'll understand automated testing and deployment pipelines
- **Security scan triggers** → You'll experience GHAS in action

Each explainer includes:
- 🔍 **What just happened** (the technical action)
- 💼 **Why customers care** (the business value)
- 🎯 **Talk track** (how to position this in a conversation)
- ➡️ **Next step** (what to do next in your learning path)

---

## Project Structure

```
src/
├── index.js       → Entry point (start here)
├── webhook.js     → Webhook receiver (Copilot will help you build this)
└── notify.js      → Slack notifier (Copilot will help you build this)

tests/
└── webhook.test.js → Automated tests (experience CI in action)
```

## Need Help?

- Use **GitHub Copilot** in your editor; it's context-aware and knows this project
- Check the **[docs/explainers/](docs/explainers/)** folder for deep-dive feature guides
- Open a Discussion in this repo to ask questions

---

*GitGood. Learn by doing, sell with confidence.* 🎯
