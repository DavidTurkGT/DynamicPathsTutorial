const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Your app has started.  Yay!")
});

app.listen(3000, function(){
  console.log("Server up and running on localhost:3000");
})
