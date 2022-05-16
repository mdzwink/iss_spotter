const { fetchMyIp, fetchCoordsByIP, ip, fetchFlyovers, coords, nextISSTimesForMyLocations } = require('./iss');




const printNextFlyovers = issPasses => {
  for (const pass of issPasses) {
    const datetime = new Date(0);
        datetime.setUTCSeconds(pass.risetime);
        const duration = pass.duration;
        console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}


//>>Here the func is being called and passed a callback func as it's only required perameter. In iss.js the func starts exicuting and calls this callback whenever needed.
nextISSTimesForMyLocations((error, issPasses) => {
  if (error) {
    return console.log('It didn\'t work!' , null);
    
  }
  // console.log('It worked! Returned FLYOVERS:' , issPasses);

  printNextFlyovers(issPasses)
});
  
  
module.exports = nextISSTimesForMyLocations;














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