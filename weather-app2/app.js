const request = require('request');

request({
  url: 'https://maps.google.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
  console.log(JSON.stringify(results[0].formatted_address, undefined, 2));
});
