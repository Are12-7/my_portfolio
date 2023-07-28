import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Home />
      <br></br>
      <br></br>
      <Nav />
      <br></br>
      <br></br>
      <About />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Skills />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Work />
      <br></br>
      <br></br>
      <Contact />
      <ToastContainer position="top-right" />
    </div>
  );
};

export default App;
