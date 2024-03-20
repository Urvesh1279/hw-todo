const express = require("express");
const routerUI = express.Router();

routerUI.get("/", (req, res, next) => {
  res.render("index");
});

routerUI.get("/login", (req, res, next) => {
  res.render("login");
});

routerUI.get("/signup", (req, res, next) => {
  res.render("signup");
});

routerUI.all("*", (req, res, next) => {
  res.render("404");
});

modual.export.routerUI = routerUI;
