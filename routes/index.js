const express = require("express");
const app_routes = express();

// Importing route modules
const auth_routes=require("./auth.routes");
const users_routes = require("./users.routes");


// Use the routes
app_routes.use("/auth", auth_routes);
app_routes.use("/users", users_routes);


module.exports = app_routes;
