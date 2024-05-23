import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <main className="bg-dark-bg">
      <Header active={active} />
      <HeroSection />
      <About />
      <Features setActive={setActive} />
    </main>
  );
};

export default App;
