const express = require("express");
const router = express.Router();

router.route('/').get((req,res)=>{
    res.status(200).json({message:"Get all contacts"});

})


// post

router.route('/').post((req,resp)=>{
resp.status(200).json({message:"Create contact"})
});


// Get?

router.route('/:id').get((req,resp)=>{
    resp.status(200).json({message:`Get contact for ${req.params.id}`});
})

// put@\

router.route('/:id').put((req,resp)=>{
    resp.status(200).json({message:`update the contact for ${req.params.id}`});
})


// delete

router.route('/:id').delete((req,resp)=>{
    resp.status(200).json({message:`Delete contact for ${req.params.id}`})
});

module.exports=router