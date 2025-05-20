import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';

const Signup = () => {
      const [showPassword,setShowPassword]=useState(false)
    return (
        <div>
            <div className='flex justify-center items-center my-5'>  
                
                <div  className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='text-center font-bold text-green-700 text-2xl'>Signup Here!</h2>
                    <form  className="card-body ">
                        <fieldset className="fieldset">
                            <label className="text-base">Name</label>
                            <input type="text" name='name' className="input" placeholder="Your Name" required />

                            <label className="text-base">Photo Url</label>
                            <input type="text" name='url' className="input" placeholder="Photo Url" required />
                            <label className="text-base">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            
                            <label className="text-base fieldset">Password</label>
                            
                            <input type={showPassword ? 'text' : 'password'} name='pass' 
                            placeholder="Password" 
                            className="input" required />

                            <button
                            onClick={()=>setShowPassword(!showPassword)}
                            className='btn btn-xs absolute right-12 bottom-52'>
                            {
                            showPassword ?<FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
                            }
                            </button>
                            
                            <button className="btn bg-green-600 text-white mt-4">Signup</button>
                    
                            <button className='btn  mt-4 '><FaGoogle className='text-blue-800'></FaGoogle> Signup With Google</button>
                            
                            <p className=' text-base'>Already have an Account? <Link className='text-green-500 link link-hover' to="/login">Login</Link>  </p>
                        </fieldset>
                    </form>
                </div>
              
            </div>
        </div>
    );
};

export default Signup;