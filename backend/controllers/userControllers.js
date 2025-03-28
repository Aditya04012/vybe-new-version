const express=require("express");
const data=require("./../data");
const bcrypt=require('bcrypt');
const User=require('./../models/userModel');
const AppError=require("./../utils/AppError")

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
    res.status(200).json({
        status:"sucess",
        data:{
            user
        }
    });
 
}