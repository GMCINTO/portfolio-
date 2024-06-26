import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";



export default function App() {
  return (
    <main>
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Education />
    <Contact />
    </main>
  );
}
