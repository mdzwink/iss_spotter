// const { response } = require('express');
const request = require('request-promise-native');
const log = console.log;

const fetchMyIp = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  log('ip from fetchCoordsByIP >>>>>>>>>>>>>>>>>>>', ip);
  return request(`http://ip-api.com/json/${ip}`);
};

const fetchFlyovers = function(body) {
  const data = JSON.parse(body);
  const coords = { latitude: `${data.lat}`, longitude: `${data.lon}` };
  return request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const printNextFlyovers = function(body) {
  const issPasses = JSON.parse(body).response;
  for (const pass of issPasses) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


module.exports = { fetchMyIp, fetchCoordsByIP, fetchFlyovers, printNextFlyovers };
