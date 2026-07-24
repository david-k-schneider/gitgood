// 🎯 GitGood — Webhook Notification Bot
//
// This is your project entry point. It starts an Express web server
// that listens for incoming webhook events and sends notifications to Slack.
//
// 💡 SALES CONTEXT: This is the kind of integration your customers build
//    every day. Webhooks are how systems talk to each other, and GitHub
//    itself uses webhooks extensively (repo events, PR notifications, etc.)

const express = require('express');
const { handleWebhook } = require('./webhook');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON payloads
app.use(express.json());

// Health check endpoint — useful for monitoring
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// TODO: Use Copilot to help you set up the webhook route!
//
// Hint: You need a POST route at '/webhook' that calls handleWebhook.
// Try typing the comment below and letting Copilot complete it:
//
// Set up POST route for incoming webhooks

app.post('/webhook', async (req, res) => {
  try {
    const result = await handleWebhook(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Webhook processing failed:', error.message);
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Webhook server running on http://localhost:${PORT}`);
  console.log(`📡 Webhook endpoint: http://localhost:${PORT}/webhook`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
});

module.exports = app;
