import React, { useState } from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'
import logo from "./../Images/logo.png"
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate=useNavigate();
 
 const ResA=()=>{
   toast.success('Login sucessful',{
     theme:'dark'
   });
 }
 
 const ResB=(msg)=>{
   toast.error(msg,{
     theme:'dark'
   });
 }


  const handleChange=async()=>{


    try{
     const data=await fetch("http://localhost:5000/vybe/api/v1/login",{
      method:'post',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
     });
     const result=await data.json();

     if (!data.ok) {
      throw new Error(result.error || `Server error: ${data.status}`);
    }
    ResA();
  
    const token=result.data.token;
    localStorage.setItem('jwt',token);
    navigate("/");  

  }catch(error){
  console.error("Error:", error.message);
   ResB(error.message);
  }

  }
 

  return (

    <div className='form'>
    <div className='from-1'>

      <div className='inner-form' >
      <img src={logo}></img>
      <p className='para-text'>SignIn to see Photo and Videos <br/> from your friends</p>

     <div className='input-val'>
      <input type='email' id='email' name='email' placeholder='Email' value={email} autoComplete="off" onChange={(e)=>setemail(e.target.value)}></input>
     </div>
    
     <div className='input-val'>
      <input type='password' id='password' name='password' placeholder='Password' value={password} autoComplete="off" onChange={(e)=>setpassword(e.target.value)}></input>
     </div>
      
     <p className='para-text'>By signin your agree to our terms,  <br/> and private policy and cookies policy</p>

     <input type='submit' id='submit-btn' value="Sign in" onClick={handleChange}></input>
      </div>



    </div>


    <div className='from-2'>
      <p>Don't have an account? <span><Link to="/signup">SignUp</Link></span></p>
    </div>
    </div>
  )
}

export default SignIn