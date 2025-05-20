import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
             
             <Navbar />
            <div  className='w-11/12 mx-auto'>
               
                <Outlet />
            </div>
                                                                                                   
             
            
        </div>
    );
};

export default AuthLayout;