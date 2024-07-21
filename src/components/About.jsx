import React, { useEffect, useRef, useState } from "react";
import { RiLinksFill } from "react-icons/ri";
import Heading from "./Heading";

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
    <div className="flex flex-col items-center justify-center gap-8 py-16 pt-48 px-4 text-light-text">
     <Heading text="Introducing Link Vault"/>
      <div
        className={` background-transition max-w-[600px] md:max-w-[700px]  text-muted-text text-opacity-50 text-center space-y-4 bg-gradient-to-r from-accent-bg to-dark-bg p-4 ss:p-8 rounded-lg shadow-lg`}
      >
        <p className="text-sm xs:text-base ss:text-lg md:text-xl text-white text-fade-in opacity-0">
          <span className="text-white text-[20px] text-transparent font-bold pr-2">
            We know the struggle.
          </span>
          Managing countless links can be overwhelming and inefficient. Chrome's
          bookmarks and history don't work for you. You need a faster and more
          efficient way. Favoriting tabs makes your Chrome cluttered.
        </p>
        <p className="text-scroll-reveal md:text-[20px] text-base xs:text-lg  text-fade-in opacity-0 ss:text-xl md:text-2xl text-white bg-gradiet-to-r from-blue to-turquoise font-bold">
          That's where Link Vault comes in
        </p>
      </div>
    </div>
  );
};

export default About;
