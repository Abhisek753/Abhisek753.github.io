import { useState } from "react";
import Welcome from "./sections/Welcome";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import ScrollTools from "./components/ScrollTools";
import ChatBot from "./components/ChatBot";
import MouseParticles from "./components/MouseParticles";
import Skills from "./sections/Skills";
import Activity from "./sections/Activity";
import Contact from "./sections/Contact";
import Game from "./sections/Game";
import Footer from "./sections/Footer";

// The welcome screen shows once per browser tab session.
function hasEntered() {
  try {
    return sessionStorage.getItem("entered") === "yes";
  } catch {
    return false;
  }
}

// To add, remove or reorder a section, just edit this list.
function App() {
  const [entered, setEntered] = useState(hasEntered);

  const enter = () => {
    try {
      sessionStorage.setItem("entered", "yes");
    } catch {}
    setEntered(true);
  };

  return (
    <div className="relative overflow-hidden">
      {!entered && <Welcome onEnter={enter} />}

      {/* soft glowing background blobs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 animate-float rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[40rem] h-96 w-96 animate-float rounded-full bg-accent/10 blur-3xl" />

      <MouseParticles />
      <ScrollTools />
      <ChatBot />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Activity />
        <Contact />
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
