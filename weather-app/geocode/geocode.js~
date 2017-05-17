const request = require('request');

var geocodeAddress = (address, callback ) => {
  var theEncodedAddress = encodeURIComponent(address);

  request ({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${theEncodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to Google servers.");
    } else if (body.status === 'ZERO_RESULTS') {
      callback("Unable to find that address.");
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng        
      });

    }

  });

}

module.exports  =  {
  geocodeAddress
}


// https://maps.googleapis.com/maps/api/geocode/json?address=570%20E%201925%20S%20Clearfield%20UT%2084015
