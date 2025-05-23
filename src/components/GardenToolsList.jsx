import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaHandHoldingWater, FaRecycle, FaTools } from 'react-icons/fa';
import { GiWinterGloves } from 'react-icons/gi';

const GardenToolsList = () => {
  return (
   <div className=" py-12 px-4">
     <Slide><h1 className='text-4xl font-extrabold text-green-700 my-10 text-center'>Quick Garden Tools List</h1></Slide>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition">
          <FaTools size={40} className="text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-700">Small Trowel</h3>
          <p className="text-sm text-gray-600 mt-2">
            Perfect for planting and digging small holes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition">
          <FaHandHoldingWater size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-700">Spray Bottle</h3>
          <p className="text-sm text-gray-600 mt-2">
            Gently water seedlings or clean leaves.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition">
          <GiWinterGloves size={40} className="text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-700">Gardening Gloves</h3>
          <p className="text-sm text-gray-600 mt-2">
            Protects hands from thorns and soil.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition">
          <FaRecycle size={40} className="text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-700">Recycled Pots</h3>
          <p className="text-sm text-gray-600 mt-2">
            Reuse yogurt cups or bottles to start seeds.
          </p>
        </div>

      </div>
    </div>
  );
};

export default GardenToolsList;