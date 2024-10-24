import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DashboardPage from "./pages/DashboardPage";
import About from "./pages/About";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFoundPage";
import ProgressiveBlog from "./pages/ProgressiveBlog";
import MobileBlog from "./pages/MobileBlog";
import ProtienBlog from "./pages/ProtienBlog";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/progressive-overload" element={<ProgressiveBlog />} />
        <Route path="/blog/mobile" element={<MobileBlog />} />
        <Route path="/blog/protein" element={<ProtienBlog />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404s */}
      </Routes>
    </Router>
  );
}

export default App;
