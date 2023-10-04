// index.js, Noah Mauro, 301191967, 10-04-23
//requiring various modules
const express = require("express");
const path = require("path");
const app = express();
const expressLayouts = require('express-ejs-layouts');

//setting view engine and directories
app.set('view engine', 'ejs');
app.set('views', "Views");
app.locals.partialsDir = path.join(__dirname, 'Views','partials');
app.use(express.static(path.join(__dirname, 'Public')));

//Handling Get requests
app.get("/", (req, res) => {
    res.render("index.ejs"); 
    console.log("I recieved a get Request");
});

app.get("/About", (req, res) => {
    res.render("About.ejs"); 
    console.log("I recieved a get Request");
});

app.get("/Contact", (req, res) => {
    res.render("Contact.ejs"); 
    console.log("I recieved a get Request");
});

app.get("/Projects", (req, res) => {
    res.render("Projects.ejs"); 
    console.log("I recieved a get Request");
});

app.get("/Services", (req, res) => {
    res.render("Services.ejs"); 
    console.log("I recieved a get Request");
});

//start server on port 3000
app.listen(3000, () => {console.log("Server is running on port 3000")});