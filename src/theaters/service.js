import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import axios from 'axios';
import spdy from 'spdy';

import { seedTheaters } from './models/theater';
import { cert, enableHotReload, key, PATHS } from 'config';

// import MovieRoutes from './routes';

mongoose.Promise = global.Promise;
const DB_URL = process.env.DB_URL || 'mongodb://localhost/theaters';
const dbOpts = { useMongoClient: true };

const promise = mongoose.connect(DB_URL, dbOpts);

promise.then(db => console.log('dbconnected')).catch((e) => {
  console.error('there was an error', e);
});

const app = enableHotReload(express());

app.use(morgan('dev'));
app.use(helmet());

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(cookieParser());

// app.use('/api', MovieRoutes);

app.use(express.static(path.resolve('dist')));
const sopts = { spdy: { plain: true }};

const server = spdy
  .createServer({ key, cert, spdy: { plain: true }}, app)
  .listen(3001, (e) => {
    if (e) {
      console.error('server error', e.message);
    }
  });

seedTheaters().then(console.log);
export default server;
