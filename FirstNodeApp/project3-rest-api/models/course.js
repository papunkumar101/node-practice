const mongoose = require('mongoose');

const Course = mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    },
    content:{
        type:String,
        require:true
    },
    videos:{
        type:String,
        require:true
    },
    active:Boolean 
});

module.exports = mongoose.model('courses',Course);