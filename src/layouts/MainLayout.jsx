import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); 


    useEffect(() => {
        localStorage.setItem('theme', theme); 
        document.documentElement.setAttribute('data-theme', theme); 
    }, [theme]);

   
    const handleToggle = (e) => {
        setTheme(e.target.checked ? 'dark' : 'light'); 
    };

    return (
        <div className='bg-green-50 min-h-screen'>
            <nav className='sticky top-0 z-50'>
                <Navbar onToggle={handleToggle} theme={theme} /> 
            </nav>

            <section>
                <Outlet /> 
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;
