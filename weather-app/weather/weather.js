const request = require('request');

var getWeather = (lattitude, longitude, callback) => {
  request({
    url:`https://api.darksky.net/forecast/983174d05dc73e6ec70becf68e28a8c4/${lattitude},${longitude}`,
    json:true
  },
  (error, response, body) => {
    if(error){
      callback("Not able to contact DarkSky");
    } else if (response.statusCode === 404) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200 ) {
      callback({
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      }, undefined);
    }
  });
};

module.exports  =  {
  getWeather
}
