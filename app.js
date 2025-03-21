var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");

var app = express();

app.use(
  cors({
    origin: "*",
  })
);

// Your other middleware configurations
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  const status = err.status ?? 500;
  const msg = err.msg ?? err;
  res.status(status).json({
    result: null,
    status: false,
    msg: msg,
  });
  res.render("error");
});

app.listen(3005, "localhost", (err) => {
  if (!err) {
    console.log("Server is listening to port 3000");
    console.log("Press CTRL + C to disconnect from the server...");
  }
});
