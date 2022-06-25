//load express and body-parser.
const express = require('express');
const bodyParser = require('body-parser');

//creat the app.
const app = express();

app.use(bodyParser.json());
app.use('/debates', require('./routers/debatesRoutes'));
app.use('/debates/debate/',require('./routers/endorsementsRoutes'));

//listen on the port
app.listen(3001, ()=>{
console.log("the app is listening on port 3001");
})

