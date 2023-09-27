import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Donation from "./components/Donation/Donation.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Home from "./components/Home/Home.jsx";
import DonationDetails from "./components/DonationDetails/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("data.json"),
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "/donation",
        loader: () => fetch("data.json"),
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        loader: () => fetch("data.json"),
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
