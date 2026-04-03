import express from 'express';
import bootstrap from './app.bootstrap.js';

const app = express();

// Initialize bootstrap and handle any startup errors
try {
  await bootstrap(app);
} catch (err) {
  console.error('Bootstrap failed:', err);
  process.exit(1);
}

export default app;
