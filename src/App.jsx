import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserLogin from "./pages/user-login-page/UserLogin";
import Landingpage from "./pages/landing-page/Landingpage";
import ForgotPassword from "./pages/forgot-password-page/ForgotPassword";
import Sucessfulpassword from "./pages/sucessfullpassword/Sucessfulpassword";
import Decisionreset from "./pages/decisionreset-page/Decisionreset";
import Sucessfultransfer from "./pages/sucessfultransferpage/Sucessfultransfer";
import Failedtransfer from "./pages/failedtransfer/Failedtransfer";


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
  {
    path: "/sucessfullpassword",
    element: <Sucessfulpassword/>
  },
  {
    path: "/decisionreset",
    element: <Decisionreset/>
  },
  {
    path: "/sucessfultransfer",
    element: <Sucessfultransfer/>
  },
  {
    path: "/failedtransfer",
    element: <Failedtransfer/>
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
