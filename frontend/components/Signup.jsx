import React from 'react'
import "./Signup.css"
import { Link ,useNavigate} from 'react-router-dom'
import { useEffect ,useState,} from 'react'
import {  toast } from 'react-toastify';
import logo from "../Images/logo.png";
const Signup = () => {
  
 const [response,setResponse]=useState(null);
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [userName,setusername]=useState("");
const [password,setpassword]=useState("");

  const navigate=useNavigate();      

const ResA=()=>{
  toast.success('Registration sucessful!;',{
    theme:'dark'
  });
}

const ResB=(msg)=>{
  toast.error(msg,{
    theme:'dark'
  });
}

const handleSubmit = async () => {
  try {
    const response = await fetch("http://localhost:5000/vybe/api/v1/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, userName }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || `Server error: ${response.status}`);
    }

    console.log("Signup successful:", result);
      ResA();
    setResponse(result);
    navigate("/signin");  


  } catch (error) 
  {
    console.error("Error:", error.message);
    ResB(error.message);
  }
};





  return (
    <div className='form'>

    <div className='from-1'>
   

      <div className='inner-form'>
      <img src={logo}></img>
      <p className='para-text'>SignUp to see Photo and Videos <br/> from your friends</p>

     <div className='input-val'>
      <input type='email' id='email' name='email' placeholder='Email' autoComplete="off" onChange={(e)=>setemail(e.target.value)} ></input>
     </div>
     <div className='input-val'>
      <input type='text' id='name' name='name' placeholder='Full Name' autoComplete="off"   onChange={(e)=>setname(e.target.value)}></input>
     </div>
      
     <div className='input-val'>
      <input type='text' id='username' name='username' placeholder='User Name' autoComplete="off"  onChange={(e)=>setusername(e.target.value)}></input>
     </div>

     <div className='input-val'>
      <input type='password' id='password' name='password' placeholder='Password' autoComplete="off" onChange={(e)=>setpassword(e.target.value)}></input>
     </div>
      
     <p className='para-text'>By signup your agree to our terms,  <br/> and private policy and cookies policy</p>

     <button id='submit-btn' onClick={handleSubmit}>Sign Up</button>
      </div>



    </div>







    <div className='from-2'>
      <p>Already have an account? <span><Link to="/signin">SignIn</Link></span></p>
    </div>
    </div>
  )
}

export default Signup