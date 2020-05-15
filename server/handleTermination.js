const MySQLSessionPool = require('../server/src/mysql.js').sessionPool;

module.exports = function () {
  // ['SIGINT', 'SIGTERM', 'SIGQUIT', 'uncaughtException', 'unhandledRejection']
  const processEventArray = ['SIGINT', 'SIGTERM', 'SIGQUIT']
  processEventArray.forEach(event => {
    process.on(event, () => {
      console.log("> Close event Detected Terminating")
      process.exit(0)
      //MySQLSessionPool.end(() => process.exit(0))
    })
  })
}