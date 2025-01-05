import React, { useState } from 'react'
import axios from 'axios'

export default function InputForm() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isSignUp,setIsSignUp]=useState(false)

const handleOnSubmit=async(e)=>{
    e.preventDefault()
    let endpoint=(isSignUp) ? "signUp" : "login"
    await axios.post 
}

  return (
   <>
         <form className='form'onSubmit={handleOnSubmit}>
             <div className='form-Control'>
                  <label>Email</label>
                  <input type='email' className='input' onChange={(e)=>setEmail(e.target.value)} required ></input>
             </div>
             <div className='form-Control'>
                  <label>Password</label>
                  <input type='password' className='input' onChange={(e)=>setPassword(e.target.value)} required ></input>
             </div>
             <button type='submit'>{(isSignUp) ? "Sign Up" : "Login"}</button><br></br>
             <p onClick={()=>setIsSignUp(pre=!pre)}>{(isSignUp) ? "Already have an account" : " Create new account"}</p>
         </form>
   </>
  )
}

