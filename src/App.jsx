import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landingpage from "./pages/landing-page/Landingpage";
import UserSignup from "./pages/user-signup-page/UserSignup";
import UserLogin from "./pages/user-login-page/UserLogin";
import Button from "./components/button/Button";
import Resetpasswordform from "./pages/resetform/Resetpasswordform";
import Batchupload from "./pages/batchupload/Batchupload";
import Userdashboard from "./pages/user-dashboard/Userdashboard";
import ForgotPassword from "./pages/forgot-password-page/ForgotPassword";

//creating my router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/user-signup",
    element: <UserSignup />,
  },
  {
    path: "/user-login",
    element: <UserLogin />,
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
    path: "/forgot-password",
    element: <ForgotPassword />,
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
