const createDatabaseConnection = require('./database.js');
const createWebserver = require('./webserver.js');

function createCore(configurations = {}){
  const database = configurations.database || createDatabaseConnection();
  const webserver = configurations.webserver || createWebserver();

  function start(){
    console.log('> [core] Starting...')
    database.start();
    webserver.start();
    console.log('> [core] Starting done! System running!')
  }

  function stop(){
    console.log('> [core] Stoping...!')
    webserver.stop();
    database.stop();
    console.log('> [core] Stoping done!')
  }

  return {
    start,
    stop
  }
}

module.exports = createCore;