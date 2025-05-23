import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const allTips = useLoaderData();
  const navigate = useNavigate();

  const myTips = allTips.filter(tip => tip.userEmail === user?.email);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this tip?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      await fetch(`http://localhost:3000/deleteTip/${id}`, { method: 'DELETE' });
      Swal.fire('Deleted!', 'Your tip has been deleted.', 'success');
      window.location.reload();
    }
  };

  return (
<div className="max-w-6xl mx-auto px-4 py-6">
  <h2 className="text-3xl font-semibold mb-6 text-green-700 flex items-center gap-2">My Garden Tips</h2>

  <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 bg-white">
    <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead className="bg-green-50 text-green-800 uppercase text-xs">
        <tr>
          <th className="px-6 py-3">Title</th>
          <th className="px-6 py-3">Plant Type</th>
          <th className="px-6 py-3">Category</th>
          <th className="px-6 py-3">Visibility</th>
          <th className="px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {myTips.map((tip) => (
          <tr key={tip._id} className="hover:bg-gray-50 transition">
            <td className="px-6 py-4 font-medium text-gray-800">{tip.title}</td>
            <td className="px-6 py-4 text-gray-700">{tip.plantType}</td>
            <td className="px-6 py-4 text-gray-700">{tip.category}</td>
            <td className="px-6 py-4">
              <span className={`px-2 py-1 text-xs rounded-full font-semibold 
                ${tip.availability === 'Public' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                {tip.availability}
              </span>
            </td>
            <td className="px-6 py-4 text-center space-x-2">
              <button
                onClick={() => navigate(`/auth/update-tips/${tip._id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(tip._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
              >
                Delete 
              </button>
            </td>
          </tr>
        ))}

        {myTips.length === 0 && (
          <tr>
            <td colSpan="5" className="text-center text-gray-500 py-6">
              You haven’t added any tips yet.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default MyTips;
