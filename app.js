const express = require('express');
const logger = require('morgan')
const app = express();
const port = 5000;
const wrestlersRouter = require("./routes/wrestlers")

app.use(logger("dev"));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/wrestlers", wrestlersRouter);

app.listen(port, function(){
    console.log(`Server listening on port ${port}!`)
})

module.exports = app;