import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import "./index.css";
import Homepage from "./FirstPage/Homepage";
import Navbar from "./FirstPage/FirstPageComponenet/Navbar";
import { StrictMode } from "react";
import Mainpage from "./Layout/Mainpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path:"/navbar",
        element:<Navbar/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>
);