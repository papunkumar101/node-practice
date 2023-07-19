const express = require('express');
const router = express.Router();
const courses = require('../models/course');


router.get('/',async (req,res)=>{
    // res.send('here is your all courcess'); 
    try {
        const crs = await courses.find();
        res.json(crs);
    } catch (error) {
        res.json(error);
    }
});

router.get('/:courseId',async (req,res)=>{ 
    const courseId = req.params.courseId;
    try {
        const crs = await courses.findById(courseId);
        res.json(crs);
    } catch (error) {
        res.json(error);
    }
});

router.post('/create',async (req,res)=>{  
    try {
        const crs = await courses.create(req.body);
        res.json(crs);
    } catch (error) {
        res.json(error);
    }
});

router.delete('/:courseId',async (req,res)=>{
    // const courseId = req.params.courseId;
    try{
        await courses.deleteOne({"_id":req.params.courseId});
        res.status(200).json({"message":"done"});
    }catch(error){
        res.json({"custom-message":"something wrong",error});
    }
});

router.put('/:courseId',async (req,res)=>{
    const courseId = req.params.courseId;
    try{
        const crs = await courses.updateOne({"_id":courseId},req.body);
        res.json(crs);
    }catch(error){
        res.json(error);
    }
});

module.exports = router;