import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import axios from 'axios';
import spdy from 'spdy';
import { cert, enableHotReload, key, PATHS } from 'config';

import * as scrape from './scrape';
import MovieRoutes from './routes';

mongoose.Promise = global.Promise;
const DB_URL = process.env.DB_URL || 'mongodb://localhost/movieService';
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

app.use('/api', MovieRoutes);

app.use(express.static(path.resolve('dist')));

const server = spdy.createServer({ key, cert }, app).listen(3000, (e) => {
  if (e) {
    console.error('spdy error', e.message);
  }

  console.log(' http2 Servicr listening on port 3000!');
});

// })
// server.listen(3000, () => {
//   console.log('Filmratr listening on port 3000!');
// });
//
// server.start({
//   port: 3000,
//
//   // here we pass the ssl options to the server.js file
//   ssl: { key, cert },
//
//   // repo
// });

// app.listen(3000, e => console.log('listentin'));
scrape.local();
export default server;
