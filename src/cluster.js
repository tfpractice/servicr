// require('babel-core/register')({});
// require('babel-polyfill');
// const cluster = require('cluster');
// const os = require('os');
//
// if (cluster.isMaster) {
//   const cpus = os.cpus().length;
//
//   console.log(`Forking for ${cpus} CPUs`);
//   for (let i = 0; i < cpus; i++) {
//     cluster.fork();
//   }
//
//   Object.values(cluster.workers).forEach((worker) => {
//     worker.send(`Hello Worker ${worker.id}`);
//   });
//
//   cluster.on('exit', (worker, code, signal) => {
//     if (code !== 0 && !worker.exitedAfterDisconnect) {
//       console.log(`Worker ${worker.id} crashed. ` + 'Starting a new worker...');
//       cluster.fork();
//     }
//   });
// } else {
//   require('./movies');
// }
//
// process.on('message', (msg) => {
//   console.log(`Message from master: ${msg}`);
// });

// docker run -d -p 27017:27017 -v .:/data/db mongo

// ec82c13073bd  d7d0cf57747d        mongo               "docker-entrypoint..."   9 seconds ago       Up 8 seconds        0.0.0.0:27017->27017/tcp   angry_shirley
//  mongo               "do/cker-entrypoint..."   11 minutes ago      Up 11 minutes       27017/tcp                  db
