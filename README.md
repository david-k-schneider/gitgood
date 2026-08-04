# 🎯 GitGood

**Learn GitHub by building something real. No coding experience needed — Copilot does the heavy lifting.**

---

## 🚀 SETUP (one-time, 2 minutes)

### 1. Create your copy

Click the green **"Use this template"** button (top right) → **Create a new repository**.

- Owner: your personal account
- Name: `gitgood` (or anything you like)
- Visibility: **Public** (required for some features)
- Click **Create repository**

> ⚠️ **Do NOT fork.** Forks don't copy Issues/templates properly. Always use "Use this template."

### 2. Open a Codespace

On YOUR new repo, click the green **Code** button → **Codespaces** tab → **Create codespace on main**.

✅ **Success**: A VS Code-like editor opens in your browser with a terminal at the bottom.

### 3. Start the app

In the terminal, type:

```bash
npm install && npm start
```

✅ **Expected output**:
```
🚀 GitGood server running on port 3000
Health check: http://localhost:3000/health
```

---

## ▶️ START YOUR JOURNEY

Your launchpad is the **Issues** tab. Go there now:

> **Issues** tab → **New issue** → you'll see your milestone menu.

Each milestone is a guided step. Pick them in order. Every one tells you exactly what to type, what to expect, and why it matters.

---

## 🗺️ THE MILESTONE MENU

Click **New issue** and you'll see these 10 milestones. Work through them top to bottom.

| | Milestone | Time | What You'll Do | GitHub Feature You'll Learn |
|---|-----------|------|---------------|----------------------------|
| 1️⃣ | **Setup Complete** | 5 min | Verify your Codespace runs the app | Repos, Codespaces |
| 2️⃣ | **Plan with Issues** | 5 min | Write a feature request as an Issue | Issues, Labels, Assignees |
| 3️⃣ | **Branch & Build** | 15 min | Create a branch, write code with Copilot | Branching, Copilot |
| 4️⃣ | **First Commit** | 5 min | Save your code and push it | Git, Commits, Audit Trail |
| 5️⃣ | **Pull Request** | 10 min | Propose your changes for review | PRs, Issue Linking |
| 6️⃣ | **Code Review** | 10 min | Leave review comments on code | Reviews, Quality Gates |
| 7️⃣ | **CI with Actions** | 10 min | Watch automated tests run on your PR | Actions, CI/CD |
| 8️⃣ | **Merge & Deploy** | 5 min | Merge your PR and ship it | Deployment, Branch Protection |
| 9️⃣ | **Security Scanning** | 10 min | Explore vulnerability and secret detection | GHAS, Dependabot, CodeQL |
| 🔟 | **Graduation** | 10 min | Reflect on what you learned, write your pitch | 🎓 Certification |

**Total time: ~90 minutes**

> 💡 Each template includes: exact commands to copy-paste, expected terminal output, a ✅ success indicator, a "Why this matters" business explainer, and a direct link to the next step.

---

## 🎯 What You're Building

A **webhook connector** — a small service that receives events from external tools (like MS Forms or Stripe) and sends notifications to Slack.

This is the most common integration pattern your customers build. By the end, you'll have built one yourself using every major GitHub feature along the way.

> 🔀 Want a different project? See **[USE_CASES.md](USE_CASES.md)** for alternatives (dashboard, bot, portfolio site). You'll choose at Milestone 3.

---

## ❓ Troubleshooting

| Problem | Fix |
|---------|-----|
| "Use this template" button missing | Ask the repo owner to mark it as a template (Settings → Template repository) |
| Codespace won't start | Check you have Codespace access enabled |
| `npm install` fails | Run `node --version` — need v18+. In Codespace this is automatic |
| Issue templates not showing | You forked instead of using the template. Delete your fork, use "Use this template" |
| Can't find the milestone menu | Go to **Issues** tab → click **New issue** |

---

## 📚 Deep Dives (optional reading)

- **[LEARNING_PATH.md](LEARNING_PATH.md)** — extended context and background for each milestone
- **[USE_CASES.md](USE_CASES.md)** — alternative project ideas (choose at Milestone 3)

---

## How the Explainers Work

This sandbox is instrumented with GitHub Actions that watch for key events:

- **Open an Issue** → explainer about project planning
- **Create a branch** → explainer about branching strategies
- **Open a PR** → explainer about collaboration
- **CI runs** → explainer about automation
- **Security scan** → explainer about GHAS

---

## Project Structure

```
src/
├── index.js       → Entry point (already works)
├── webhook.js     → Webhook receiver (you'll build this with Copilot)
└── notify.js      → Slack notifier (you'll build this with Copilot)

tests/
└── webhook.test.js → Automated tests (triggers CI)
```

---

*GitGood. Learn by doing, sell with confidence.* 🎯
