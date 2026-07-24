# 🚀 GitGood Use Case: Enterprise Upgrade Demo

**Command**: `I need to GitGood enterprise-upgrade`

## The Concept

You build an **interactive web app** that visually demonstrates what a GitHub Teams customer is missing by not being on Enterprise. The rep builds it (learning the platform), then **uses it in customer conversations** as a live, personalized demo.

The killer move: instead of leading with SSO and getting shot down on price, you lead with **"let me show you what's happening in your repos right now that you can't see."**

---

## What You'll Build

An interactive single-page app deployed on GitHub Pages that simulates a customer's GitHub org and lets them "toggle on" Enterprise features to see the difference.

### The Experience Flow (for the customer)

```
┌─────────────────────────────────────────────────────────┐
│  "Your GitHub Org Today" (Teams baseline)               │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ Repo 1  │  │ Repo 2  │  │ Repo 3  │  │ Repo 4  │  │
│  │ ✅ OK   │  │ ✅ OK   │  │ ✅ OK   │  │ ✅ OK   │  │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
│                                                         │
│  "Everything looks fine, right?"                        │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │        🔓 Unlock Enterprise View                 │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

         ↓  [Customer clicks "Unlock"]  ↓

┌─────────────────────────────────────────────────────────┐
│  "What Enterprise Would Show You"                       │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ Repo 1  │  │ Repo 2  │  │ Repo 3  │  │ Repo 4  │  │
│  │ 🔴 3    │  │ 🟡 7    │  │ 🔴 2    │  │ 🟡 4    │  │
│  │ vulns   │  │ secrets │  │ critial │  │ deps    │  │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
│                                                         │
│  ⚠️  12 leaked secrets across your org                  │
│  🔴 5 critical vulnerabilities in production deps       │
│  👻 No audit trail for admin actions last 90 days       │
│  🚫 3 repos with no branch protection                   │
│                                                         │
│  "This is what's in your blind spot today."             │
└─────────────────────────────────────────────────────────┘
```

---

## The Feature Gap (What We're Demonstrating)

Instead of leading with SSO ($17/head objection), lead with **risk and visibility**:

### Tier 1: Security Blind Spots (the hook)

| What Teams Can't Do | What Enterprise Reveals | Impact |
|---------------------|------------------------|--------|
| No code scanning | CodeQL finds vulns in your code | "You have 5 critical vulnerabilities you can't see" |
| Secret scanning (alerts only, no push protection) | Push protection blocks secrets BEFORE they're committed | "Last month, 3 API keys were committed to your repos" |
| Basic Dependabot alerts | Dependency review on PRs + auto-remediation | "You're running 47 packages with known CVEs" |
| No security overview | Org-wide security dashboard | "You have zero visibility across all 200 repos" |

### Tier 2: Governance Gaps (the expansion)

| What Teams Can't Do | What Enterprise Enables | Impact |
|---------------------|------------------------|--------|
| No audit log streaming | Stream to Splunk/Sentinel/Datadog | "If someone deletes a repo tonight, you won't know until Monday" |
| No enterprise policies | Enforce rules across all orgs | "Each team sets their own rules — no consistency" |
| No IP allow lists | Restrict access by network | "Anyone with credentials can access code from anywhere" |
| Basic repository roles only | Custom roles with fine-grained permissions | "You can't give contractors read-without-clone access" |
| No internal repositories | Repos visible to all org members (innersource) | "Teams can't discover and reuse each other's code" |

### Tier 3: The AI Multiplier (the upsell)

| Teams + Copilot Business | Enterprise + Copilot Enterprise | Impact |
|--------------------------|-------------------------------|--------|
| Standard completions | Knowledge bases trained on YOUR code | "Copilot that understands your architecture" |
| Generic suggestions | Org-wide custom instructions | "Every developer gets suggestions aligned to your standards" |
| Individual usage | Usage analytics + seat management | "You can't see if your $19/seat investment is paying off" |

---

## Project Structure

```
src/
├── index.html              → Main interactive page
├── css/
│   └── style.css           → Professional styling (dark/light mode)
├── js/
│   ├── app.js              → Main app logic (toggle state management)
│   ├── data.js             → Simulated org data (repos, findings, alerts)
│   ├── renderer.js         → Renders the "Teams" vs "Enterprise" view
│   └── calculator.js       → ROI calculator (cost of breach vs. upgrade cost)
├── components/
│   ├── repo-card.js        → Individual repo card component
│   ├── finding-panel.js    → Security finding detail panel
│   ├── audit-timeline.js   → Audit log simulation
│   └── roi-widget.js       → Interactive ROI calculator
└── assets/
    └── icons/              → Feature icons
```

