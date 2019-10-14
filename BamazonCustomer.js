var inquirer = require("inquirer");

var mysql = require("mysql");
// var inquirer = require("inquire')

var connectionObject={
host: '127.0.0.1',
port: 3306,
user: "Jon",
password: "12345",
database: "bamazon_db",

};

var connection = mysql.createConnection(connectionObject);
connection.connect(function (err) {
   if (err) throw err;
   console.log("");
   console.log("connected as id " + connection.threadId)
   console.log("");
   connection.query("SELECT * FROM products_table", function (err, res) {
       if (err) {
           console.log("===== ===== ===== ===== =====");
           console.log("ERROR :: ", err);
           console.log("===== ===== ===== ===== =====");
       }
       else {
           console.log("");
           console.log("RESULT :: ", res);
       }
   });
});
inquirer.prompt(
    [
      {
        name: 'name',
        message: 'what is the ID of the product you would like to buy?'
      },
      {
        name: 'position',
        message: 'how many units of the product they would like to buy?'
    //   },
    //   {
    //     name: 'offense',
    //     message: 'What Is Your Offensive Value (In A Number)'
    //   },
    //   {
    //     name: 'defense',
    //     message: 'What Is Your defensive Value (In A Number)'
      }]);