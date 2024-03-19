const express = require("express");
const routerAPI = express.Router();

const { routesUser } = require("./routesUser");

//send back sepcific user
routerAPI.get("/user/:id", routesUser.getSingleUser);
routerAPI.get("/user", routesUser.getAllUsers);
routerAPI.post("/user", routesUser.createUser);
routerAPI.put("/user/:id", routesUser.updateUser);
routerAPI.delete("/user/:id", routesUser.deleteUser);

routerAPI.get("/todo", (req, res, next) => {
  res.send({ todo: [] });
});
routerAPI.all("*", (req, res, next) => {
  res.send({ error: "invalid api" });
});

module.exports.routerAPI = routerAPI;
