const path = require("path");
const express = require("express");
const AppError = require("./utils/appError");

const app = express();
const viewRouter = require("./routes/viewsRoutes");
const uploadRouter = require("./routes/uploadRoutes");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 1) Global Middleware
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", viewRouter);
app.use("/", uploadRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`));
});

module.exports = app;
