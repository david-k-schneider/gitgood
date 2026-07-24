// GitGood Enterprise Upgrade Demo — App Controller
// =================================================

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  updateCustomerBanner();
  renderTeamsGrid();
  renderEnterpriseGrid();
  updateAlertCounts();
  calculateROI();
});

// Core toggle: Teams → Enterprise
function unlockEnterprise() {
  document.getElementById('teamsView').classList.add('hidden');
  document.getElementById('enterpriseView').classList.remove('hidden');

  // Scroll to top of enterprise view
  document.getElementById('enterpriseView').scrollIntoView({ behavior: 'smooth' });
}

// Reset: Enterprise → Teams
function resetToTeams() {
  document.getElementById('enterpriseView').classList.add('hidden');
  document.getElementById('teamsView').classList.remove('hidden');
  document.getElementById('teamsView').scrollIntoView({ behavior: 'smooth' });
}

// Tab switching
function switchTab(tabName) {
  // Deactivate all tabs and content
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  // Activate selected
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

// Customizer modal
function openCustomizer() {
  document.getElementById('customOrgName').value = customerProfile.orgName;
  document.getElementById('customRepoCount').value = customerProfile.repoCount;
  document.getElementById('customDevCount').value = customerProfile.developerCount;
  document.getElementById('customizerModal').classList.remove('hidden');
}

function closeCustomizer() {
  document.getElementById('customizerModal').classList.add('hidden');
}

function applyCustomization() {
  customerProfile.orgName = document.getElementById('customOrgName').value;
  customerProfile.repoCount = parseInt(document.getElementById('customRepoCount').value);
  customerProfile.developerCount = parseInt(document.getElementById('customDevCount').value);

  // Update displays
  updateCustomerBanner();
  document.getElementById('roiDevCount').value = customerProfile.developerCount;
  calculateROI();

  closeCustomizer();
}
