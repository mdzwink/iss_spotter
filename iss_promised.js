const request = require('request-promise-native');

const fetchMyIp = function() {
  return request(`https://api64.ipify.org?format=json`) 
};
const fetchCoordsByIP = function(ip) {
  const ip = JSON.parse(body).ip
  return request(`https://api.ipbase.com/v2/info?apikey=VMJ1aSCZxmQpe04cwFlO2De28jD7z8mYInizmGTi&ip=${ip}`)
}


module.exports = { fetchMyIp, fetchCoordsByIP };