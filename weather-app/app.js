const request = require("request");


const weatherURL = 'https://api.darksky.net/forecast/6e40d1b6cf266b73b821deb017d83682/37.8267,-122.4233?lang=pl&units=si'

request({ url: weatherURL, json: true }, (error, {body}) => {
    if(error) {
        console.log("Unable to connect to weather service!");
    }
    else if(body.code){       
        console.log(body.error)
    }
    else {
        console.log(`${body.daily.data[0].summary} It is currently ${body.currently.temperature}. There is ${body.currently.precipProbability}% chance of rain.`)
    }
})

const geolocation = "https://api.mapbox.com/geocoding/v5/mapbox.places/Rogdsadasasdaow,lodzkie.json?limit=1&lang=pl&access_token=pk.eyJ1IjoiYXJla3JndyIsImEiOiJjano2eDFsYTAwNGUwM2huM2RwamtwZHNtIn0.LM0WuXJEdyGA_dhGDHnHQw"

request({ url: geolocation, json: true }, (error, {body}) => {
    if(error) {
        console.log("There was an error establishing your longitude and latitude")
    }
    else if(body.message) {
        console.log(body.message)
    }
    else if(body.features.length === 0) {
        console.log("Not Found");
    }
    else {
        console.log(body.features[0].center[0], body.features[0].center[1])
    }
})