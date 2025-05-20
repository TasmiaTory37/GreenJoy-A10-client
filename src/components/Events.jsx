import React from 'react';

const Events = () => {
    return (
        <div>
            <section className="max-w-6xl mx-auto px-6 py-12 bg-white rounded-lg shadow-md my-12">
                <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Upcoming Gardening Events</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                <div className="border border-green-300 rounded p-6 shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Community Composting Workshop</h3>
                    <p className="text-gray-600 mb-1">Date: June 10, 2025</p>
                    <p className="text-gray-600 mb-3">Learn how to turn your kitchen waste into rich compost.</p>
                    <button className="btn bg-green-500 text-white font-semibold hover:bg-green-600">Register Now</button>
                </div>

                <div className="border border-green-300 rounded p-6 shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Urban Balcony Gardening Meetup</h3>
                    <p className="text-gray-600 mb-1">Date: June 25, 2025</p>
                    <p className="text-gray-600 mb-3">Share ideas and tips for small space gardening in the city.</p>
                    <button className="btn bg-green-500 text-white font-semibold hover:bg-green-600">Join Event</button>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Events;