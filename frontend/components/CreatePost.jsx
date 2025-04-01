import React from 'react'
import "./CreatePost.css"
import { useRef } from 'react';
const createPost = () => {

  const fileInputRef = useRef(null);
  const previewRef = useRef(null);

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        const objectURL = URL.createObjectURL(file);
        previewRef.current.src = objectURL;
        previewRef.current.style.display = "block"; // Show image
      } else {
        previewRef.current.style.display = "none"; // Hide preview for non-image files
      }
    }
  };

  return (
    <div className='Create-post'>
       <div className='header'>
        <h3 className='h3'>Create Post</h3>
        <button id="btn">Share</button>
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
        <textarea className='textarea' placeholder='Write a caption'></textarea>
       </div>

    </div>
  )
}

export default createPost