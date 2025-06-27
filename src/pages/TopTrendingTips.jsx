import React, { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaEye, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);  
   const navigate = useNavigate();

  useEffect(() => {
    fetch('https://assignment-10-server-taupe-five.vercel.app/topTrendingTips')
      .then(res => res.json())
      .then(data => {
        setTips(data);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Slide>
        <h2 className="text-4xl font-extrabold text-green-700 mb-10 text-center">
          Top Trending Garden Tips
        </h2>
      </Slide>

     
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tips.map(tip => (
            <div key={tip._id} className="bg-white shadow rounded p-4">
              <img
                src={tip.imageUrl}
                alt={tip.title}
                className="w-full h-48 object-cover rounded my-4"
              />
              <h3 className="text-xl text-black font-semibold">{tip.title}</h3>
              
              <p className="my-4 text-black">
                <strong>Shared By:</strong> {tip.userName}
              </p>
              <p className="inline-flex items-center gap-2 font-semibold">
                <FaHeart className="text-red-500" />{' '}
                <span className="text-green-700">{tip.totalLiked} Likes</span>
              </p>
              <br />
             <button
              onClick={() => navigate(`/auth/tip-details/${tip._id}`)}
              className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded inline-flex items-center gap-2 text-sm my-4"
            >
              <FaEye size={20} /> See More
            </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopTrendingTips;
