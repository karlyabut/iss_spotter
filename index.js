// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("66.207.199.230", (error, coords) => {
//   if(error) {
//     console.log("=>>>>>>>>", error);
//     return;
//   }
//   console.log("=>", coords);
// });

// fetchISSFlyOverTimes({ latitude: 43.63830, longitude: -79.43010}, (error, response) => {
//   if (error) {
//     console.log("===>", error);
//     return;
//   }
//   console.log("=>", response);
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // console.log(passTimes);
  for (let i = 0; i < passTimes.length; i++) {
    // console.log(passTimes[i].duration + "w");
    let date = new Date((passTimes[i].risetime) * 1000);
    console.log(`Next pass at ${date.toString()} for ${passTimes[i].duration} seconds!`);
  }
});