---

## The Interactive Elements

### 1. The Toggle (core mechanic)
A prominent "Unlock Enterprise View" button that transforms the page. The transition should feel like "turning on the lights in a dark room."

### 2. Customizable Org Data
The rep can edit `data.js` to match the customer's actual profile:
```javascript
const customerProfile = {
  orgName: "Acme Corp",
  repoCount: 200,
  developerCount: 85,
  currentPlan: "Teams",
  monthlySpend: 85 * 4,  // $4/user/month for Teams
  // Enterprise would be: 85 * 21 = $1,785/month
};
```

### 3. The ROI Calculator
Interactive widget that shows:
- **Cost of the upgrade**: `(developerCount x $17/month difference)`
- **Cost of ONE data breach**: Industry average $4.45M (IBM 2023)
- **Cost of ONE leaked secret**: Average $1.2M in remediation
- **Break-even**: "Enterprise pays for itself if it prevents a single incident"

### 4. Simulated Security Findings
Realistic-looking (but fake) security alerts based on common patterns:
- Leaked AWS keys in environment files
- `log4j` in transitive dependencies
- SQL injection in user input handling
- Hardcoded database credentials
- Vulnerable `express` version

### 5. Audit Log Simulation
A timeline showing "events you can't see today":
- Repository deleted at 2:34 AM
- Admin permissions granted to external collaborator
- Branch protection disabled on production branch
- 500MB repository clone from unknown IP

---

## How It Teaches the Platform

While building this demo tool, the rep experiences:

| Building Step | Platform Feature Learned |
|--------------|------------------------|
| Fork and setup the project | Repositories |
| Plan the UI in an Issue | Issues + project planning |
| Branch for each component | Branching strategy |
| Use Copilot to generate the HTML/JS | Copilot |
| Commit each component | Version control |
| Open a PR for the full feature | Pull Requests |
| CI validates the HTML/JS | Actions CI |
| Peer reviews the content accuracy | Code Review |
| Dependabot flags a vulnerable dep | Security (meta!) |
| Deploy to GitHub Pages | Deployment |

**The meta-beauty**: they experience the Enterprise features (like security scanning) while building a tool that *demonstrates* those features to customers.

---

## The Talk Track This Enables

Instead of:
> "You should upgrade to Enterprise for SSO. It's $21/seat instead of $4..."

The rep says:
> "Can I show you something? I built a quick simulation of your org. Right now, on Teams, everything looks green. But when I toggle on Enterprise security features... [clicks] ...here are 12 leaked secrets and 5 critical vulnerabilities that exist in your repos today that you simply cannot see. The upgrade isn't about SSO. It's about what you don't know about your own code."

---

## Why This Works Better Than Leading with SSO

| SSO-first approach | Security-first approach |
|-------------------|------------------------|
| "You need SSO for compliance" | "You have active vulnerabilities you can't see" |
| Customer thinks: "We have Okta, we're fine" | Customer thinks: "Wait, what's in our repos?" |
| Objection: "$17/head is a lot just for SSO" | Reframe: "$17/head vs. $4.45M average breach cost" |
| Abstract compliance argument | Concrete, visual, personalized risk |
| Easy to dismiss | Hard to ignore |

---

## Deployment

The finished app deploys to **GitHub Pages** at:
`https://<username>.github.io/gitgood-enterprise-demo/`

The rep can:
1. Share the URL with the customer before the call (self-serve exploration)
2. Screen-share during the call and walk through it live
3. Customize the data for each customer and deploy a personalized version
4. Fork it for each account they're working (a demo per customer)

---

## Stretch Features (Post-MVP)

- **GitHub API integration**: Pull real public data about the customer's org (public repos, languages, contributor count) to pre-populate the simulation
- **PDF export**: "Here's a summary of what Enterprise would reveal" — leave-behind for the champion
- **Before/after screenshots**: Auto-generated comparison images for email follow-ups
- **Telemetry**: Which features do customers click on most? (informs the pitch)
