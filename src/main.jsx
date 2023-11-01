import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import HomePage from "./routes/HomePage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import AcademicsPage from "./routes/AcademicsPage.jsx";
import FinancesPage from "./routes/FinancesPage.jsx";
import ServicesPage from "./routes/ServicesPage.jsx";
import SupportPage from "./routes/SupportPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/RegisterPage",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/AcademicsPage",
    element: <AcademicsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/FinancesPage",
    element: <FinancesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ServicesPage",
    element: <ServicesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SupportPage",
    element: <SupportPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
