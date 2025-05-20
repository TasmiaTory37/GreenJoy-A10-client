import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
        const [showPassword,setShowPassword]=useState(false)
    return (
         <div className='flex justify-center items-center min-h-screen'>  
             
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-center font-bold text-green-700 text-2xl'>Login Your Account</h2>
                <form className="card-body">
                <fieldset className="fieldset">
                <label className="text-base">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required/>
            
            
            <div className="relative">
                <label className="text-base fieldset">Password</label>

                <input type={showPassword ? 'text' : 'password'} name='pass' 
                    placeholder="Password" 
                    className="input" required />
                
                <button
                    onClick={()=>setShowPassword(!showPassword)}
                    className='btn btn-xs absolute right-7 top-10'>
                    {
                    showPassword ?<FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
                    }
                </button>
                <label className="label">
                   <p className="label text-red-500 link link-hover mt-2">Forgot password?</p>
                </label>
            </div>

         
            <button className="btn bg-green-600 text-white mt-4">Login</button>
            <button className='btn  mt-4 '><FaGoogle className='text-blue-800'></FaGoogle> LogIn With Google</button>
            <p className=' text-base'>Don't have an Account? <Link className='text-green-500 link link-hover' to="/signup">Signup</Link>  </p>
          </fieldset>
        </form>
      </div>

      
  
       </div>
    );
};

export default Login;