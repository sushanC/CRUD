const express=require('express');
const app=express();

const connectDB=require('./config/db')
connectDB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:'API server is running'})
})

app.use('/api/books',require('./routes/bookRoutes'))

app.listen(5000,()=>{
    console.log('server is running on port 5000');   
});