import "./App.css";
import Header from "./components/header";
import { BackgroundColorProvider } from "./context/context";
import Skills from "./components/skills";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <BackgroundColorProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </BackgroundColorProvider>
  );
}

export default App;
