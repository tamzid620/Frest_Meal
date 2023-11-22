import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Pages/Home/Home";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Layout from "./Components/Layout/Layout";
import Menu from "./Components/Pages/Menu/Menu";
import OrderTracking from "./Components/Pages/OrderTracking/OrderTracking";
import PlatteringService from "./Components/Pages/PlatteringService/PlatteringService";
import AboutUs from "./Components/Pages/QuickLinks/AboutUs";
import Contact from "./Components/Pages/QuickLinks/Contact";
import Cart from "./Components/Pages/Cart/Cart";
import WishList from "./Components/Pages/Home/WishList/WishList";
import AdminPanel from "./Components/Pages/AdminPanel/AdminPanel";
import AdminLogin from "./Components/Pages/AdminPanel/AdminLogin";
import AdminCategoryAdd from "./Components/Pages/AdminPanel/Navigation/AdminCategoryAdd";
import AdminCategory from "./Components/Pages/AdminPanel/Navigation/AdminCategory";
import AdminSubCategory from "./Components/Pages/AdminPanel/Navigation/AdminSubCategory";
import AdminFoodItem from "./Components/Pages/AdminPanel/Navigation/AdminFoodItem";
import AdminCategoryEdit from "./Components/Pages/AdminPanel/Navigation/AdminCategoryEdit";
import AdminSubCategoryEdit from "./Components/Pages/AdminPanel/Navigation/AdminSubCategoryEdit";
import AdminSubCategoryAdd from "./Components/Pages/AdminPanel/Navigation/AdminSubCategoryAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/ordertracking",
        element: <OrderTracking />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/platterService",
        element: <PlatteringService />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      // Admin Login ------------------------------
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },
      // AdminPanel section ------------------------
      {
        path: "/dp",
        element: <AdminPanel />,
      },
      //category section  -------------------------
      {
        path: "/adminCategory",
        element: <AdminCategory />,
      },
      {
        path: "/adminCategoryEdit/:categoryId",
        element: <AdminCategoryEdit />,
      },
      {
        path: "/adminategoryAdd",
        element: <AdminCategoryAdd />,
      },
      //Sub category section  -------------------------
      {
        path: "/adminSubCategory",
        element: <AdminSubCategory />,
      },
      {
        path: "/adminSubCategoryEdit",
        element: <AdminSubCategoryEdit />,
      },
      {
        path: "/adminSubCategoryAdd",
        element: <AdminSubCategoryAdd />,
      },
      //Food Item section  -------------------------
      {
        path: "/adminFoodItem",
        element: <AdminFoodItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
