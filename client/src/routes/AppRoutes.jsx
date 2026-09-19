import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import PagePlaceholder from "../pages/PagePlaceholder";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigns" element={<PagePlaceholder pageName="Campaigns" />} />
      <Route path="/about" element={<PagePlaceholder pageName="About" />} />
      <Route path="/contact" element={<PagePlaceholder pageName="Contact" />} />
      <Route path="/faq" element={<PagePlaceholder pageName="FAQ" />} />
      <Route path="/login" element={<PagePlaceholder pageName="Login" />} />
      <Route path="/register" element={<PagePlaceholder pageName="Register" />} />
      <Route path="/create-campaign" element={<PagePlaceholder pageName="Create Campaign" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

