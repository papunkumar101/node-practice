const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('here is your all courcess');
});

module.exports = router;