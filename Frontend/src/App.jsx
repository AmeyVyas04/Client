import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Newsletter from "./Newsletter/Newsletter";
import Disclamer from "./Disclemer/Disclamer";

// Custom lazy loader with preload support
const preloadableLazy = (importFunc) => {
  const Component = lazy(importFunc);
  Component.preload = importFunc;
  return Component;
};

// Lazy-loaded pages
const Courses = preloadableLazy(() => import("./Courses/Courses"));
const Aboutus = preloadableLazy(() => import("./Aboutus/Aboutus"));
const Faq = preloadableLazy(() => import("./FAQ/Faq"));
const C1 = preloadableLazy(() => import("./Courses/C1"));
const C2 = preloadableLazy(() => import("./Courses/C2"));
const C3 = preloadableLazy(() => import("./Courses/C3")); // Will handle dynamic route
const C4 = preloadableLazy(() => import("./Courses/C4"));
const C5 = preloadableLazy(() => import("./Courses/C5"));

export default function App() {
  useEffect(() => {
    Courses.preload();
    Aboutus.preload();
    Faq.preload();
    C1.preload();
    C2.preload();
    C3.preload();
    C4.preload();
    C5.preload();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Faq" element={<Faq />} />

      {/* These are still statically routed */}
      <Route path="/Courses/Order Flow Intraday Course Hindi" element={<C1 />} />
      <Route path="/Courses/Order Flow Intraday Course English" element={<C2 />} />
      <Route path="/Courses/Market Profile Trading Course (Hindi)" element={<C3 />} />
      <Route path="/Courses/Market Profile Trading Course English" element={<C4 />} />
      <Route path="/Courses/Option Selling Mastery Course Hindi" element={<C5 />} />

      {/* ✅ This is your new dynamic route */}
      <Route path="/Courses/:courseSlug" element={<C5 />} />


      <Route path="/Newsletter" element={<Newsletter />} />
      <Route path="/Disclaimer" element={<Disclamer />} />
    </Routes>
  );
}
