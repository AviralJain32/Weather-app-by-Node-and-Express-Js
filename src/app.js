//express uses top to bottom approac
const express = require('express');
const hbs=require('hbs');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// public static path (old method)
//using hbs (new method)

const template_path = (path.join(__dirname, "../templates/views"))
const partials_path = (path.join(__dirname, "../templates/partials"))
// const publicPath = (path.join(__dirname, "../public"))
const publicPath = (path.join(__dirname, "../templates"))

app.use(express.static(publicPath));
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path)

//routing
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg:'Oops ! Page Not Found'
    })
})
app.listen(port, () => {
    console.log("listening at port");
})