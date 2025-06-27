import React from 'react';
import { useParams } from 'react-router';

const events = [
  {
    title: "Spring Garden Festival",
    date: "May 30, 2025",
    time: "10:00 AM - 4:00 PM",
    description: "Celebrate the blooming season with workshops, plant swaps, and hands-on gardening sessions. Join us for a day full of nature, fun, and learning. Whether you're a seasoned gardener or just starting, there's something for everyone! Enjoy live music, expert gardening talks, and interactive plant exchange activities.",
    image: "https://i.ibb.co/2YLWg2zr/s1.jpg"
  },
  {
    title: "Urban Composting 101",
    date: "June 25, 2025",
    time: "9:00 AM - 12:00 PM",
    description: "Join us for an interactive workshop on urban composting, where you will learn the best techniques to compost in small spaces, using sustainable practices. The workshop will cover composting basics, benefits, and how to build your compost system at home.",
    image: "https://i.ibb.co/KpwHmzKW/s2.jpg"
  },
  {
    title: "Vertical Gardening Masterclass",
    date: "July 10, 2025",
    time: "1:00 PM - 3:00 PM",
    description: "Vertical gardening is a great way to maximize space and grow your favorite plants in a compact area. Learn tips and tricks in this masterclass, including how to grow your own food on walls, fences, and balconies. This class is perfect for city dwellers with limited garden space.",
    image: "https://i.ibb.co/21Vbb3R4/s3.jpg"
  }
];

const EventDetails = () => {
  const { id } = useParams(); 
  const event = events[parseInt(id)]; 

  if (!event) {
    return <div>Event not found!</div>;
  }

   return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded my-8">
      <h1 className="text-3xl font-bold mb-4 text-green-700">{event.title}</h1>

      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover rounded mb-6"
        />
      )}

      <p className="mb-2 text-black"><strong>Date:</strong> {event.date}</p>
      <p className="mb-2 text-black"><strong>Time:</strong> {event.time}</p>
      <p className="mb-4 text-black"><strong>Description:</strong> {event.description}</p>

      
    </div>
  );
};

export default EventDetails;