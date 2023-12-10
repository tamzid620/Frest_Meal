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
import AdminFoodItemEdit from "./Components/Pages/AdminPanel/Navigation/AdminFoodItemEdit";
import AdminFoodItemAdd from "./Components/Pages/AdminPanel/Navigation/AdminFoodItemAdd";
import Order from "./Components/Shared/Order/Order";
import AdminOrderList from "./Components/Pages/AdminPanel/Navigation/AdminOrderList";
import AdminOrderDelivery from "./Components/Pages/AdminPanel/Navigation/AdminOrderDelivery";
import AdminOrderDetails from "./Components/Pages/AdminPanel/Navigation/AdminOrderDetails";
import AdminOrderProcessing from "./Components/Pages/AdminPanel/Navigation/AdminOrderProcessing";
import Invoice from "./Invoice/Invoice";
import UserOrderDetails from "./Components/Pages/UserOrderDetails/UserOrderDetails";

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
        path: "/userOrderDetails/:orderId",
        element: <UserOrderDetails />,
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
      {
        path: "/order",
        element: <Order />,
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
        path: "/adminSubCategoryEdit/:subCategoryId",
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
      {
        path: "/adminFoodItemEdit/:foodItemId",
        element: <AdminFoodItemEdit/>,
      },
      {
        path: "/adminFoodItemAdd",
        element: <AdminFoodItemAdd />,
      },
      // Order section ----------------
      {
        path: "/adminOrderList",
        element: <AdminOrderList />,
      },
      {
        path: "/adminOrderDetails/:orderId",
        element: <AdminOrderDetails />,
      },
      {
        path: "/adminOrderProcessing/:orderId",
        element: <AdminOrderProcessing />,
      },
      {
        path: "/invoice/:orderId",
        element: <Invoice />,
      },
      {
        path: "/adminOrderDelivery",
        element: <AdminOrderDelivery />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
