const express = require("express");
const UsersController = require("../controller/users.controller");
const auth = require("../middleware/auth.middleware");
const users_routes = express();

const users_ctrl = new UsersController();

users_routes.get("/getAll", auth, users_ctrl.getAllUser);
module.exports = users_routes;
