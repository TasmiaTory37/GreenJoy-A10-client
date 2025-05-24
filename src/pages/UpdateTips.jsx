import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateTips = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetch(`https://assignment-10-server-taupe-five.vercel.app/tip/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data));
  }, [id]);

 if (!formData) return <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://assignment-10-server-taupe-five.vercel.app/updateTip/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(() => {
      Swal.fire('Updated!', 'Your tip has been updated.', 'success');
      navigate('/auth/mytips');
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold text-gray-800">Update Garden Tip</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border border-black text-black p-2 rounded"
          required
        />

        <input
          type="text"
          name="plantType"
          value={formData.plantType}
          onChange={handleChange}
          placeholder="Plant Type / Topic"
          className="w-full border border-black text-black p-2 rounded"
          required
        />

        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full border border-black text-black p-2 rounded"
          required
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          className="w-full border border-black text-black p-2 rounded"
          required
        />

        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border border-black text-black p-2 rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-black text-black p-2 rounded"
          required
        >
          <option value="Composting">Composting</option>
          <option value="Plant Care">Plant Care</option>
          <option value="Vertical Gardening">Vertical Gardening</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border border-black text-black p-2 rounded"
          required
        >
          <option value="Public">Public</option>
          <option value="Hidden">Hidden</option>
        </select>

      
        <input
          type="text"
          name="userName"
          value={user?.displayName || user?.name || ''}
          readOnly
          className="w-full border p-2 rounded bg-gray-100 text-gray-700"
        />

        <input
          type="email"
          name="userEmail"
          value={user?.email || ''}
          readOnly
          className="w-full border p-2 rounded bg-gray-100 text-gray-700"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          Update Tip
        </button>
      </form>
    </div>
  );
};

export default UpdateTips;
