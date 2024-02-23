import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserLogin from "./pages/user-login-page/UserLogin";
import Landingpage from "./pages/landing-page/Landingpage";
import ForgotPassword from "./pages/forgot-password-page/ForgotPassword";

//creating my router
const router = createBrowserRouter([


  {
    path: "/user-login",
    element: <UserLogin />,
  },
 
  {
    path: "/",
    element: <Landingpage />,
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
