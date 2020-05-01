var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const cors = require("cors");
var logger = require("morgan");
const Sequelize = require("sequelize");
const menuRouter = require("./routes/users");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const menyRouter = require("./routes/Menu_rout");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/menu", menuRouter);

module.exports = app;
