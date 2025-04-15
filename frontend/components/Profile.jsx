import React from 'react'
import "./Profile.css"
import { useState } from 'react';
import { useEffect } from 'react';
const Profile = () => {
const [post,setPost]=useState([]);
  useEffect(() => { 
    const click=async()=>{
      try{
      const response=await fetch('http://localhost:5000/vybe/api/v1/getPostById',{
        method:'get',
        headers:{
          "Content-Type": "application/json" ,
          "Authorization":"Bearer "+localStorage.getItem('jwt'),
        }
      });
      
      const result=await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || `Server error: ${response.status}`);
    }
  
    setPost(result);

    }catch(err){
     console.log(err);
  }
};
click();

  }, [])
  


  return (
    <div className='profile'>
      <div className='profile-frame'>
        <div className='profile-pic'>
        <img className='profile-icon' src='https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile' />
        </div>
      <div className='profile-data'>
        <h1>Akshit</h1>
        <div className='profile-info'>
          <p>40 Post</p>
          <p>200 Followers</p>
          <p>100 Following</p>
        </div>


      </div>

      </div>

      <hr style={{ border: "2px solid grey", width: "50%" }} />

      <div className='gallary'>
       {post.map((el,ind)=>(
       
        <img key={ind} className='profile-gallary'  src={el.photo} alt='Profile' />
       ))}

     
      
      </div>

    </div>
  )
}

export default Profile;