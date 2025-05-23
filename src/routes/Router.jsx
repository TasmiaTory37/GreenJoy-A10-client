import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import ExploreGardeners from "../pages/ExploreGardeners";
import ShareTips from "../pages/ShareTips";
import MyTips from "../pages/MyTips";
import BrowseTips from "../pages/BrowseTips";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import UpdateTips from "../pages/UpdateTips";
import PrivetRout from "./PrivateRoute";
import TipDetails from "../pages/TipDetails";


export const router=createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
       errorElement:<ErrorPage/>,

    
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
            path:'/register',
            Component: Register,
        },
        {
            path: '/browsetips',
            Component: BrowseTips,
            loader: ({ request }) => {
            const url = new URL(request.url);
            const difficulty = url.searchParams.get('difficulty');
            return fetch(`http://localhost:3000/publicTips${difficulty ? `?difficulty=${difficulty}` : ''}`);
              }
            }

    ]
    },


             
         {
           path:'/auth',
          element:<AuthLayout></AuthLayout>,
          children:[
           {
               path:'/auth/register',
               element:<Register></Register>
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
            path: '/auth/mytips',
            element: <PrivetRout><MyTips /></PrivetRout>,
            loader: () => fetch('http://localhost:3000/addTips')
            },
            
            {
            path: '/auth/tip-details/:id',
            element: <PrivetRout><TipDetails /></PrivetRout>,
           
            },
                
            {
            path: '/auth/update-tips/:id',
            Component: UpdateTips,
            }

           
          ]
        },  
      

])