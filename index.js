require('dotenv').config();
const {
  environmentUtils: { validateRequiredEnvs },
} = require('./utils');

const requiredEnvs = ['PORT', 'MONGO_URI'];
validateRequiredEnvs(requiredEnvs);

const { mongoDBHelpers } = require('./helpers');

(async () => {
  await mongoDBHelpers.connect();
  //+process.argv[2] && require('./databases/mongo/fake')();

  require('./server');
})();

process.on('SIGINT', () => {
  mongoDBHelpers
    .disconnect()
    .then((connectionState) => {
      console.log('database disconnected, connection state:', connectionState);
      console.log('Closing process ');
      process.exit(0);
    })
    .catch((err) => console.log(err));
});
