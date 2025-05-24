import React, {  useContext, useEffect, useState} from 'react';
import logo from '../assets/logo.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import { Link, NavLink, useNavigate } from 'react-router';


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
      const [showLogout, setShowLogout] = useState(false);
        const navigate = useNavigate();
    const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
    useEffect(()=>{
        localStorage.setItem("theme",theme);
        const localTheme=localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme",localTheme);
    },[theme]);


    const handleToggle=(e)=>{
        if(e.target.checked){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }



  const handleLogout = async () => {
    await logOut();
    setShowLogout(false);
    navigate('/');
  };
  
  return (
< div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
                    <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/'>Home</NavLink>
                    </li>
   
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/explore'>Explore Gardeners</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/browsetips'>Browse Tips</NavLink>
                    </li>
                    
                    {user && (
                       <ul className=''>
                            <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/auth/sharetips"> Share a Garden Tip </NavLink></li>
                            <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/auth/mytips"> My Tips </NavLink></li>
                        
                         </ul>
                  
                    )}


        <li>
            <div className='navbar-center'>
                <p>Theme</p>
                <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
                className="swap-on h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
                className="swap-off h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            </label>

           </div>
        </li>
        </ul>
                
                

                
          
    </div>
            <img className='h-[48px] w-[48px]' src={logo} alt="" />
            <h1 className="text-green-500 text-xl">GreenJoy</h1>
        </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/'>Home</NavLink>
                        </li>
    
                        <li>
                
                        <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/explore'>Explore Gardeners</NavLink>
                
                        </li>
                        <li>
                        <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/browsetips'>Browse Tips</NavLink>
                        </li>

                            {user && (
                            
                            <ul className='flex'>
                                <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/auth/sharetips"> Share a Garden Tip </NavLink></li>
                                <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/auth/mytips"> My Tips </NavLink></li>
                            
                            </ul>
                            )}


                            
        <li>
            <div className='navbar-center'>
                <p>Theme</p>
                <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
                className="swap-on h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
                className="swap-off h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
            </label>

           </div>
        </li>
                        
                    </ul>


              
            </div>



  


      {/* Navbar End */}
<div className="navbar-end relative">
      {!user ? (
        <Link to="/login" className="btn bg-green-600 hover:bg-green-700 text-white">
          Login
        </Link>
      ) : (
        <div
          className="relative group"
          onClick={() => setShowLogout((prev) => !prev)}
        >
          {/* User Photo */}
          <img
            src={user.photoURL || "https://via.placeholder.com/40"}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
          />

         <div className="absolute top-full right-3 mt-2 hidden group-hover:flex flex-col items-start bg-gray-800 text-white text-sm py-2 px-3 rounded shadow-lg z-10">
            <span>{user.displayName ||user.email|| "Anonymous"}</span>
          </div>

   
          {showLogout && (
            <button
              onClick={handleLogout}
              className="absolute top-full right-0 mt-2 bg-red-600 text-white px-4 py-1 rounded shadow z-20"
            >
              Logout
            </button>
          )}
        </div>

      )}
    </div>

    </div>
    );
};

export default Navbar;