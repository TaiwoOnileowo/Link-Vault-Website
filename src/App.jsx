import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <main className="bg-dark-bg">
      <Header active={active} />
      <HeroSection />
      <About />
      <Features setActive={setActive} />
      <HowItWorks/>
    </main>
  );
};

export default App;
