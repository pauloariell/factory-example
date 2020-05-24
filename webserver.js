function createWebserver(){
  function start(){
    console.log('> [webserver] Starting...')
    console.log('> [webserver] Waiting for port to be available...')
    console.log('> [webserver] Starting done!')
  }

  function stop(){
    console.log('> [webserver] Stoping...')
    console.log('> [webserver] Gracefully waiting for all clients...')
    console.log('> [webserver] Closing all ports...')
    console.log('> [webserver] Stoping done!')
  }

  return {
    start,
    stop
  }
}

module.exports = createWebserver;