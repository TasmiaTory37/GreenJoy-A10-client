import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { FaHeart } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const TipDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/tip/${id}`)
      .then(res => res.json())
      .then(data => {
        setTip(data);
        setLoading(false);
      });
  }, [id]);

  const handleLike = () => {
    if (!user) {
      alert('Please login to like a tip');
      return;
    }
    if (likeLoading) return;

    setLikeLoading(true);
    fetch(`http://localhost:3000/tip/like/${id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(() => {
        setTip(prevTip => ({
          ...prevTip,
          totalLiked: (prevTip.totalLiked || 0) + 1,
        }));
        setLikeLoading(false);
      })
      .catch(() => setLikeLoading(false));
  };

  if (loading) return<div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
  if (!tip) return <div className="p-6 text-center">Tip not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-8">
      <h1 className="text-3xl font-bold mb-4 text-green-700">{tip.title}</h1>

      {tip.imageUrl && (
        <img
          src={tip.imageUrl}
          alt={tip.title}
          className="w-full h-96 object-cover rounded mb-6"
        />
      )}

      <p className="mb-2 text-black"><strong>Plant Type:</strong> {tip.plantType}</p>
      <p className="mb-2 text-black"><strong>Category:</strong> {tip.category}</p>
      <p className="mb-2 text-black"><strong>Difficulty Level:</strong> {tip.difficulty}</p>
      <p className="mb-4 text-black"><strong>Description:</strong> {tip.description}</p>
      <p className="mb-4 text-black"><strong>Shared By:</strong> {tip.userName} ({tip.userEmail})</p>
      <p className="mb-4 text-black"><strong>Availability:</strong> {tip.availability}</p>

      <button
        onClick={handleLike}
        disabled={likeLoading}
        className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        <FaHeart  /> Like {tip.totalLiked || 0}
      </button>
    </div>
  );
};

export default TipDetails;
