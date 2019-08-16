const geoCode = require("./utils/geocode")
const forecast = require("./utils/forecast")


if(process.argv[2]){
    geoCode(process.argv[2], (error, data) => {
        if(error) {
            return console.log(error)
        }
        forecast(data.longitude, data.latitude, (error, forecastData) => {
            error ? console.log(error) : console.log(`${data.location}:`, forecastData);
        })
    })
}
else {
    console.log("You need to provide a second arguemnt like: node app.js Warsaw")
}


