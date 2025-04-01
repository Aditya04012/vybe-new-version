import React from 'react'
import logo from "./../Images/logo.png";
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'> 
    <img id='logo' src={logo}></img>
    <ul>
    <Link className='li' to="/signup"> <li>SignUp</li></Link>
    <Link className='li' to="/signin"><li>SignIn</li></Link>
    <Link className='li' to="/profile"><li>profile</li></Link>
    <Link className='li' to="/createPost"><li>Create Post</li></Link>
    </ul>
    </div>
  )
}

export default Navbar