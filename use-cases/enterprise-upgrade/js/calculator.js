// GitGood Enterprise Upgrade Demo — ROI Calculator
// =================================================

function calculateROI() {
  const devCount = parseInt(document.getElementById('roiDevCount').value) || 85;
  const currentCost = parseInt(document.getElementById('roiCurrentCost').value) || 4;
  const enterpriseCost = parseInt(document.getElementById('roiEnterpriseCost').value) || 21;

  const difference = enterpriseCost - currentCost;
  const annualUpgradeCost = devCount * difference * 12;
  const breachCost = 4450000;
  const breakeven = Math.round(breachCost / annualUpgradeCost);

  document.getElementById('roiUpgradeCost').textContent = `$${annualUpgradeCost.toLocaleString()}`;
  document.getElementById('roiUpgradeDetail').textContent =
    `${devCount} devs × $${difference} difference × 12 months`;
  document.getElementById('roiBreakeven').textContent = `${breakeven}×`;
  document.getElementById('roiBreakevenDetail').textContent =
    `Enterprise pays for itself ${breakeven}× over if it prevents ONE breach`;
}
