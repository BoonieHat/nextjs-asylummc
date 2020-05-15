const MYSQL = require('mysql');

const loginAndOptions = (limit) => {
  return {
    connectionLimit: limit,
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PW,
    database: process.env.DB,
    debug : false,
    multipleStatements: true
  }
};

const sessionPool = MYSQL.createPool ({
  connectionLimit: process.env.SESSION_POOL_CONNECTION_LIMIT,
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PW,
  database: process.env.DB,
  clearExpired: true,
  checkExpirationInterval: process.env.SESSION_DELETE_FROM_DB_INTERVAL,
  expiration: process.env.SESSION_EXPIRE,
  schema: { tableName: 'sessions', columnNames: { session_id: 'session_id', expires: 'expires', data: 'data' } }
});

//sessionPool.on('acquire', function (connection) { console.log(`SESSION Connection ${connection.threadId} ACQUIRED`) });
sessionPool.on('release', function (connection) { console.log(`SESSION Connection ${connection.threadId} ACQUIRED AND RELEASED`) });
sessionPool.on('enqueue', function () { console.log('Waiting for available connection slot') });
sessionPool.on('error', function(err) { console.log("sessionPool" + err); });

const pool = MYSQL.createPool( loginAndOptions(process.env.MYSQL_CONNECTION_LIMIT) );

//pool.on('acquire', function (connection) { console.log(`Connection ${connection.threadId} ACQUIRED`) });
pool.on('release', function (connection) { console.log(`Connection ${connection.threadId} ACQUIRED AND RELEASED`) });
pool.on('enqueue', function () { console.log('Waiting for available connection slot') });
pool.on('error', function(err) { console.log("sessionPool" + err); });

//Export for use
module.exports = {
  sessionPool: sessionPool,
  authCheckPool: pool,
  profilePool: pool,
  signatureCreatePool: pool,
  leaderboardUpdatePool: pool,
  postHandlePool: pool,
  whitelistPool: pool
};