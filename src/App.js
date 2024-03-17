import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index exact element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contect" element={<Contect />} />
          <Route path="navbar" element={<Navbar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
