const express = require("express")
const app= express()
const mongoose=require('mongoose')
const cors=require('cors')
const contactRoutes = require('./routes/contactRoutes')
const url='mongodb://localhost:27017/userData'

const PORT=5000

app.use(cors());
app.use(express.json())

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.get('/',(req,res)=>{
    res.send("get api working!")
})

app.use("/api", contactRoutes);



app.listen(PORT,()=>{
    console.log("PORT is running 5000");
    
})