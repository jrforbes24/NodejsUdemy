const request = require('request');

request ({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=570%20E%201925%20S%20Clearfield%20UT%2084015',
  json: true
}, (error, reponse, body) => {
  console.log(body);
});
