require('babel-core/register')({});
require('babel-polyfill');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  // console.log('os', os);
  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  require('./movies');
}

// require('./movies');

// const movies = require('./movies');
