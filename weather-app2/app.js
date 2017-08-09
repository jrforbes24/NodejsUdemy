const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for ',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var the_address = encodeURIComponent(argv.address)


request({
  url: `https://maps.google.com/maps/api/geocode/json?address=${the_address}`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`lattitude: ${body.results[0].geometry.location.lat}`)
  console.log(`longitude: ${body.results[0].geometry.location.lng}`)
});
