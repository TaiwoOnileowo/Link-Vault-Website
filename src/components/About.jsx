import React, { useEffect, useRef, useState } from "react";
import { RiLinksFill } from "react-icons/ri";

const About = () => {
  const [visible, setIsVisible] = useState(false);
  const contentRef = useRef();
  const handleScroll = () => {
    if (contentRef.current) {
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
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
    <div className="flex flex-col items-center justify-center gap-8 py-16 pt-32 px-4 text-light-text">
      <h2 className="scroll-reveal-heading inline-flex items-center uppercase text-transparent font-bold text-muted-text gap-2 text-xs xs:text-lg ss:text-xl md:text-2xl">
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
        Introducing Link Vault
      </h2>
      <div
        className={` background-transition max-w-[600px] md:max-w-[700px]  text-muted-text text-opacity-50 text-center space-y-4 bg-gradient-to-r from-accent-bg to-dark-bg p-4 ss:p-8 rounded-lg shadow-lg`}
      >
        <p className="text-sm xs:text-base ss:text-lg md:text-2xl text-white text-scroll-reveal">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-turquoise font-bold pr-2">
            We know the struggle.
          </span>
          Managing countless links can be overwhelming and inefficient. Chrome's
          bookmarks and history don't work for you. You need a faster and more
          efficient way. Favoriting tabs makes your Chrome cluttered.
        </p>
        <p className="text-scroll-reveal text-base xs:text-lg ss:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue to-turquoise font-bold">
          That's where Link Vault comes in
        </p>
      </div>
    </div>
  );
};

export default About;
