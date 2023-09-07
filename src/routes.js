import Homepage from "./pages/Homepage.jsx";

//
import { createBrowserRouter } from "react-router-dom";

const router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);
};

export default router;
