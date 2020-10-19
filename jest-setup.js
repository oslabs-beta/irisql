const server = require('./server/server.js');

module.exports = async () => {
  global.testServer = server;
};
