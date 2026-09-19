import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import TopFundraisers from "./components/TopFundraisers/TopFundraisers";
import Campaigns from "./pages/Campaigns/Campaigns";
import Categories from "./pages/Categories/Categories";
import About from "./pages/About/About";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Contact from "./pages/Contact/Contact";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopFundraisers/>
    </>
  );
}

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
