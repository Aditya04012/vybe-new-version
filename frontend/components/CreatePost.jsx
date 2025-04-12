import React, { use } from 'react'
import "./CreatePost.css"
import { useRef,useState } from 'react';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const createPost = () => {
   const [body,setBody]=useState("");
   const [url,setUrl]=useState("");


  const fileInputRef = useRef(null);
  const previewRef = useRef(null);

  
  const navigate=useNavigate();


const ResA=()=>{
  toast.success('Post uploaded success!',{
    theme:'dark'
  });
}

const ResB=(msg)=>{
  toast.error(msg,{
    theme:'dark'
  });
}


const submit=async()=>{
    if(url && body){
      try{
      const response=await fetch('http://localhost:5000/vybe/api/v1/createPost',{
        method:"post",
        headers:{
          "Content-Type": "application/json" ,
          "Authorization":"Bearer "+localStorage.getItem('jwt'),
        },
        body:JSON.stringify({url,body})
      });
      

      const result = await response.json();
    
      if (!response.ok) {
        throw new Error(result.error || `Server error: ${response.status}`);
      }
   

       ResA();
       navigate('/');

    }catch(err){
      ResB(err.message);
    }
      
    }else{
      ResB("something went wrong please try again later");
    }
}


  const handleFileChange = async() => {
    const file = fileInputRef.current.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        const objectURL = URL.createObjectURL(file);
        previewRef.current.src = objectURL;
        previewRef.current.style.display = "block";




        const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default"); 
        

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dmlzwojtn/image/upload", {
          method: "POST",
          body: formData
        });

        const data = await response.json();
           setUrl(data.secure_url);
       
      } catch (error) {
        console.error("Upload failed:", error);
      }

      } else {
        previewRef.current.style.display = "none"; 
      }
    }



  };

  return (
    <div className='Create-post'>
       <div className='header'>
        <h3 className='h3'>Create Post</h3>
        <button id="btn" onClick={()=>{submit()}}>Share</button>
       </div>


       <div className='prev'>
     
      <img ref={previewRef} src="https://www.shutterstock.com/image-illustration/no-picture-available-placeholder-thumbnail-600nw-2179364083.jpg" alt="Preview" className="img-prev" />
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="mb-2" /> 
       </div>
       

       <div className='user-header'>
       <div className='user'>
       <img className='profile-icon' src='https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile' />
        <h4>Akshit</h4>
        </div>
        <textarea className='textarea' value={body} onChange={(e)=>{setBody(e.target.value)}} placeholder='Write a caption'></textarea>
       </div>

    </div>
  )
}

export default createPost