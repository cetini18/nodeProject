const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");

    //__dirname gives us exact path of current folder
});
app.post("/",function(req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
    // we use the attribute "name"  for getting the values of html input
    // I reckon that the values entered into input areas are stored inside document.body , therefore when we request them we should use req.body.variablename
    let result = number1 + number2;
    res.send("The result of addition is : " + result);

})
app.listen(3000,function(){
    console.log("The server started on port 3000");
});