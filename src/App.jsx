import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Contact />
              <Footer />

              <button
                className="back-to-top"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                aria-label="Back to top"
              >
                ↑
              </button>
            </>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;