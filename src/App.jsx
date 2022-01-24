import React from "react";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Cv from "./components/Cv";
import { Routes, Route } from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hello />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/cv" element={<Cv />}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
