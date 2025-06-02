const mongoose = require('mongoose')
const connectDB= async()=>{
    try{
        
        const connection = await mongoose.connect('your mongoDB url')
        console.log(`MongoDB connected to ${connection.connection.host}`);
        
    }catch(error){
        console.log(error);
        process.exit(1);
        
    } 
}
module.exports=connectDB
