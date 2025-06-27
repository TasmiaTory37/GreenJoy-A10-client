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
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Dashboard from "../components/Dashboard/Dashboard";
import Overview from "../pages/Overview";  
import EventDetails from "../pages/EventDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/explore',
        element: <ExploreGardeners />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path:'/event-details/:id',
        element:<EventDetails/>
      },
      {
        path: '/browsetips',
        element: <BrowseTips />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const difficulty = url.searchParams.get('difficulty');
          return fetch(`https://assignment-10-server-taupe-five.vercel.app/publicTips${difficulty ? `?difficulty=${difficulty}` : ''}`);
        },
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
       {
        path: '/auth/tip-details/:id',
        element: <PrivetRout><TipDetails /></PrivetRout>,
      },
      {
        path: '/auth/update-tips/:id',
        element: <PrivetRout><UpdateTips /></PrivetRout>,
      },
    ]
  },
  {
    path: '/auth/dashboard',
    element: <PrivetRout><Dashboard /></PrivetRout>,
    children: [
    
      {
        index: true,  
        element: <PrivetRout><Overview /></PrivetRout>, 
      },
      {
        path: '/auth/dashboard/sharetips',
        element: <PrivetRout><ShareTips /></PrivetRout>,
      },
      {
        path: '/auth/dashboard/mytips',
        element: <PrivetRout><MyTips /></PrivetRout>,
        loader: () => fetch('https://assignment-10-server-taupe-five.vercel.app/addTips'),
      },
     
    ]
  }
]);
