const express = require("express");
const app = express();

const erv = require("express-react-views");

// SET THE VIEW ENGINE
// Set the folder containing the View/Template `jsx` files
app.set("views", __dirname + "/views");
// Set `express-react-views` as the view engine used for rendering HTML
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

// MIDDLEWARE
app.use(express.static("public"));

// Send a text string in the response
app.get("/", (req, res, next) => {
  res.render("Layout");
});

app.get("/home", (req, res, next) => {
  // res.sendFile(__dirname + "/home.html");

  res.render("Home");
});

app.get("/about", (req, res, next) => {
  res.render("About");
});

app.get("/student", (req, res, next) => {
  const data = {
    fName: "Uros",
    lName: "Cirkovic",
    profileImg: "https://i.imgur.com/h0uGpjB.jpg",
  };

  res.render("StudentsPanel", data); //  Student( data )
});

app.get("/dashboard", (req, res, next) => {
  app.render("Dashboard");
});

app.listen(3000);
