import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
             
             <Navbar className='sticky top-0 z-0'></Navbar>
            <div  className='my-5'>
               
                <Outlet />
            </div>
                                                                                                   
             
            
        </div>
    );
};

export default AuthLayout;