import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import Home from "./Home/Home"; // Home is eagerly loaded

// Custom lazy loader with preload support
const preloadableLazy = (importFunc) => {
  const Component = lazy(importFunc);
  Component.preload = importFunc;
  return Component;
};

// Lazy-load other pages
const Courses = preloadableLazy(() => import("./Courses/Courses"));
const Aboutus = preloadableLazy(() => import("./Aboutus/Aboutus"));
const Faq = preloadableLazy(() => import("./FAQ/Faq"));
const C1 = preloadableLazy(() => import("./Courses/C1"));
const C2 = preloadableLazy(() => import("./Courses/C2"));
const C3 = preloadableLazy(() => import("./Courses/C3"));
=======
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Aboutus from "./Aboutus/Aboutus";
import Faq from "./FAQ/Faq";
import CourseDescription from "./Courses/CourseDescription";
>>>>>>> Stashed changes

export default function App() {
  useEffect(() => {
    // Preload all lazy-loaded components in the background
    Courses.preload();
    Aboutus.preload();
    Faq.preload();
    C1.preload();
    C2.preload();
    C3.preload();
  }, []);

  return (
<<<<<<< Updated upstream
    <Routes>
      {/* Home is rendered instantly */}
      <Route path="/" element={<Home />} />

      {/* Other pages are preloaded in the background */}
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/Courses/Order Flow Intraday Course Hindi" element={<C1 />} />
      <Route path="/Courses/Order Flow Intraday Course English" element={<C2 />} />
      <Route path="/Courses/Market Profile Trading Course" element={<C3 />} />
    </Routes>
=======
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/course/CourseDescription/:id" element={<CourseDescription />} />
       
      </Routes>
    </>
>>>>>>> Stashed changes
  );
}
