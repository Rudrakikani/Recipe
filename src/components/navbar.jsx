import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Modal from "./Modal";
import Navbar from "./Navbar";
import Footer from "../pages/Footer";


export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)
   let token=localStorage.getItem("token")
   const [isLogin,setIsLogin]=useState(token ? false : true)

     useEffect(() =>{
        setIsLogin(token ? false : true)
     },[token])

     const checklogin = () => {
     if (token){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setIsLogin(true)

     }
     else{
        setIsOpen(true)
     }
   setIsOpen(true);
  }
 
   return (
    <>
        <header>
            <h2>Food Blog</h2>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li onClick={()=>isLogin && setIsLogin(true)}><NavLink to={ !isLogin ? "/myRecipe" : "/"}>My Recipe</NavLink></li>
                <li onClick={()=>isLogin && setIsLogin(true)}><NavLink to={ !isLogin ? "/favRecipe" : "/"}>Favourites</NavLink></li>
                <li onClick={checklogin}><p className="login">{ (isLogin)? "Login" : "Logout" }</p></li>
            </ul>
        </header>
        {isOpen && (
            <Modal onClose={() => setIsOpen(false)}>
                <InputForm setIsOpen={()=>setIsOpen(false)} /> 
            </Modal>
        )}
    </>
    );
    }




