const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Your app has started.  Yay!");
});

app.get("/:first", function(req, res){
  res.send("Your first name is " + req.params.first + ".");
});

app.get("/:first/:last", function(req, res){
  let firstName = req.params.first,
      lastName = req.params.last;
  res.send("Your full name is " + firstName + " " + lastName + ".");
});

app.get("/:first/:last/:age", function(req, res){
  let firstName = req.params.first,
      lastName = req.params.last,
      age = req.params.age;
  res.send("Your full name is " + firstName + " " + lastName + " and you are " + age + " years old");
});

app.listen(3000, function(){
  console.log("Server up and running on localhost:3000");
})
