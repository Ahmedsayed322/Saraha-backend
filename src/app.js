import express from 'express';
import bootstrap from './app.bootstrap.js';

const app = express();

bootstrap(app);

export default app;
