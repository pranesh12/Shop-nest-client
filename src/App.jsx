import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/products/ProductDetail";
import Layout from "./Components/Layout/Layout";
import RegisterForm from "./Pages/RegisterForm/RegisterForm";
import LoginForm from "./Pages/LoginForm/LoginForm";
import Cart from "./Pages/Cart/Cart";
import PrivateRoute from "./routes/PrivateRoute";
import UserOrder from "./Pages/userOrder/UserOrder";
import AdminLayOut from "./Pages/Admin/AdminLayOut";
import Admin from "./Pages/Admin/Admin";
import AdminOrders from "./Pages/Admin/AdminOrders";
import AdminProduct from "./Pages/Admin/AdminProducts";
import AdminUsers from "./Pages/Admin/AdminUsers";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/auth/login",
          element: <LoginForm />,
        },
        {
          path: "/auth/register",
          element: <RegisterForm />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/userorder",
          element: <UserOrder />,
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          ),
        },
      ],
    },

    {
      path: "/admin",
      element: <AdminLayOut />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/products",
          element: <AdminProduct />,
        },
        {
          path: "/admin/orders",
          element: <AdminOrders />,
        },
        {
          path: "/admin/users",
          element: <AdminUsers />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
