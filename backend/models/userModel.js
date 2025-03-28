const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require("bcrypt");
const UserSchema=new mongoose.Schema({
 name:{
   type:String,
   require:[true,'Please provide name']
 },
 userName:{
   type:String,
   require:[true,'Please provide userName']
 },
 email:{
    type:String,
    require:[true,'Please provide email'],
    unique:true,
    validate:[validator.isEmail,'please provide a valid email']
 },
 password:{
  type:String,
  require:[true,'Please provide password']
 }
});

UserSchema.methods.passwordCorrect=async(password,hash)=>{
 return  await bcrypt.compare(password,hash)
}

const User=mongoose.model('User',UserSchema);
module.exports=User;