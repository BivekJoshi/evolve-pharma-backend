const express = require("express");
const AuthController = require("../controller/auth.controller");
const uploader = require("../middleware/uploader.middleware");
const app_routes = express();
const auth = require("../middleware/auth.middleware");

const auth_ctrl = new AuthController();

app_routes.post("/login", auth_ctrl.loginUser);
app_routes.post("/register", uploader.single("image"), auth_ctrl.registerUser);
app_routes.get("/loggedInUser", auth, auth_ctrl.getLoggedInUser);
app_routes.get("/getAll", auth_ctrl.getLoggedInUser);

module.exports = app_routes;
