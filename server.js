"use strict";
require("dotenv").config();
const express = require("express");
const myDB = require("./connection");
const fccTesting = require("./freeCodeCamp/fcctesting.js");

const routes = require("./routes.js");
const auth = require("./auth.js");

const passport = require("passport");
const session = require("express-session");

const { ObjectID } = require("mongodb");


const bcrypt = require("bcrypt");

const app = express();

fccTesting(app); //For FCC testing purposes
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "pug");
app.set("views", "./views/pug");

myDB(async (client) => {
  const myDataBase = await client.db("database").collection("users");

  routes(app, myDataBase);

  auth(app, myDataBase);

  // Be sure to add this...
}).catch((e) => {
  app.route("/").get((req, res) => {
    res.render("index", { title: e, message: "Unable to connect to database" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
