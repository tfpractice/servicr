require('babel-core/register')({});
require('babel-polyfill');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  Object.values(cluster.workers).forEach((worker) => {
    worker.send(`Hello Worker ${worker.id}`);
  });

  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed. ` + 'Starting a new worker...');
      cluster.fork();
    }
  });
} else {
  require('./movies');
}

process.on('message', (msg) => {
  console.log(`Message from master: ${msg}`);
});
