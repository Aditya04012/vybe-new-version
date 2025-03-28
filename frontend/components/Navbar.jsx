import React from 'react'
import logo from "./../Images/logo.png";
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'> 
    <img src={logo}></img>
    <ul>
    <Link className='li' to="/signup"> <li>SignUp</li></Link>
    <Link className='li' to="/signin"><li>SignIn</li></Link>
    <Link className='li' to="/profile"><li>profile</li></Link>
       
    </ul>
    </div>
  )
}

export default Navbar