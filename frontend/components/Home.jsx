import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { toast } from 'react-toastify';
import './Home.css';




function card(props){

}



const Home = () => {
const [post,setPost]=useState([]);

const ResB=(msg)=>{
  toast.error(msg,{
    theme:'dark'
  });
}


  const navigate=useNavigate();
 useEffect(() => {

  const fetchPosts = async () => {


  const token=localStorage.getItem('jwt');
  if(!token){
    navigate('/signin');
  }
 
    try{
  const response= await fetch('http://localhost:5000/vybe/api/v1/getAllPost',{
      method:'get',
      headers:{
      "Content-Type": "application/json" ,
          "Authorization":"Bearer "+localStorage.getItem('jwt'),
      },
    });
    const result=await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || `Server error: ${response.status}`);
    }
    console.log(result);
    setPost(result);

  }catch(err){
    console.error("Error:", err.message);
    ResB("No data found");
  }

    
  };
  fetchPosts();


   
 }, []);
 


  return (
    <div className='home'>
      {/* Instagram Post Card */}
 
   {post.map((el)=>(
    <div className='card'>
        {/* Card Header */}
        <div className='card-header'>
          <div className='card-pic'>
            <img className='profile-icon' src='https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile' />
          </div>
          <h5>{el.postedBy.name}</h5>
        </div>

        {/* Card Image */}
        <div className='card-image'>
          <img className='post-icon' src={el.photo} alt='Post' />
        </div>

        {/* Card Content */}
        <div className='card-content'>
          <AiOutlineHeart className='icon' />
         
          <BsBookmark className='icon bookmark' />
        </div>

        {/* Likes and Caption */}
        <p className='likes'>1 like</p>
        <p className='caption'><strong>{el.postedBy.name}</strong>: {el.body}</p>

        {/* Comment Section */}
        <div className='card-comment'>
          <input type='text' placeholder='Add a comment...' />
          <button className='comment'>Post</button>
        </div>
      </div>

   ))}

     
   
    </div>
  );
};

export default Home;
