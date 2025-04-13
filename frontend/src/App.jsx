import { useState } from 'react'
import Navbar from '../components/Navbar'
import { createContext } from 'react'
import './App.css'
import Home from '../components/Home'
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import SignIn from '../components/SignIn'
import Profile from '../components/profile'
import Signup from '../components/Signup'
import CreatePost from '../components/CreatePost';
import { LoginContext } from '../contextLogin/ContextLogin'
function App() {
 const [Login,setLogin]=useState(false);

  return (
    <BrowserRouter>
   <div className='App'>
   <LoginContext.Provider value={{setLogin}}>
    <Navbar Login={Login}></Navbar>
   <Routes>
    <Route element={<Home/>} path='/'></Route>
    <Route element={<SignIn/>} path='/signin'></Route>
    <Route element={<Signup/>} path='/signup'></Route>
    <Route element={<Profile/>} path='/profile'></Route>
    <Route element={<CreatePost/>}  path='/createPost'></Route>
   </Routes>


  <ToastContainer/>
  </LoginContext.Provider>
   </div>
   </BrowserRouter>
  )
}

export default App
