import Homepage from "./pages/Homepage";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import WorkoutHistory from "./dash-views/WorkoutHistory";
import About from "./pages/About";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import ProgressiveBlog from "./pages/ProgressiveBlog";
import MobileBlog from "./pages/MobileBlog";
import ProtienBlog from "./pages/ProtienBlog";
import SignIn from "./pages/SignIn";



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
  },
  {
    path: '/features',
    element: <Features />
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/blog/progressive-overload',
    element: <ProgressiveBlog />
  },
  {
    path: '/blog/mobile',
    element: <MobileBlog />
  },
  {
    path: '/blog/protein',
    element: <ProtienBlog />
  }
]);


export default function App() {
  return (
   <RouterProvider router ={router} />
  )
}
