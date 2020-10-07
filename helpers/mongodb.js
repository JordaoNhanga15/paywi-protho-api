const mogoose = require('mongoose');
const { mongoURI } = require('../config');
const checkConnection = () => {
  return mogoose.connection.readyState;
};

const connect = async () => {
  try {
    if (!checkConnection()) {
      console.log('Conecting...');
      await mogoose.connect(mongoURI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    console.log('Conected');
  } catch (error) {
    console.log(error);
  }
};

const disconnect = async () => {
  await mogoose.connection.close();
  return checkConnection();
};

module.exports = { connect, checkConnection, disconnect };
