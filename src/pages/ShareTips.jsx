import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import Swal from 'sweetalert2';

    
const ShareTips = () => {
  const { user } = useContext(AuthContext);
     const handleShare = e=> {
        e.preventDefault();
        const form = e.target;
        const formData= new FormData(form);
        const shareTips = Object.fromEntries(formData.entries());
        shareTips.totalLiked = 0;
        // console.log(shareTips);
     
      

     fetch('https://assignment-10-server-taupe-five.vercel.app/addTips',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(shareTips)
     })
     .then (res=> res.json())
        .then (data=>{
                if(data.insertedId){
                    form.reset();
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Your tip has been shared successfully.',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }

            })
    }
        


      
    return (
        <div className="min-h-screen">
            <form onSubmit={handleShare} className="max-w-xl mx-auto p-6 space-y-4  bg-white shadow rounded">
                <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2"> <FaCanadianMapleLeaf size={30} className='text-green-600 '/>Share a Garden Tip</h2>

                <input type="text" name="title" placeholder="Title" className="w-full border border-black text-black p-2 rounded" required />

                <input type="text" name="plantType" placeholder="Plant Type / Topic" className="w-full border border-black text-black p-2 rounded" required />

                <select name="difficulty" className="w-full border border-black text-black p-2 rounded">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <textarea name="description" placeholder="Description" rows="4" className="w-full border border-black text-black p-2 rounded" required></textarea>

                <input type="text" name="imageUrl" placeholder="Image URL" className="w-full border border-black text-black p-2 rounded" />

                <select name="category" className="w-full border border-black text-black p-2 rounded">
                    <option className='text-black'  value="Composting">Composting</option>
                    <option className='text-black'  value="Plant Care">Plant Care</option>
                    <option className='text-black' value="Vertical Gardening">Vertical Gardening</option>
                    <option className='text-black' value="Other">Other</option>
                </select>

                <select name="availability" className="w-full border border-black text-black p-2 rounded">
                    <option className='text-black' value="Public">Public</option>
                    <option className='text-black' value="Hidden">Hidden</option>
                </select>

                <input
                    type="text"
                    name="userName"
                    value={user?.name || user?.displayName || ''}
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

                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded">
                    Submit Tip
                </button>
            </form>
        </div>
    );
};

export default ShareTips;
