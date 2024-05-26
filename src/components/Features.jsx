import React, { useEffect, useRef, useState } from "react";
import { RiLinksFill } from "react-icons/ri";
import { features } from "../data";
import Heading from "./Heading";

const Features = ({ setActive }) => {
  const [visible, setIsVisible] = useState(false);
  const contentRef = useRef();
  const handleScroll = () => {
    if (contentRef.current) {
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top + 200 < windowHeight) {
        setIsVisible(true);
        setActive("features");
      } else {
        setIsVisible(false);
        setActive("");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="features"
      className="features-container relative overflow-hidden mt-24 pt-8 pb-32 w-full flex flex-col bg-secondary-gradient text-white items-center justify-center "
    >
      <div className="blur absolute z-[0] w-[40%] animate-pulse h-[40%] right-[32%] top-[40%] rounded-[50%] opacity-80 bg-primary-gradient" />
      <Heading text="Core Features"/>
      <div
        className="grid gap-4 xs:gap-6 md:gap-12 col-span-1 grid-cols-2 px-4 items-center justify-center ts:grid-cols-3 ts:px-16 pt-16 ss:pt-24"
        ref={contentRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col ss:card-transition items-center justify-center bg-gradient-to-r from-accent-bg to-dark-bg p-6 rounded-lg shadow-lg ${
              visible ? "start" : "opacity-0"
            } ${
              index === 2 ? "col-span-2 col-start-1 mx-auto ts:col-span-1" : ""
            }`}
          >
            <div
              className={`absolute -top-[20px] xs:-top-8 bg-secondary-gradient rounded-[15px] ${
                index !== 0 ? "px-4 py-2 " : "px-2"
              } ${index === 1 && " py-[4px]"} ${
                visible ? "icon-animation" : null
              } shadow-lg border-blue border`}
            >
              {feature.icon}
            </div>
            <h3
              className={`text-xs xs:text-base ss:text-lg ts:text-xl md:text-2xl text-center font-bold text-light-text ss:mt-4 md:mt-10`}
            >
              {feature.title}
            </h3>
            <p className="hidden ts:block text-base md:text-lg text-muted-text text-center mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
