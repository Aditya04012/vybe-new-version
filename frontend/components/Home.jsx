import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      {/* Instagram Post Card */}
      <div className='card'>
        {/* Card Header */}
        <div className='card-header'>
          <div className='card-pic'>
            <img className='profile-icon' src='https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Profile' />
          </div>
          <h5>Akshit</h5>
        </div>

        {/* Card Image */}
        <div className='card-image'>
          <img className='post-icon' src='https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Post' />
        </div>

        {/* Card Content */}
        <div className='card-content'>
          <AiOutlineHeart className='icon' />
         
          <BsBookmark className='icon bookmark' />
        </div>

        {/* Likes and Caption */}
        <p className='likes'>1 like</p>
        <p className='caption'><strong>Akshit</strong>: This is amazing</p>

        {/* Comment Section */}
        <div className='card-comment'>
          <input type='text' placeholder='Add a comment...' />
          <button className='comment'>Post</button>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
