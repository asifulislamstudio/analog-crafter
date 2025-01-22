import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../assets/Layout/Root";
import Home from "../assets/Page/Home/Home";
import AboutUs from "../assets/Page/About/AboutUs";
import AllProduct from "../assets/Page/AllProduct/AllProduct";
import AddProducts from "../Components/AddProducts/AddProducts";
import ContactUs from "../assets/Page/Contact/ContactUs";
import Login from "../assets/Page/Login/Login";
import Register from "../assets/Page/Register/Register";
import SingleProduct from "../assets/Page/SingleProduct/SingleProduct";
import UpdateProduct from "../Components/Update/UpdateProduct";
import PrivateRoute from "./PrivateRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:8000/products')
        },
        {
            path: "/aboutus",
            element: <AboutUs></AboutUs>
        },
        {
            path: "/allproducts",
            element: <AllProduct></AllProduct>,
            loader: () => fetch('http://localhost:8000/products')
        },
        {
            path: "/product/:id",
            element: <SingleProduct></SingleProduct>,
            loader: ({params}) => fetch(`http://localhost:8000/products/${params.id}`)
        },
        {
            path: "/addproducts",
            element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            
        },
        {
            path: "/contactus",
            element: <ContactUs></ContactUs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/update/:id',
            element: <UpdateProduct></UpdateProduct>,
            loader: ({params}) => fetch(`http://localhost:8000/products/${params.id}`)
        }
      ]
    },
 

  ]);


  export default router