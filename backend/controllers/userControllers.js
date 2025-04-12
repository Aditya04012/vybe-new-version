const express=require("express");
const data=require("./../data");
const Post=require("./../models/Post");
const bcrypt=require('bcrypt');
const User=require('./../models/userModel');
const AppError=require("./../utils/AppError")
const{promisify}=require('util');
const jwt=require('jsonwebtoken');

const getToken=id=>{
   return jwt.sign({id},process.env.SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}

exports.signup=async(req,res,next)=>{

    try{
    const {name,userName,email,password}=req.body;
    if(!name || !userName || !email || !password){
        return next(new AppError("Please provide all required fields",404));
    }  
    const hashPass=await bcrypt.hash(password, 10);
    const user=await User.create({name,email,userName,password:hashPass});
    res.status(201).json({
        status:"sucess",
        data:{
            user
        }
    });
    } catch (error) {
        next(error); 
      }
 
}

exports.login=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return next(new AppError("Please provide all required fields",404));
    }
    const user=await User.findOne({email});
    
    if (!user || !(await user.passwordCorrect(password, user.password))) {
        return next(new AppError("Incorrect email or password", 401));
    }

    const token=await getToken(user._id);
    res.status(200).json({
        status:"sucess",
        data:{
            user,
            token
        }
    });
 
}
exports.protect=async(req,res,next)=>{
  
   let token;
   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token=req.headers.authorization.split(' ')[1];
   }
   if(!token){
    return next(new AppError("You are not LogedIn !Pleases log in to get access",401));
   }

   const decode=await promisify(jwt.verify)(token,process.env.SECRET);
    
   const freshUser=await User.findById(decode.id);
    if(!freshUser){
        return next(new AppError("user is no longer exist",401));
    }

   req.user=freshUser;
   next();
   
}
exports.createPost=(req,res,next)=>{
      const {body ,url}=req.body;
      if(!url ||!body){
        return next(new AppError("please provide all the fields"),400);
      }

      const newpost=Post.create({
        body,
        photo:url,
        postedBy:req.user._id
      });
    res.status(201).json({
      status:"success",
      "message":"saved post succesfull"
    });

}