import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { VideoPage } from "./Pages/VideoRoom/VideoPage.jsx";
import { HomePage } from "./Pages/Home/HomePage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "room/:id",
    element: <VideoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);
