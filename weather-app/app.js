const request = require('request');
const yargs = require('yargs');

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

// console.log(argv.a);

var theEncodedAddress = encodeURIComponent(argv.a);

// console.log(theEncodedAddress);

request ({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${theEncodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});





// https://maps.googleapis.com/maps/api/geocode/json?address=570%20E%201925%20S%20Clearfield%20UT%2084015
