// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js')
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for ',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   }
//   else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/983174d05dc73e6ec70becf68e28a8c4/41.1333549,-112.0595603`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to darksky.net servers.');
  } else if (body.code === 400 || body.code === 404 ) {
    console.log('Unable to fetch weather');
  } else {
    console.log(body.currently.temperature);
  }
});
