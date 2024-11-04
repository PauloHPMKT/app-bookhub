import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { PageDefault } from "../Layout/PageDefault";
import { Dashboard } from "../pages/bookhub-pages/Dashboard";
import { Employees } from "../pages/bookhub-pages/Employees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/app",
    element: <PageDefault />,
    children: [
      {
        path: "/app",
        element: <Navigate to="/app/dashboard" />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "employees",
        element: <Employees />
      }
    ]
  }
])