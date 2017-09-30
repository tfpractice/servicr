import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import axios from 'axios';

import { enableHotReload, PATHS } from 'config';

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

app.listen(3000, () => {
  console.log('Filmratr listening on port 3000!');
});

// scrape.search();

export default app;
