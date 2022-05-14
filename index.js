const { fetchMyIp, fetchCoordsByIP, ip, fetchFlyovers, coords, nextISSTimesForMyLocations } = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!' , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(ip, (error, coords) => {
//   if (error) {
//     console.log('It didn\'t work!' , error);
//     return;
//   }
//   console.log('It worked! Returned COORDS:' , coords);
// });

// fetchFlyovers(coords, (error, issPasses) => {
//   if (error) {
//     console.log('It didn\'t work!' , error);
//     return;
//   }
//   console.log('It worked! Returned FLYOVERS:' , issPasses );
// });

//>>Here the func is being called and passed a callback func as it's only required perameter. In iss.js the func starts exicuting and calls this callback whenever needed.
nextISSTimesForMyLocations((error, issPassesAsString) => {
  if (error) {
    console.log('It didn\'t work!' , error);
    return;
  }
  console.log('It worked! Returned FLYOVERS:' , issPassesAsString );
});
  
  