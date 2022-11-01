const userSchema=require("../model/User");
const asyncHandler = require("express-async-handler");
const { deleteMany } = require("../model/User");
const Crypto = require('crypto');


const createUser =asyncHandler(async (req,res)=>{
 
 const{name,surname,age,email,password,roller}=req.body;
 const id=Crypto.randomBytes(6).toString('base64').slice(0,6);
 // if(!id||!name || !surname || !age ||!email ||!password || !roller){
  // res.status(400);
   //console.log("Please Enter all the Feilds");
  //}
  const emailexits=await userSchema.findOne({email});
  const idexits=await userSchema.findOne({id});
  const user=await userSchema.create({
    id,
    name,
    surname,
    age,
    email,
    password,
    roller
  })
  if(user){
  res.json({ data: user, status: "success" });}
  else{
    res.send("not created, ERROR ")
  }

});
const getallUser=asyncHandler(async (req,res)=>{
  const email=req.body
  const users = await userSchema.find(email);
  res.send(users);

});
const updateuser=asyncHandler(async (req,res)=>{
  const{id,name,surname,age,email,password,roller}=req.body;
  const old_user= await userSchema.findOne({email});
  console.log(old_user);
  old_user.name=name,
  old_user.new_surname=surname,
  old_user.age=age;
  old_user.email=email,
  old_user.password=password,
  old_user.roller=roller
  old_user.save();
})
const DeleteUser=asyncHandler(async (req,res)=>{
  const {email}=req.body;
  const users = await userSchema.findOneAndDelete({email});
  if(!users){
    res.send("user not found");
  }else{
    res.send(users);
  }
});
module.exports={createUser,getallUser,updateuser,DeleteUser};
