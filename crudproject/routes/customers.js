const express=require('express')
const router =express.Router();
const Customer=require("../models/customer");
router.get("/",async(req,res)=>{
    try{
        const customer=await Customer.find();
        res.json(customers);

    }catch(err){
        res.send("Error"+err);
    }
})
router.post("/",async(req,res)=>{
    const customer =new Customer({
        username:req.body.username,
        Email:req.body.Email,
        password:req.body.password
    })
    try{
        const st1 =await customer.save()
        res.json(st1);
    }
    catch(err){
        res.send("Error"+err);1
    }
})
router.patch("/",async(req,res)=>{
    try{
        const st =await Customer.findById(req.paramsms.id);
        st.Email =req.body.Email
        const s1=await st.save();
        res.json(s1);
    }catch(err){
        res.send("Error"+err);
    }})
    router.delete("/:id",async(req,res)=>{
        try{
            const st=await Customer.findById(req.params.id)
            const a1=await st.delete();
            res.json(a1);
        }catch(err){
            res.send("Error"+err);
        }
    })
    module.exports=router;