var express = require("express");

var app = express();


app.use(express.static(__dirname + "/public"));

app.use("/libs", express.static(__dirname + "/bower_components"));

var port = 3000;
app.listen(3000, function(){
    console.log("Application started on port %d", port);
})