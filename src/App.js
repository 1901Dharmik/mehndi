import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Bridal_Mehndi from "./pages/Bridal_Mehndi";
import My_Arts from "./pages/My_Arts";
import Indexm from "./pages/Indexm"; 

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
          <Route path="Bridal_Mehndi" element={<Bridal_Mehndi />} />
          <Route path="My_Arts" element={<My_Arts />} />
          <Route path="Indexm" element={<Indexm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
