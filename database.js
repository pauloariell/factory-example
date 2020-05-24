function createDatabaseConnection(){
  function start(){
    console.log('> [database] Starting...')
    console.log('> [database] Connection to Postgress...')
    console.log('> [database] Running migration...')
    console.log('> [database] Starting done!')

    throw new Error('Connection failed') //force error
  }

  function stop(){
    console.log('> [database] Stoping...!')
    console.log('> [database] Closing Postgress connection...')
    console.log('> [database] Stoping done!')
  }

  return {
    start,
    stop
  }
}

module.exports = createDatabaseConnection;