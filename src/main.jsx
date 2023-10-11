import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import './satoshi.css';
import Home from './Components/Pages/Home/Home';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Layout from './Components/Layout/Layout';
import Menu from './Components/Pages/Menu/Menu';
import OrderTracking from './Components/Pages/OrderTracking/OrderTracking';
import PlatteringService from './Components/Pages/PlatteringService/PlatteringService';
import AboutUs from './Components/Pages/QuickLinks/AboutUs';
import Contact from './Components/Pages/QuickLinks/Contact';
import Cart from './Components/Pages/Cart/Cart';
import WishList from './Components/Pages/Home/WishList/WishList';
import AdminPanel from './Components/Pages/AdminPanel/AdminPanel';
import Demo from './Components/Pages/Demo';
import SetDemo from './Components/Pages/SetDemo';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/adminpanel",
        element: <AdminPanel/>,
      },
      {
        path:"/demo",
        element: <Demo/>,
      },
      {
        path:"/setdemo",
        element: <SetDemo/>,
      },
      {
        path:"/cart",
        element: <Cart/>,
      },
      {
        path:"/wishlist",
        element: <WishList/>,
      },
      {
        path:"/ordertracking",
        element: <OrderTracking/>,
      },
      {
        path:"/menu",
        element: <Menu/>,
      },
      {
        path:"/platterService",
        element: <PlatteringService/>
      },
      {
        path:"/aboutUs",
        element: <AboutUs/>
      },
      {
        path:"/contactUs",
        element: <Contact/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
