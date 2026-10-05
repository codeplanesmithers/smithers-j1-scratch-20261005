import { test } from 'node:test';
import assert from 'node:assert';
import { greet } from '../src/greet.mjs';

test('greet returns formatted greeting', () => {
  assert.strictEqual(greet('World'), 'Hello, World!');
  assert.strictEqual(greet('Alice'), 'Hello, Alice!');
  assert.strictEqual(greet(''), 'Hello, !');
});
