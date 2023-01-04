// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("For Admin select 1 \nFor User select 0  : \t", function (string) {
  if(string=='0'){
    
    // user : 
    rl.question("For Sign Up select 1 \nFor Sign In select 0  : \t", function (string) {
      if(string == '0'){
        Signin();      }
      else if (string == '1'){
        Signup();
      }
    });
  }
  else if ( string == '1'){
    // Admin : 

  }
});




// subsidiary functions start from here : 

var Signin = function(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // create empty user input
  let username = "",password="";
  // question user to enter name
  rl.question("Enter Username :", function (string) {
    username = string;
    
    rl.question("Enter Password  :", function (string) {
      password = string;
      // call Signinquary 
      //Signinquary(username,password);
      console.log(username , ' and ', ' password', password ,' are : false !! ');
    });
    
  });
};

var Signinquary = function (username,password){
  var mysql = require('mysql');
  connection1 = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'password', // or the original password : 'apaswword'
              
          });

          // connect to mysql
          connection1.connect(function(err) {
              // in case of error
              if(err){
                  console.log(err.code);
                  console.log(err.fatal);
              }
          });
          
  // write query to check given username and password 
  var $query = 'show databases ;';
    
          connection1.query($query, function(err, rows, fields) {
              if(err){
                  console.log("An error ocurred performing the query.");
                  console.log(err);
                  return;
              }
              
              console.log("Query succesfully executed", rows[0]);
              

          });
};

var Signup = function(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // create empty user input
  let username = "",password="";
  // question user to enter name
  rl.question("Enter Username :", function (string) {
    username = string;
    
    rl.question("Enter Password  :", function (string) {
      password = string;
      // call Signinquary 
      console.log(username , ' and ', ' password', password ,' are : false !! ');
    });
    
  });
};

var Signupquary = function (username,password){
  var mysql = require('mysql');
  connection1 = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'password', // or the original password : 'apaswword'
              
          });

          // connect to mysql
          connection1.connect(function(err) {
              // in case of error
              if(err){
                  console.log(err.code);
                  console.log(err.fatal);
              }
          });
          
  // write query to sign up given username and password 
  var $query = 'show databases ;';
    
          connection1.query($query, function(err, rows, fields) {
              if(err){
                  console.log("An error ocurred performing the query.");
                  console.log(err);
                  return;
              }
              
              console.log("Query succesfully executed", rows[0]);
              

          });
};

var a = function(){
  var mysql = require('mysql');
  connection1 = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'password', // or the original password : 'apaswword'
              
          });

          // connect to mysql
          connection1.connect(function(err) {
              // in case of error
              if(err){
                  console.log(err.code);
                  console.log(err.fatal);
              }
          });
          

  var $query = 'show databases ;'
    
          connection1.query($query, function(err, rows, fields) {
              if(err){
                  console.log("An error ocurred performing the query.");
                  console.log(err);
                  return;
              }
              
              console.log("Query succesfully executed", rows[0]);
              

          });
};
