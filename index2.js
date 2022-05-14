const log = console.log; 
const { fetchMyIp, fetchCoordsByIP } = require('./iss_promised');


fetchMyIp()
  .then(body => body[ip])
fetchCoordsByIP(ip)
  .then(body => body.)
