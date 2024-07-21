import React, { useEffect, useRef, useState } from "react";
import { getstarted } from "../data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Heading from "./Heading";
const GetStarted = () => {
  const [visible, setIsVisible] = useState(false);

  const contentRef = useRef();

  const handleScroll = () => {
    if (contentRef.current) {
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top + 200 < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
    <div className="white-section flex flex-col gap-12 bg-gradient-to-b from-gray-100 to-white items-center justify-center p-24 pt-12 h-[100vh]">
      <Heading text="Get Started" color="black" />
      <div
        className="flex items-center justify-center gap-8 h-full w-full"
        ref={contentRef}
      >
        {getstarted.map((step, index) => (
          <div className="relative rounded-[50px] w-[28%] h-[80%] ">
            <div
              key={index}
              className={` ${
                visible ? "get-started-card" : null
              }  bg-[#FFFAFA] flex flex-col translate-x-[-50%] absolute z-[1] transition-all duration-300  opacity-0 box-shadow-spread shadow-dark-bg gap-4 py-8  p-6 w-full h-full items-center justify-center rounded-[50px]`}
            >
              <span className="text-6xl text-primary ">{step.icon}</span>
              <div className="text-center">
                <h3 className="font-bold text-2xl text-primary-dark ">
                  {step.heading}
                </h3>
                <p className="text-accent-bg py-2">{step.text}</p>
              </div>
            </div>
            <div
              className={`absolute overflow-hidden z-[0] -inset-2 rounded-[50px] `}
            >
              <div
                className={`absolute inset-0 rounded-[50px]  h-[50%]  bottom-0 border-4 border-transparent ${
                  index === 1 ? "border-up" : "border-down"
                } ${index === 2 ? "border-down1" : null}`}
              ></div>
              <div
                className={`absolute inset-0 rounded-[50px] h-[50%]  border-4 border-transparent border-b-blue-500 border-l-blue-500 border-dotted ${
                  index === 1 ? "border-down-dotted" : "border-up-dotted"
                } ${index === 2 ? "border-up-dotted1" : null}`}
              ></div>
            </div>
            <div
              className={`w-20 h-20 bg-white rounded-full hover:scale-[1.02] transition-all duration-300 ${
                visible ? "animate-fade-in" : null
              } absolute -right-14 z-[10]  top-[40%] flex items-center  justify-center box-shadow-spread1 ${
                index === 2 ? "hidden " : "block"
              }`}
            >
              <MdKeyboardDoubleArrowRight size={45} className="text-primary pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
