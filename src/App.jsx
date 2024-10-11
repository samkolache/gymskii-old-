import Homepage from "./pages/Homepage";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import WorkoutHistory from "./dash-views/WorkoutHistory";
import About from "./home-views/About";
import Features from "./home-views/Features";
import Blog from "./home-views/Blog";
import SignIn from "./home-views/SignIn";
import SignUp from "./home-views/SignUp";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "features",
        element: <Features />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "sign-in",
        element: <SignIn />
      },
      {
        path: "sign-up",
        element: <SignUp />
      }

    ]
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
  }
]);


export default function App() {
  return (
   <RouterProvider router ={router} />
  )
}
