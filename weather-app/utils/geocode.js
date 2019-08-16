const request = require('request');


const geoCode = (adress, callback) => {
    const geolocationURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?limit=1&lang=pl&access_token=pk.eyJ1IjoiYXJla3JndyIsImEiOiJjano2eDFsYTAwNGUwM2huM2RwamtwZHNtIn0.LM0WuXJEdyGA_dhGDHnHQw`

    request({ url: geolocationURL, json: true }, (error, {body}) => {
        if(error) {
            callback("There was an error establishing your longitude and latitude")
        }
        else if(body.message) {
            callback(body.message)
        }
        else if(body.features.length === 0) {
            console.log("Not Found");
        }
        else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            });
        }
    })
}

module.exports = geoCode;