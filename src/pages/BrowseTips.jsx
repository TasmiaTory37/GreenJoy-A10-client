import React, { useEffect, useState, useMemo } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const BrowseTips = () => {
  const tips = useLoaderData();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get('difficulty');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tips.length > 0) {
      setLoading(false);
    }
  }, [tips]);

  const orderedTips = useMemo(() => {
    if (!selected) return tips;
    const selectedTips = tips.filter(tip => tip.difficulty === selected);
    const otherTips = tips.filter(tip => tip.difficulty !== selected);
    return [...selectedTips, ...otherTips];
  }, [tips, selected]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ difficulty: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold mb-4 text-green-700">Public Garden Tips</h2>
      <h3>
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={1000}
          deleteSpeed={25}
          loop={1}
          typeSpeed={75}
          words={['Here we can see the garden tips based on the difficulty level.']}
        />
      </h3>

      {/* Dropdown */}
      <div className="my-4">
        <label className="mr-2 font-medium">Sort by Difficulty:</label>
        <select
          value={selected || ''}
          onChange={handleFilterChange}
          className="border px-3 py-1 rounded"
        >
          <option className="text-black" value="">All</option>
          <option className="text-black" value="Easy">Easy</option>
          <option className="text-black" value="Medium">Medium</option>
          <option className="text-black" value="Hard">Hard</option>
        </select>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          {orderedTips.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {orderedTips.map((tip) => (
                <div
                  key={tip._id}
                  className="border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold text-green-800">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">Category: <span className="font-medium">{tip.category}</span></p>
                    <p className="text-gray-600 text-sm">Difficulty: <span className="font-semibold">{tip.difficulty}</span></p>
                    <button
                      onClick={() => navigate(`/auth/tip-details/${tip._id}`)}
                      className="mt-2 bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2 rounded inline-flex items-center gap-2 text-sm"
                    >
                      <FaEye size={18} /> See More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-red-500 font-semibold py-6">
              No tips found for "{selected}" difficulty.
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BrowseTips;
