import React from 'react';
import p1 from '../assets/Project1.jpg'
import p2 from '../assets/Project2.jpg'
import p3 from '../assets/Project3.jpg'
import p4 from '../assets/Project4.jpg'
import p5 from '../assets/Project5.jpg'
import p6 from '../assets/Project6.jpg'
import p7 from '../assets/Project7.jpg'
import p8 from '../assets/Project8.jpg'
import { Slide } from 'react-awesome-reveal';

const Project = () => {
    return (
        <div>
            <Slide><h1 className='text-4xl font-extrabold text-green-700 my-10 text-center'>Our Running Project Gallery</h1></Slide>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-5'>
                <img src={p1} alt="" />
                <img src={p2} alt="" />
                <img src={p3} alt="" />
                <img src={p4} alt="" />
                <img src={p5} alt="" />
                <img src={p6} alt="" />
                <img src={p7} alt="" />
                <img src={p8} alt="" />

            </div>
            
        </div>
    );
};

export default Project;