import React from 'react'
import logo from "./../Images/logo.png";
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
const Navbar = ({Login}) => {
   const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem('jwt');
    navigate('/signin');
  }
const loginStatus=()=>{
  const token=localStorage.getItem('jwt');
  if(token || Login){
    return [
      <>
          <Link className='li' to="/profile"><li>profile</li></Link>
          <Link className='li' to="/createPost"><li>Create Post</li></Link>
          <button className='logoutBtn' onClick={logout}>Logout</button>
      </>
    ]
  }else{
    return [
      <>
          <Link className='li' to="/signup"> <li>SignUp</li></Link>
          <Link className='li' to="/signin"><li>SignIn</li></Link>
        
      </>
    ]
  }
}

  return (
    <div className='navbar'> 
    <img id='logo' src={logo}></img>
    <ul>
      {loginStatus()}
  
    </ul>
    </div>
  )
}

export default Navbar