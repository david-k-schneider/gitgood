// 📡 Webhook Handler
//
// This module receives and validates incoming webhook payloads.
// Think of it as the "front door" of your integration — it decides
// whether an incoming request is legitimate and extracts the useful data.
//
// 💡 SALES CONTEXT: Webhook validation is a security best practice.
//    GitHub webhooks support HMAC signature verification, which means
//    the receiver can confirm the payload genuinely came from GitHub.
//    This is part of the "secure by default" story.

const { sendNotification } = require('./notify');

/**
 * Handle an incoming webhook payload.
 *
 * TODO: Use Copilot to help you build this function!
 *
 * It should:
 * 1. Validate that the payload has the required fields
 * 2. Extract the relevant information
 * 3. Send a notification via the notify module
 * 4. Return a success response
 *
 * Try typing a comment like:
 *   // Validate the payload has a source and message field
 * and let Copilot generate the implementation.
 */
async function handleWebhook(payload) {
  // Validate the payload has required fields
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid payload: expected a JSON object');
  }

  if (!payload.source) {
    throw new Error('Missing required field: source');
  }

  if (!payload.message) {
    throw new Error('Missing required field: message');
  }

  // TODO: Use Copilot to extract and format the notification data.
  //
  // Hint: Build a notification object with the payload data.
  // Try typing:
  //   // Create a notification object with source, message, and timestamp

  const notification = {
    source: payload.source,
    message: payload.message,
    timestamp: payload.timestamp || new Date().toISOString(),
    metadata: payload.metadata || {}
  };

  // TODO: Use Copilot to send the notification.
  //
  // Hint: Call sendNotification and return the result.
  // The function is already imported at the top of this file.

  console.log(`📨 Received webhook from: ${notification.source}`);

  const result = await sendNotification(notification);

  return {
    success: true,
    message: 'Webhook processed and notification sent',
    id: result.id
  };
}

module.exports = { handleWebhook };
