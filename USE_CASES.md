# GitGood Use Cases

> "I need to GitGood [use case]"

Each use case is a self-contained project that guides you through the full GitHub platform by building something real. Pick the one that excites you most. They all teach the same platform skills; only the app changes.

---

## 🎯 Choosing Your Use Case

Every use case is designed to naturally touch every part of the platform:

| Platform Feature | How Every Use Case Touches It |
|-----------------|------------------------------|
| **Repositories** | You fork the GitGood repo and set up your project |
| **Issues** | You plan your features as Issues with templates |
| **Branching** | You build each feature on its own branch |
| **Copilot** | You use Copilot to generate the core logic |
| **Commits** | You save progress with meaningful commit messages |
| **Pull Requests** | You propose each feature for review |
| **Actions CI** | Automated tests run on every push |
| **Code Review** | Copilot and peers review your code |
| **Security (GHAS)** | Dependency scanning, secret scanning on your project |
| **Deployment** | Your finished app deploys via Actions |

---

## 🔌 Use Case 1: "Webhook Connector"

**Command**: `I need to GitGood webhook-connector`

**What you'll build**: A webhook relay that receives events from one service (form submissions, alerts, monitoring) and routes formatted notifications to Slack.

**Why it's relatable**: This is literally what your customers build every day. Webhooks are the glue between systems, and GitHub uses them extensively.

**What you'll code with Copilot**:
- An Express server that receives POST requests
- Payload validation and parsing
- Slack message formatting with Block Kit
- Error handling and logging

**Real-world demo value**: "I built a webhook integration on GitHub in an afternoon. Let me show you how Copilot, Actions, and security scanning worked together."

---

## 📊 Use Case 2: "Deal Signal Dashboard"

**Command**: `I need to GitGood deal-dashboard`

**What you'll build**: A simple web dashboard that displays deal-related signals. Think: a single HTML page backed by a small API that shows cards with account activity, renewal dates, or custom alerts you define.

**Why it's relatable**: Every rep wants better deal visibility. Building your own (even a simple version) teaches you what developer teams go through when building internal tools.

**What you'll code with Copilot**:
- A REST API that serves deal signal data (from a JSON file)
- A frontend page with HTML/CSS that fetches and displays cards
- Filtering and sorting logic
- A GitHub Pages deployment workflow

**Platform features highlighted**:
- **GitHub Pages** for deployment (free hosting, straight from the repo)
- **Environment secrets** for API keys
- **Actions** to build and deploy on merge

**Real-world demo value**: "I built and deployed a live dashboard using only GitHub. Code, CI, and hosting — all in one platform."

---

## 🤖 Use Case 3: "Meeting Prep Bot"

**Command**: `I need to GitGood meeting-prep`

**What you'll build**: A CLI tool or simple API that takes a company name and generates a pre-meeting brief using publicly available data (GitHub org profile, recent repos, tech stack signals).

**Why it's relatable**: Every rep preps for meetings. Building a tool that automates part of that prep is immediately useful AND teaches the GitHub API from the inside.

**What you'll code with Copilot**:
- A Node.js script that calls the GitHub REST API
- Data parsing and formatting logic
- Markdown report generation
- A GitHub Action that runs the prep on a schedule or dispatch

**Platform features highlighted**:
- **GitHub API** (you learn it by consuming it)
- **Actions workflow_dispatch** (manually triggered workflows)
- **Artifacts** (the report is saved as a workflow artifact)
- **Secrets** (your GitHub token is stored securely)

**Real-world demo value**: "I used the GitHub API and Actions to build an automated research tool. Here's how the API, automation, and secrets management work together."

---

## 📝 Use Case 4: "Team Standup Collector"

**Command**: `I need to GitGood standup-bot`

**What you'll build**: A lightweight app that collects daily standup updates via a simple web form and posts a summary to Slack (or saves to a file). Think of it as a micro-standup tool.

**Why it's relatable**: Every team does standups. This project is simple enough to build in a few hours but touches form handling, data processing, notifications, and deployment.

**What you'll code with Copilot**:
- A web form (HTML + a small frontend)
- A backend API that receives and stores updates
- A summary formatter that aggregates updates by team/person
- A scheduled Action that posts the daily digest

