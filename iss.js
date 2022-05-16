/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');
// let ip = '';
// let coords = 0;




//>>Here the func is defined and requires only a callback func. In index.js this func is called and provided with a callback func.
const nextISSTimesForMyLocations = (callback) => {
  //check for errors first-->nope! cant check because no request has been made and nothing has happened yet
  //call first func at bottom of this func

  const fetchMyIp = callback => {
    request('https://api.ipify.org?format=json', (error, response, body) => {
      //first catch and deal with errors
      if (error) return callback(error, null);
      //then make sure the server responses status code is 200
      if (response.statusCode !== 200) {
        return callback(Error(`Status Code >${response.statusCode}< when fetching IP. Response: ${body}`), null);
      }
      //parses JSON response into js
      const ip = JSON.parse(body).ip;
      
      //call next func at bottom of this func
      //---find approximate coordinates---
      const fetchCoordsByIP = (ip, callback) => {
        request(`https://api.ipbase.com/v2/info?apikey=VMJ1aSCZxmQpe04cwFlO2De28jD7z8mYInizmGTi&ip=${ip}`, (error, response, body) => {
          //first catch and deal with errors
          if (error) return callback(error, null);
          //then make sure the server responses status code is 200
          if (response.statusCode !== 200) {
            return callback(Error(`Status Code >${response.statusCode}< when fetching IP. Response: ${body}`), null);
          }
          //parse returned info
          const data = JSON.parse(body).data;
          //access specific object properties and store in new object
          const coords = { latitude: `${data.location.latitude}`, longitude: `${data.location.longitude}` };
          //call next func at bottom of this func
          // API request will require lat and long (can take altitude if wanted)
          //---find ISS flyovers---
          const fetchFlyovers = (coords, callback) => {
            // request(`https://iss-pass.herokuapp.com/json/?lat=43.797569274902344&lon=-79.22724914550781`, (error, response, body) => {
              request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
                //first catch and deal with errors
                if (error) return callback(error, null);
                //then make sure the server responses status code is 200
                if (response.statusCode !== 200) {
                  return callback(Error(`Status Code >${response.statusCode}< when fetching IP. Response: ${body}`), null);
                }
                //parse returned info
                const issPasses = JSON.parse(body).response;
                callback(null, issPasses)
              });
          };
          fetchFlyovers(coords, callback);
        });
      };
      fetchCoordsByIP(ip, callback);
    });
  };
  fetchMyIp(callback);
}

module.exports = { nextISSTimesForMyLocations };




