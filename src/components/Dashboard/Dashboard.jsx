import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router';
import Dashtop from './Dashtop';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-green-100 min-h-screen">
      <Dashtop />

      <div className="flex flex-col md:flex-row mt-4 px-4 gap-4">
        {/* Sidebar */}
        <div className="bg-white w-full md:w-1/4 p-4 rounded shadow-md">
          <h2 className="text-xl mb-4 text-black">
            Welcome, <strong className="text-green-600">{user.displayName}</strong>
          </h2>
          <ul>
            <li>
              <NavLink
                to="/auth/dashboard/mytips"
                className={({ isActive }) =>
                  isActive
                    ? "block mb-2 text-green-500 font-semibold"
                    : "block mb-2 text-black hover:text-green-400"
                }
              >
                My Tips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/dashboard/sharetips"
                className={({ isActive }) =>
                  isActive
                    ? "block mb-2 text-green-500 font-semibold"
                    : "block mb-2 text-black hover:text-green-400"
                }
              >
                Share a Garden Tip
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white p-4 rounded shadow-md overflow-auto min-h-[60vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
