const express=require('express');
const router=express.Router();
const Book=require('../models/bookModel')

// To listing all bokks
router.get('/',async(req,res)=>{
    try{
        const books = await Book.find({});
    return res.json({books})
    }
    catch(error){
        console.log(error);
        return res.json({message:"ERROR"})    
    }
});
// To listing single book
router.get('/:bookID',async(req,res)=>{
        console.log(req.params.bookID);

    try{
        const book = await Book.findById(req.params.bookID)
        return res.json({book})
    }
    catch(error){
         console.log(error);
         return res.json({message:"ERROR"})  
    }
});
//creating the book
router.post('/',async(req,res)=>{
    console.log(req.body);
   try{
     const book = await Book.create(req.body);
    return res.json({book})
   }
   catch(error){
    console.log(error);
    return res.json({message:"error"})
   }
});

//update the book
router.put('/:bookID',async(req,res)=>{
    console.log(req.params.bookID);
    try{
        const book = await Book.findByIdAndUpdate(req.params.bookID, req.body,{new:true})
    return res.json({book})
    }
    catch(error){
        console.log(error);
        return res.json({message:"error"})
    }
});

//deleting the book
router.delete('/:bookID',async(req,res)=>{
    console.log(req.params.bookID);
   try{
    const book = await Book.findByIdAndDelete(req.params.bookID)
    
    return res.json({message:' book Deleted',book})
   }
   catch(error){
    console.log(error);
    return res.json({message:"error"})
   }
});

module.exports=router;