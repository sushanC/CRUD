const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    Author:{
        type:String,
    },
    price:{
        type:Number,
    },

});

module.exports=mongoose.model('Book',bookSchema);