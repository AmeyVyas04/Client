import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Aboutus from "./Aboutus/Aboutus";
import Faq from "./FAQ/Faq";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </>
  );
}
