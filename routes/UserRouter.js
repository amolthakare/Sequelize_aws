const UserRouter = require("express").Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../models/userModel");

UserRouter.get("/",async(req,res)=>{
    let data = await Users.findAll();
    res.send(data);
})

UserRouter.post("/signup",async(req,res)=>{
    let {email,password} = req.body;
    try{
        bcrypt.hash(password, 5,async (err,hash)=>{
            if(err){
                console.log(err);
            }
            else{
                await Users.create({email,password:hash});
                res.send("User created");
            }
        });
    }catch(err){
        console.log(err);
    }
})

UserRouter.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    console.log(res.body);
    let data = await Users.findOne({email});
    bcrypt.compare(password, data.password).then(function(result){
        if(result){
            var token = jwt.sign({email:email}, "amol");
            res.send("Login Success");
        }
        else{
            res.send("login failed");
        };
    });
});
module.exports={UserRouter};