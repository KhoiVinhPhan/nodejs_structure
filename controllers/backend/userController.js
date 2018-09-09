module.exports = {
    index : index,
    create : create,
    store : store,
};
//Config database: mysql
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs_structure"
});


//Get data list table: user
function index(req, res){
    con.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        res.render("./backend/users/index.ejs", {users: results});
    });
}

// Create user
function create(req, res){
    res.render("./backend/users/create.ejs");
}

function store(req, res){
    var name = req.body.txtName;
    var email = req.body.txtEmail;
    con.query("INSERT INTO user(name, email) VALUES('"+name+"', '"+email+"')", function(error, results, fields){
        if (error) throw error;
        res.redirect("../user");
    });
}