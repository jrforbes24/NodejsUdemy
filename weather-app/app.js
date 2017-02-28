/*
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for;',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
*/

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/983174d05dc73e6ec70becf68e28a8c4/41.1333549,-112.0595603',
  json:true
},
(error, response, body) => {
  if(error){
    console.log("Not able to contact DarkSky");
  } else if (response.statusCode === 404) {
    console.log('Unable to fetch weather.');
  } else if (response.statusCode === 200 ) {
    console.log(body.currently.temperature);
  }
});



// https://maps.googleapis.com/maps/api/geocode/json?address=570%20E%201925%20S%20Clearfield%20UT%2084015

// https://api.darksky.net/forecast/983174d05dc73e6ec70becf68e28a8c4/37.8267,-122.4233


// 983174d05dc73e6ec70becf68e28a8c4  secret key
