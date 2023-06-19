const express = require('express');
const app = express();
const config = process.env;
const route = require('./app/route/general');
const hbs = require('hbs');

app.use('',route);

// template engine 
app.set('view engine', 'hbs');
app.set('views','./app/view');


app.listen(config.PORT | 5555,()=>{
    console.log('server runing...');
});
