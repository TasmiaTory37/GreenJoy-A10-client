import React, { useEffect, useState } from 'react';

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://assignment-10-server-taupe-five.vercel.app/gardeners')
      .then(res => res.json())
      .then(data => {
        setGardeners(data);
        setLoading(false); 
      })
      .catch(() => setLoading(false)); 
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8 min-h-screen">
      <h2 className="text-4xl font-extrabold text-green-700 mb-10 text-center">
        Explore Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gardeners.map((gardener) => (
          <div
            key={gardener._id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center"
          >
            <div className="relative w-32 h-32 mb-4">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="rounded-full object-cover w-full h-full border-3 border-green-400"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">{gardener.name}</h3>

            <p className="text-sm text-gray-600 mt-1 mb-1">
              {gardener.gender}, Age {gardener.age}
            </p>

            <p className={`text-sm font-semibold mb-2 ${
              gardener.status === 'active' ? 'text-green-600' : 'text-gray-400'
            }`}>
              Status: {gardener.status.charAt(0).toUpperCase() + gardener.status.slice(1)}
            </p>

            <p className="text-gray-700 text-center mb-3">{gardener.experience}</p>

            <div className="bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full">
              Tips Shared: {gardener.totalSharedTips}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
