import Homepage from "./pages/Homepage";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import WorkoutHistory from "./dash-views/WorkoutHistory";
import About from "./pages/About";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        path: "workout-history",
        element: <WorkoutHistory />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
]);


export default function App() {
  return (
   <RouterProvider router ={router} />
  )
}
