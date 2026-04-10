import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>

    <Navbar />   

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  </BrowserRouter>
);