import express from 'express';
import { userRouter } from './modules/user/index.js';
import { GlobalErrorHandler, KnownErrorHandler } from './middlewares/index.js';
import { env } from './config/index.js';
import connectDb from './DB/mongoose.connection.js';
import { ApiError, asymmetric } from './utils/index.js';
import { resolve } from 'path';
import cors from 'cors';
import { redis_connection } from './DB/index.js';
import { messageRouter } from './modules/message/index.js';
import helmet from 'helmet';

import { GlobalRateLimiter } from './utils/limiter/rate.limiter.js';
const bootstrap = async (app) => {
  const { PORT } = env;
  try {
    await connectDb();
    await redis_connection();
    await asymmetric.runForFirstTime();
  } catch (err) {
    console.error('Initialization error:', err.message);
    // Don't crash on initialization errors in serverless - let requests fail gracefully
  }
  const corsOption = {
    origin: (origin, cb) => {
      if (env.WHITE_LIST.includes(origin)) {
        cb(null, true);
      } else {
        cb(new ApiError('not allowed by cors', 403), false);
      }
    },
  };

  app.use(
    cors({
      ...corsOption,
    }),
    // helmet({
    //   contentSecurityPolicy: false,
    //   frameguard: false,
    //   crossOriginResourcePolicy: false,
    // }),
    GlobalRateLimiter,
    express.json(),
  );

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', time: new Date().toISOString() });
  });

  app.use('/users', userRouter);
  app.use('/messages', messageRouter);
  app.use(KnownErrorHandler, GlobalErrorHandler);
  app.use('/uploads', express.static(resolve('uploads')));
  app.use('{/dummy}', (req, res, next) => {
    res.status(404).json({ message: `this ${req.originalUrl} is not exist` });
  });

  // Only listen when not in Vercel serverless environment
  if (!process.env.VERCEL) {
    app.listen(PORT, () =>
      console.log(`Example app listening on port ${PORT}!`),
    );
  }
};
export default bootstrap;