**Platform features highlighted**:
- **Scheduled Actions** (cron-triggered workflows)
- **GitHub Packages** (optionally publish your bot as an npm package)
- **Branch protection** (set up required reviews before merging to main)
- **CODEOWNERS** (designate yourself as the owner of critical files)

**Real-world demo value**: "I built a team productivity tool and experienced how branch protection, scheduled automation, and code ownership work in practice."

---

## 🔒 Use Case 5: "Secret Vault API"

**Command**: `I need to GitGood secret-vault`

**What you'll build**: A simple, encrypted key-value store API. Users can store and retrieve secrets via REST endpoints, with encryption at rest. Deliberately designed to surface security scanning.

**Why it's relatable**: Security is one of the hardest features to demo convincingly. Building something that handles secrets makes GHAS alerts feel real and urgent rather than theoretical.

**What you'll code with Copilot**:
- A REST API with CRUD endpoints for encrypted key-value pairs
- Node.js `crypto` module for encryption/decryption
- Input validation and rate limiting
- Authentication middleware

**Platform features highlighted**:
- **Secret scanning** (deliberately trigger it by adding a test token, then see push protection block it)
- **Dependabot** (your `crypto` dependencies will be monitored)
- **Code scanning** (CodeQL will flag insecure crypto patterns if you make mistakes)
- **Branch protection** (require security checks to pass before merge)

**Real-world demo value**: "I built an API that handles secrets, and GitHub caught three security issues before I even merged. That's GHAS in action."

---

## 🌐 Use Case 6: "Personal Portfolio Site"

**Command**: `I need to GitGood portfolio-site`

**What you'll build**: A personal portfolio website deployed on GitHub Pages. Showcases your professional profile, highlights key wins, and includes a contact form that sends notifications.

**Why it's relatable**: It's personal and visible. You end up with something you can actually share. And building a website is the most intuitive way to understand the code-to-deployment pipeline.

**What you'll code with Copilot**:
- HTML/CSS layout for a professional portfolio
- JavaScript for interactive elements and form handling
- A GitHub Action that validates HTML and deploys to Pages
- Optional: a serverless function for the contact form

**Platform features highlighted**:
- **GitHub Pages** (deploy a live website directly from the repo)
- **Custom domains** (optionally point your own domain to it)
- **Actions for deployment** (automated build and deploy pipeline)
- **Environments** (staging vs production deployment)

**Real-world demo value**: "I built and deployed a live website using GitHub alone. Here's the URL. That's repos, CI/CD, and deployment in one platform."

---

## How the Skill System Works

When a rep says `I need to GitGood [use-case]`, the system:

1. **Scaffolds the project** — Generates the starter files with Copilot-ready TODOs specific to that use case
2. **Creates milestone Issues** — Pre-populates the Issues tab with the learning path, customized for the chosen project
3. **Activates the explainer workflows** — The same event-driven explainer Actions fire regardless of use case
4. **Sets up CI** — A test suite and CI workflow tailored to the project type
5. **Configures deployment** — The right deployment target for the project (Pages, webhook endpoint, CLI tool)

The platform learning is consistent. The project is personal.

---

## Use Case Comparison

| Use Case | Complexity | Best For | Key Platform Feature Highlighted |
|----------|-----------|----------|--------------------------------|
| 🔌 Webhook Connector | ⭐⭐ | "I want something practical" | Actions, Secrets, Webhooks |
| 📊 Deal Dashboard | ⭐⭐⭐ | "I want something visual" | GitHub Pages, Environments |
| 🤖 Meeting Prep Bot | ⭐⭐⭐ | "I want to learn the GitHub API" | API, Artifacts, workflow_dispatch |
| 📝 Standup Collector | ⭐⭐ | "I want something my team will use" | Scheduled Actions, Packages |
| 🔒 Secret Vault | ⭐⭐⭐ | "I want to understand security" | GHAS, Secret Scanning, CodeQL |
| 🌐 Portfolio Site | ⭐ | "I want something I can share" | Pages, Custom Domains, Deployment |

---

*Pick one. Build it. GitGood.* 🎯
