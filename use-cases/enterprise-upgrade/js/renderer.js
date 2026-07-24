// GitGood Enterprise Upgrade Demo — Renderer
// ============================================
// Renders the repo grids for Teams and Enterprise views.

function renderTeamsGrid() {
  const grid = document.getElementById('repoGrid');
  grid.innerHTML = repositories.map(repo => `
    <div class="repo-card ok">
      <div class="repo-name">📁 ${repo.name}</div>
      <div class="repo-lang">
        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${repo.langColor};margin-right:4px;"></span>
        ${repo.lang}
      </div>
      <div class="repo-status">✅ No issues visible</div>
    </div>
  `).join('');
}

function renderEnterpriseGrid() {
  const grid = document.getElementById('enterpriseRepoGrid');
  grid.innerHTML = repositories.map(repo => {
    const totalFindings = repo.findings.secrets + repo.findings.vulns + repo.findings.deps;
    const severityClass = repo.severity;

    let statusText = '';
    if (repo.severity === 'critical') {
      statusText = `🔴 ${totalFindings} findings (${repo.findings.secrets} secrets, ${repo.findings.vulns} vulns)`;
    } else if (repo.severity === 'warning') {
      statusText = `🟡 ${totalFindings} findings (${repo.findings.deps} dep alerts)`;
    } else {
      statusText = `✅ Clean`;
    }

    return `
      <div class="repo-card ${severityClass}">
        <div class="repo-name">📁 ${repo.name}</div>
        <div class="repo-lang">
          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${repo.langColor};margin-right:4px;"></span>
          ${repo.lang}
        </div>
        <div class="repo-status">${statusText}</div>
      </div>
    `;
  }).join('');
}

function updateCustomerBanner() {
  document.getElementById('orgName').textContent = customerProfile.orgName;
  document.getElementById('repoCount').textContent = customerProfile.repoCount;
  document.getElementById('devCount').textContent = customerProfile.developerCount;
  document.getElementById('currentPlan').textContent = `GitHub ${customerProfile.currentPlan}`;
}

function updateAlertCounts() {
  document.getElementById('vulnCount').textContent = securityFindings.totalVulns;
  document.getElementById('secretCount').textContent = securityFindings.totalSecrets;
  document.getElementById('auditGap').textContent = securityFindings.auditGapDays;
  document.getElementById('unprotectedCount').textContent = securityFindings.unprotectedRepos;
}
