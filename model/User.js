const mongoose=require('mongoose');



const userSchema=mongoose.Schema({

       id:{type:String ,requrired:true,unique:true},
       name:{type:String ,requrired:true,unique:true},
       surname:{type:String ,requrired:true},
       age:{type:Number ,requrired:true},
       email:{type:String ,requrired:true,unique:true},
       password:{type:String ,requrired:true},
       roller:{type:Number ,requrired:true}
       



});
const User = mongoose.model("User", userSchema);

module.exports = User;