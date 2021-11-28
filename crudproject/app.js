const express =require('express')
const mongoose =require('mongoose')
const url="mongodb://localhost/sec01"
const app = express()
mongoose.connect(url);
const con =mongoose.connection;
con.on('open',()=>{
    console.log('Connected...')
})
app.use(express.json())
const customerRouter=require("./routes/customers")
app.use("/customers",customerRouter);
app.listen(9000,()=>{
    console.log("Server started..")
})