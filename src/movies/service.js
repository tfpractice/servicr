import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

import mongoose from 'mongoose';

import path from 'path';
import { enableHotReload, PATHS } from 'config';
import MovieRoutes from './routes';

// import { requestHandler } from './request_handler';

const promise = mongoose.connect('mongodb://localhost:27017/movieService', {
  useMongoClient: true,

  replicaSe: 'movieServiceRS',

  // replset: {},
});

// MongoDB Connection
promise.then(db => console.log('dbconnected', db)).catch((e) => {
  console.error('there was an error', e.message);
  throw e;
});

// initialize express
const app = enableHotReload(express());

// const app /= express();
app.use(morgan('dev'));
app.use(helmet());

// BodyParser Middleware

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(cookieParser());

// Set Static Folder

// Express Session
// app.use(
//   session({
//     secret: process.env.FILMRATR_AUTH_SECRET,
//     saveUninitialized: true,
//     resave: true,
//   })
// );

// Global Vars
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });

//  backend api routes
app.use('/api', MovieRoutes);

// applyRoutes(app, passport);
// applyRoutes(app, passport);

// \/\*\/
// establish server render
// app.use(requestHandler);
// app.use(requestHandler);
app.use(express.static(path.resolve('dist')));

app.listen(3000, () => {
  console.log('Filmratr listening on port 3000!');
});
export default app;

// const express = require('express');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const api = require('../api/movies');
//
// const start = options =>
//   new Promise((resolve, reject) => {
//     if (!options.repo) {
//       reject(
//         new Error('The server must be started with a connected repository')
//       );
//     }
//     if (!options.port) {
//       reject(new Error('The server must be started with an available port'));
//     }
//
//     const app = express();
//
//     app.use(morgan('dev'));
//     app.use(helmet());
//     app.use((err, req, res, next) => {
//       reject(new Error(`Something went wrong!, err:${err}`));
//       res.status(500).send('Something went wrong!');
//     });
//
//     api(app, options);
//
//     const server = app.listen(options.port, () => resolve(server));
//   });
//
// module.exports = Object.assign({}, { start });
