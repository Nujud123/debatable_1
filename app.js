//load express
const express = require('express');

//creat the app
const app = express();

//listen on the port
app.listen(3001, ()=>{
console.log("the app is listening on port 3001");
})

app.get('/',(req,res)=>{
    res.send("Hello World");
});