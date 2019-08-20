const request = require("request");


const forecast = (longitude, latitude, callback) => {
    const weatherURL = `https://api.darksky.net/forecast/6e40d1b6cf266b73b821deb017d83682/${latitude},${longitude}?units=si`

    request({ url: weatherURL, json: true }, (error, {body}) => {
        if(error) {
            callback("Unable to connect to weather service!");
        }
        else if(body.code){       
            callback(body.error)
        }
        else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${Math.round(body.currently.temperature * 10) / 10}. There is ${body.currently.precipProbability}% chance of rain.`)
        }
    })
} 


module.exports = forecast