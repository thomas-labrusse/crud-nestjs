import { rm } from 'fs/promises';
import { join } from 'path';

// deleting the test.sqlite file before each e2e test
global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
  } catch (err) {}
});
