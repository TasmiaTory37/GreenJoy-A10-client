import React, { useMemo } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router';
import { FaEye } from 'react-icons/fa';

const BrowseTips = () => {
  const tips = useLoaderData(); 
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get('difficulty'); 


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

      {/* Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Sort by Difficulty:</label>
        <select
          value={selected || ''}
          onChange={handleFilterChange}
          className="border px-3 py-1 rounded"
        >
          <option className='text-black' value="">All</option>
          <option className='text-black' value="Easy">Easy</option>
          <option className='text-black' value="Medium">Medium</option>
          <option className='text-black' value="Hard">Hard</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-green-50 text-green-800 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Difficulty</th> 
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orderedTips.map((tip) => (
              <tr key={tip._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-gray-800 font-medium">{tip.title}</td>
                <td className="px-6 py-4 text-gray-700">{tip.category}</td>
                <td className="px-6 py-4 text-gray-700 font-semibold">{tip.difficulty}</td> 
                <td className="px-6 py-4 text-center">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => navigate(`/auth/tip-details/${tip._id}`)}
                    className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded inline-flex items-center gap-2 text-sm"
                  >
                    <FaEye size={20} /> See More
                  </button>
                </td>
              </tr>
            ))}

            {tips.filter(tip => tip.difficulty === selected).length === 0 && selected && (
              <tr>
                <td colSpan="5" className="text-center text-red-500 font-semibold py-6">
                  No tips found for "{selected}" difficulty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
