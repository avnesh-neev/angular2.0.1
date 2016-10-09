var express = require("express");
var app = express()

app.use(express.static('target'));

app.listen(3000);