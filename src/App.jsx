import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import GetStarted from "./components/GetStarted";
import CTA from "./components/CTA"
import BigCTA from "./components/BigCTA";
const App = () => {
  const [active, setActive] = useState("");
  return (
    <main className="bg-dark-bg">
      <Header active={active} />
      <HeroSection />
      <About />
      <Features setActive={setActive} />
      <HowItWorks/>
      <GetStarted/>
      <div className="relative">
      <CTA/>
      <BigCTA/>
      </div>
    </main>
  );
};

export default App;
