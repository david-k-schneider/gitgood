# 🎯 GitGood

**Learn GitHub by building something real. No coding experience needed — Copilot does the heavy lifting.**

---

## 🚀 START HERE (3 steps, 2 minutes)

### 1. Create your copy

Click the green **"Use this template"** button (top right) → **Create a new repository**.

- Owner: your personal account
- Name: `gitgood` (or anything you like)
- Visibility: **Public** (required for some features)
- Click **Create repository**

> ⚠️ **Do NOT fork.** Forks don't copy Issues/templates properly. Always use "Use this template."

### 2. Open a Codespace

On YOUR new repo, click the green **Code** button → **Codespaces** tab → **Create codespace on main**.

This gives you a full development environment in your browser. No local installs needed.

✅ **What success looks like**: A VS Code-like editor opens in your browser with the terminal at the bottom.

### 3. Start the app

In the Codespace terminal at the bottom, type:

```bash
npm install && npm start
```

✅ **Expected output**:
```
> gitgood@1.0.0 start
> node src/index.js

🚀 GitGood server running on port 3000
Health check: http://localhost:3000/health
```

**That's it. You're ready to go.**

---

## 📋 The Learning Path (10 milestones)

Everything is done through **Issues**. Each milestone is a template that tells you exactly what to do.

Go to your repo's **Issues** tab → **New issue** → pick the next milestone template.

| # | Milestone | What You'll Do | Platform Feature |
|---|-----------|---------------|-----------------|
| 1 | Setup Complete | Verify your Codespace works | Repos, Codespaces |
| 2 | Plan with Issues | Write a feature request Issue | Issues, Labels |
| 3 | Branch & Build | Write code with Copilot | Branching, Copilot |
| 4 | First Commit | Save and push your code | Git, Audit Trail |
| 5 | Pull Request | Propose changes for review | PRs, Linking |
| 6 | Code Review | Review code inline | Reviews, Quality |
| 7 | CI with Actions | Watch automated tests run | Actions, CI/CD |
| 8 | Merge & Deploy | Ship to production | Deployment |
| 9 | Security Scanning | Explore GHAS features | Security, GHAS |
| 10 | Graduation | Reflect and certify | 🎓 |

**Do them in order.** Each one takes 5-15 minutes. The whole path takes about 2 hours.

> 💡 Every template includes exact commands to type, expected output, and a "Why this matters" explainer so you can connect what you're doing to customer conversations.

---

## 🎯 What You're Building

A **webhook connector** — a small Node.js service that receives events from external tools (like MS Forms) and sends notifications to Slack.

This is the most common integration pattern your customers build. By the end, you'll have built one yourself using every major GitHub feature.

Want a different project? See **[USE_CASES.md](USE_CASES.md)** for alternatives (dashboard, bot, portfolio site, etc.)

---

## ❓ Troubleshooting

| Problem | Fix |
|---------|-----|
| "Use this template" button missing | Ask the repo owner to mark it as a template (Settings → Template repository) |
| Codespace won't start | Check you have Codespace access. Try: Code → Codespaces → Create |
| `npm install` fails | Run `node --version` — need v18+. In Codespace this should be automatic |
| Issue templates not showing | Make sure you used "Use this template", NOT "Fork" |
| Only see some milestone templates | You're on a fork. Delete it, use the template button instead |

---

## 📚 More Detail

- **[LEARNING_PATH.md](LEARNING_PATH.md)** — deeper context for each milestone
- **[USE_CASES.md](USE_CASES.md)** — alternative project ideas beyond webhook-connector

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
