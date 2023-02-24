import assert from 'node:assert';

async function handler() {
  const { Readable } = await import('node:stream');
  assert(typeof Readable !== 'undefined', 'Readable is undefined.');
}

void handler();
