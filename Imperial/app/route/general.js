const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
//   res.send('home page route');
res.render('home');
});
route.get('/gallery',(req,res)=>{
    // res.send('Gallery page route');
    res.render('gallery');
  });


module.exports = route;