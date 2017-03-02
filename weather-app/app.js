
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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
    console.log(results.address);
    console.log(`Lattitude ${results.lattitude}`);
    console.log(`Longitude ${results.longitude}`);
    weather.getWeather(results.lattitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
      }
    });

  }
});


// https://maps.googleapis.com/maps/api/geocode/json?address=570%20E%201925%20S%20Clearfield%20UT%2084015
// https://api.darksky.net/forecast/983174d05dc73e6ec70becf68e28a8c4/37.8267,-122.4233
// 983174d05dc73e6ec70becf68e28a8c4  secret key
