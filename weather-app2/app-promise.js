const yargs = require('yargs');
const axios = require('axios');

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

var the_address = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.google.com/maps/api/geocode/json?address=${the_address}`

axios.get(geocodeURL).then((respnse) => {

});
