import Home from "../pages/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Form from "../components/ui/Form";
import Products from "../components/ui/Products";
import NotFound from "../pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/form",
    element: <Form></Form>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
