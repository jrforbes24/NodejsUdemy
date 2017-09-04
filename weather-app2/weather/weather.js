const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/983174d05dc73e6ec70becf68e28a8c4/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to darksky.net servers.');
    } else if (body.code === 400 || body.code === 404 ) {
      callback('Unable to fetch weather');
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        feels_like: body.currently.apparentTemperature
      });
    }
  });
}

module.exports.getWeather = getWeather;
