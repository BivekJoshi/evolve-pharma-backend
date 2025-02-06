var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

require("./config/mongoose.config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
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

app.listen(3000, "localhost", (err) => {
  if (!err) {
    console.log("Server is listening to port 3000");
    console.log("Press CTRL + C to disconnet to the server...");
  }
});
