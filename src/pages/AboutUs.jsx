import React, { useEffect } from 'react';
import { motion } from 'framer-motion';



const AboutUs = () => {
  useEffect(() => {
           document.title = "GreenJoy | About Us"; 
         }, []);

  return (
    <section className=" py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">Welcome to GreenJoy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            <strong>GreenJoy</strong> is a community-driven platform that connects gardening enthusiasts, from beginners to experts. We share tips, offer resources, and promote sustainable gardening practices.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join us to explore plant care, local events, and grow your gardening passion with like-minded individuals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
