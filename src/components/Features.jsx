import React, { useEffect, useRef, useState } from "react";
import { RiLinksFill } from "react-icons/ri";
import { features } from "../data";

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
      <h2 className={` pt-6 inline-flex items-center scroll-reveal-heading uppercase text-transparent font-bold gap-2 text-base xs:text-lg ss:text-xl md:text-2xl`}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          className="svg-animation"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="grad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientTransform="rotate(135)"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#2a4ff6", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#5ce1e6", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"
          ></path>
        </svg>
        Core Features
      </h2>
      <div className="grid gap-4 xs:gap-6 md:gap-12 col-span-1 grid-cols-2 px-4 items-center justify-center ts:grid-cols-3 ts:px-16 pt-16 ss:pt-24" ref={contentRef}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col ss:card-transition items-center justify-center bg-gradient-to-r from-accent-bg to-dark-bg p-6 rounded-lg shadow-lg ${
              visible ? "start" : "opacity-0"
            } ${index === 2 ? "col-span-2 col-start-1 mx-auto ts:col-span-1" : ""}`}
          >
            <div
              className={`absolute -top-[20px] xs:-top-8 bg-secondary-gradient rounded-[15px] ${
                index !== 0  ? "px-4 py-2 " : "px-2"
              } ${index ===1 && " py-[4px]" } ${visible ? "icon-animation" : null} shadow-lg border-blue border`}
            >
              {feature.icon}
            </div>
            <h3 className={`text-xs xs:text-base ss:text-lg ts:text-xl md:text-2xl text-center font-bold text-light-text ss:mt-4 md:mt-10`}>
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
