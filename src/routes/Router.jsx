import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../layouts/AuthLayout";
import ExploreGardeners from "../pages/ExploreGardeners";
import ShareTips from "../pages/ShareTips";
import MyTips from "../pages/MyTips";
import BrowseTips from "../pages/BrowseTips";

export const router=createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,


    
      children:[
        {
          path: '/',
          Component: Home,
        },

        {
            path:'/explore',
            Component: ExploreGardeners,



        },
        {
            path:'/login',
            Component: Login,
        },
        {
            path:'/signup',
            Component: Signup,
        },
        {
            path:'/browsetips',
            Component:BrowseTips,

        }




    ]
    },



             
         {
           path:'/auth',
          element:<AuthLayout></AuthLayout>,
          children:[
           {
               path:'/auth/signup',
               element:<Signup></Signup>
             },
             {
              path:'/auth/login',
              element:<Login></Login>
            },
            {
                path:'/auth/sharetips',
                Component:ShareTips,

            },
            {
                path:'/auth/mytips',
                Component:MyTips,
            }
            
      
           
          ]
        },  
      

])