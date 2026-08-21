import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import JobCategory from "./components/JobCategory/JobCategory";
import Footer from "./components/Footer/Footer";

import About from "./pages/About/About";

function Home() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <JobCategory />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;