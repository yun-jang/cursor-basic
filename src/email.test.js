import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, extractEmails, getValidEmails, getUniqueValidEmails } from './email.js';

test('isValidEmail returns true for valid emails', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('a.b@c.co'), true);
});

test('isValidEmail returns false for invalid emails', () => {
    assert.equal(isValidEmail('not-an-email'), false);
    assert.equal(isValidEmail('missing@domain'), false);
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail(null), false);
});

test('extractEmails returns all emails from users', () => {
    const users = [
        { email: 'a@example.com' },
        { email: 'invalid' },
        { email: null },
    ];
    assert.deepEqual(extractEmails(users), ['a@example.com', 'invalid', null]);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails(undefined), []);
});

test('getValidEmails returns only valid emails', () => {
    const users = [
        { email: 'valid@example.com' },
        { email: 'bad-email' },
        { email: 'also@valid.org' },
        { email: null },
    ];
    assert.deepEqual(getValidEmails(users), ['valid@example.com', 'also@valid.org']);
});

test('getUniqueValidEmails returns unique valid emails only', () => {
    const users = [
        { email: 'a@example.com' },
        { email: 'a@example.com' },
        { email: 'invalid' },
        { email: 'b@example.com' },
    ];
    assert.deepEqual(getUniqueValidEmails(users), ['a@example.com', 'b@example.com']);
});
