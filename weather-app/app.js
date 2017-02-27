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

geocode.geocodeAddress(argv.address);



// https://maps.googleapis.com/maps/api/geocode/json?address=570%20E%201925%20S%20Clearfield%20UT%2084015
