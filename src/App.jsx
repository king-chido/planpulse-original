import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserLogin from "./pages/user-login-page/UserLogin";
import Landingpage from "./pages/landing-page/Landingpage";
import ForgotPassword from "./pages/forgot-password-page/ForgotPassword";
import Batchupload from "./pages/batchupload/Batchupload";
import Userdashboard from "./pages/user-dashboard/Userdashboard";
import Button from "./components/button/Button";
import Resetpasswordform from "./pages/resetform/Resetpasswordform";
import UserSignup from "./pages/user-signup-page/UserSignup";
import Category from "./components/category/Category";

//creating my router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
  {
    path: "/user-signup",
    element: <UserSignup />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/btn",
    element: <Button />,
  },
  {
    path: "/resetpassword-form",
    element: <Resetpasswordform />,
  },
  {
    path: "/batch-upload",
    element: <Batchupload />,
  },
  {
    path: "/user-dashboard",
    element: <Userdashboard />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
