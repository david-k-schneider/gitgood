// 🔔 Notification Sender
//
// This module sends notifications to Slack (or logs them in development).
// It's the "last mile" of your integration — taking processed data and
// delivering it to where people will actually see it.
//
// 💡 SALES CONTEXT: Slack integrations are one of the most common
//    developer tool requests. GitHub has a native Slack integration,
//    but custom webhooks like this let teams build exactly the
//    notification flow they need. This is the "extensibility" story.

/**
 * Send a notification to Slack (or console in development).
 *
 * TODO: Use Copilot to help you build the Slack integration!
 *
 * For now, this logs to the console. When you're ready, you can
 * add real Slack webhook support.
 *
 * To add Slack support later:
 * 1. Create a Slack Incoming Webhook URL
 * 2. Set it as an environment variable: SLACK_WEBHOOK_URL
 * 3. Use fetch() to POST a message to the webhook URL
 *
 * Try asking Copilot: "How do I send a message to Slack using a webhook?"
 */
async function sendNotification(notification) {
  const id = generateId();

  // Format the message for display
  const formattedMessage = formatMessage(notification);

  // TODO: Use Copilot to add Slack webhook support!
  //
  // Check if SLACK_WEBHOOK_URL is set, and if so, send the notification
  // to Slack. Otherwise, log it to the console.
  //
  // Hint: Try typing:
  //   // If SLACK_WEBHOOK_URL is configured, send to Slack using fetch

  if (process.env.SLACK_WEBHOOK_URL) {
    // Send to Slack
    const response = await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: formattedMessage,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: formattedMessage
            }
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.status}`);
    }

    console.log(`✅ Notification ${id} sent to Slack`);
  } else {
    // Development mode: log to console
    console.log(`\n📬 Notification ${id}:`);
    console.log(formattedMessage);
    console.log('');
    console.log('💡 Set SLACK_WEBHOOK_URL to send real Slack notifications');
  }

  return { id, status: 'sent' };
}

/**
 * Format a notification into a readable message.
 *
 * TODO: Use Copilot to customize this format!
 *
 * Try asking Copilot to add emoji, formatting, or additional fields.
 */
function formatMessage(notification) {
  return [
    `*New notification from ${notification.source}*`,
    `> ${notification.message}`,
    `_Received at ${notification.timestamp}_`
  ].join('\n');
}

/**
 * Generate a simple unique ID for tracking notifications.
 */
function generateId() {
  return `notif_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
}

module.exports = { sendNotification, formatMessage };
