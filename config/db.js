const mongoose = require('mongoose')
const connectDB= async()=>{
    try{
        
        const connection = await mongoose.connect('mongodb+srv://nodeapi:eI8J8Lpvyp6nHUvj@nodeapi-cluster.v24i5mp.mongodb.net/bookstore-api')
        console.log(`MongoDB connected to ${connection.connection.host}`);
        
    }catch(error){
        console.log(error);
        process.exit(1);
        
    } 
}
module.exports=connectDB