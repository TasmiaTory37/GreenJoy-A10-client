import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const PrivetRout = ({children}) => {
  const location = useLocation(); 
  const {user}=useContext(AuthContext);
//   console.log(user)
  if(user && user?.email) {
   return children;                     
 } 
 else{
  {user ? children : <Navigate to="/login" />} 
 }
 
 return (
   <div>
      <Navigate state={location.pathname} to='/auth/login'></Navigate>
       {user ? children :   <Navigate to="/auth/login" state={{ from: location }} replace />}  
   </div>
 );
};

export default PrivetRout;