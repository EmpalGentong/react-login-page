import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AllData from "./pages/AllData.jsx";
import NavbarWrapper from "./components/navbarWrapper";
import ErrorPages from "./pages/ErrorPages.jsx";
import GetData from "./pages/GetData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    errorElement: <ErrorPages />,

    children: [
      {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPages />,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <ErrorPages />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPages />,
      },
      {
        path: "getdata",
        element: <AllData />,
        errorElement: <ErrorPages />,
      },
      {
        path: "getdata/:id",
        element: <GetData />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
