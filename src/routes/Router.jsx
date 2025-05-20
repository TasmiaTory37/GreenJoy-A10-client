import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
            path:'/login',
            Component: Login,
        },
        {
            path:'/signup',
            Component: Signup,
        }
    ]
    }
])