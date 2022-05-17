// const { response } = require('express');
const log = console.log;
const { fetchMyIp, fetchCoordsByIP, fetchFlyovers, printNextFlyovers } = require('./iss_promised');


fetchMyIp()
  .then(fetchCoordsByIP)
  .then(fetchFlyovers)
  .then(printNextFlyovers)
  .catch(error => log('.catch caught----------------->', error));
  


  