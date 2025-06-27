import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Overview = () => {
  const { user, loading } = useContext(AuthContext);
  const [totalTips, setTotalTips] = useState(0);
  const [myTips, setMyTips] = useState(0);

  useEffect(() => {
    if (user) {
      fetch('https://assignment-10-server-taupe-five.vercel.app/publicTips')
        .then((res) => res.json())
        .then((data) => setTotalTips(data.length))
        .catch((err) => console.error('Error fetching total tips:', err));

      fetch(`https://assignment-10-server-taupe-five.vercel.app/addTips?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data.length))
        .catch((err) => console.error('Error fetching your tips:', err));
    }
  }, [user]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-lg text-green-500"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Tips */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Total Tips</h3>
          <p className="text-3xl text-green-500">{totalTips}</p>
        </div>

        {/* My Tips */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-700 mb-2">My Tips</h3>
          <p className="text-3xl text-green-500">{myTips}</p>
        </div>

        {/* User Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-700 mb-2">User Info</h3>
          <p className="text-gray-600 text-base">Name: {user.displayName || 'N/A'}</p>
          <p className="text-gray-600 text-base">Email: {user.email || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
