const path = require("path");
const express = require("express");
const hbs = require("hbs")


const app = express();

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
    res.send({
        place: "Rogów",
        lon: 21,
        lat: 53,
        temperature: 17
    })
});

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
app.listen(3000, () => {
    console.log('Server is up on port 3000')
});