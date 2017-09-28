import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';

import { enableHotReload, PATHS } from 'config';
import MovieRoutes from './routes';

mongoose.Promise = global.Promise;
const dbOpts = {
  useMongoClient: true,

  // replicaSet: 'movieServiceRS',
};

const promise = mongoose.connect('mongodb://localhost/movieService', dbOpts);

promise.then(db => console.log('dbconnected')).catch((e) => {
  console.error('there was an error', e.message);
  throw e;
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

export default app;
