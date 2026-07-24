const { describe, it } = require('node:test');
const assert = require('node:assert');
const { handleWebhook } = require('../src/webhook');
const { formatMessage } = require('../src/notify');

// 🧪 Webhook Handler Tests
//
// These tests run automatically in GitHub Actions when you open a PR.
// That's CI (Continuous Integration) in action!
//
// 💡 SALES CONTEXT: Automated testing is a core part of the GitHub
//    value proposition. Tests give developers confidence that their
//    changes don't break existing functionality. GitHub Actions runs
//    these tests on every push, so issues are caught before merge.

describe('Webhook Handler', () => {
  it('should process a valid webhook payload', async () => {
    const payload = {
      source: 'test-form',
      message: 'New submission received'
    };

    const result = await handleWebhook(payload);

    assert.strictEqual(result.success, true);
    assert.ok(result.id, 'Should return a notification ID');
  });

  it('should reject a payload without a source', async () => {
    const payload = {
      message: 'Missing source field'
    };

    await assert.rejects(
      () => handleWebhook(payload),
      { message: 'Missing required field: source' }
    );
  });

  it('should reject a payload without a message', async () => {
    const payload = {
      source: 'test-form'
    };

    await assert.rejects(
      () => handleWebhook(payload),
      { message: 'Missing required field: message' }
    );
  });

  it('should reject an invalid payload', async () => {
    await assert.rejects(
      () => handleWebhook(null),
      { message: 'Invalid payload: expected a JSON object' }
    );
  });

  // TODO: Use Copilot to add more tests!
  //
  // Ideas:
  // - Test that metadata is preserved in the notification
  // - Test that a custom timestamp is used when provided
  // - Test that the default timestamp is set when not provided
});

describe('Message Formatting', () => {
  it('should format a notification message correctly', () => {
    const notification = {
      source: 'my-form',
      message: 'Hello world',
      timestamp: '2025-01-15T10:00:00Z'
    };

    const formatted = formatMessage(notification);

    assert.ok(formatted.includes('my-form'), 'Should include the source');
    assert.ok(formatted.includes('Hello world'), 'Should include the message');
    assert.ok(formatted.includes('2025-01-15'), 'Should include the timestamp');
  });
});
