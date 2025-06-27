import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    document.title = "GreenJoy | Contact";
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-white min-h-screen flex flex-col items-center">
      {/* Form Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Get in Touch</h2>
          <p className="text-gray-700 mt-3 text-lg">
            We'd love to hear from you! Reach out with any questions, feedback, or just to say hello.
          </p>
        </div>

        <form className="space-y-6">
          <div className="w-full max-w-xs mx-auto">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="w-full max-w-xs mx-auto">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="w-full max-w-xs mx-auto">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-3xl mx-auto text-center text-gray-600 space-y-4">
        <p className="flex items-center justify-center gap-3 text-lg">
          <FaEnvelope className="text-green-600 text-xl" /> <strong>Email:</strong> info@greenjoy.com
        </p>
        <p className="flex items-center justify-center gap-3 text-lg">
          <FaPhone className="text-green-600 text-xl" /> <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="flex items-center justify-center gap-3 text-lg">
          <FaMapMarkerAlt className="text-green-600 text-xl" /> <strong>Address:</strong> Garden Street, Green City
        </p>
      </div>
    </section>
  );
};

export default Contact;
