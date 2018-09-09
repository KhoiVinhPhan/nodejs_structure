var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

//Config database: mysql
var mysql = require("mysql");
var con = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "",
  	database: "nodejs_structure"
});
// Check connected mysql
con.connect(function(err) {
  	if (err) throw err;
  	console.log("Databases Connected!!!");
});

//Config body-parser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Routes
app.use(require("./routes"));





