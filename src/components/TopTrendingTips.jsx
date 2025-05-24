import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaHeart } from 'react-icons/fa';

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);  // Create loading state

  useEffect(() => {
    fetch('https://assignment-10-server-taupe-five.vercel.app/topTrendingTips')
      .then(res => res.json())
      .then(data => {
        setTips(data);
        setLoading(false);  // Set loading to false when data is fetched
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Slide>
        <h2 className="text-4xl font-extrabold text-green-700 mb-10 text-center">
          Top Trending Garden Tips
        </h2>
      </Slide>

      {/* Show the spinner while loading */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tips.map(tip => (
            <div key={tip._id} className="bg-white shadow rounded p-4">
              <img
                src={tip.imageUrl}
                alt={tip.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-xl text-black font-semibold">{tip.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{tip.description}</p>
              <p className="mb-4 text-black">
                <strong>Shared By:</strong> {tip.userName}
              </p>
              <p className="inline-flex items-center gap-2 font-semibold">
                <FaHeart className="text-red-500" />{' '}
                <span className="text-green-700">{tip.totalLiked} Likes</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopTrendingTips;
