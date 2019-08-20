const path = require("path");
const express = require("express");
const hbs = require("hbs")

const geoCode = require("./utils/geocode")
const forecast = require("./utils/forecast")


const app = express();

const port = process.env.PORT || 3000;

//Paths 
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//Handlebars setup
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(path.join(__dirname, "../public")))


app.get("", (req, res) => {
    res.render("index", {
        title: "Weather app",
        name: "Arek Pawlak"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About me",
        name: "Arek Pawlak"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        message: "This is a help page",
        title: "Help",
        name: "Arek Pawlak"
    })
})

app.get("/weather", (req, res) => {

    if(!req.query.address) {
        return res.send({
            error: "Adress must be provided"
        })
    }

    geoCode(req.query.address, (error, data) => {
        if(error) {
            return res.send({
                error
            })
        }
        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if(error) {
                return res.send(error)
            }
            res.send({
                address: data.location,
                forecast: forecastData
            })
        })
    })
});

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "No search term"
        })
    }

    res.send({
        products: []
    })
})

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "Error 404",
        name: "Arek",
        error: "Help article not found"
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "Error 404",
        name: "Arek",
        error: "Page not found"
    })
})

//Setup listening on port 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
});