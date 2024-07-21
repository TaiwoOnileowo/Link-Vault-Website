import React, { useEffect, useRef, useState } from "react";
import { RiLinksFill } from "react-icons/ri";
import { features } from "../data";
import Heading from "./Heading";
import MoreFeatures from "./MoreFeatures";

const Features = ({ setActive }) => {
  const [visible, setIsVisible] = useState(false);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
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
      className="relative white-section mt-24 p-12 pt-12 w-full flex flex-col bg-gradient-to-b from-gray-100 to-white text-black items-center justify-center"
    >
      {/* Curved background effect */}
      {/* <div className="absolute top-0 left-0 w-full h-24 bg-white rounded-full overflow-hidden shadow-lg pointer-events-none transform translate-y-1/2 -translate-x-1/2"></div> */}

      <Heading text="Core Features" color="dark" />

      <div
        className="grid gap-4 xs:gap-6 md:gap-6 w-full col-span-1 grid-cols-2 px-4 items-center justify-center ts:grid-cols-3 ts:px-16 pt-16 ss:pt-24 relative z-10"
        ref={contentRef}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col ss:card-transition items-center justify-center rounded-3xl bg-primary border-white border-[4px] hover:border-slate-200 box-shadow p-6  cursor-pointer hover:scale-[1.05] h-[250px] w-[350px] transition-all ease duration-300 ${
              visible ? "popup-card" : "opacity-0"
            } ${
              index === 2 ? "col-span-2 col-start-1 mx-auto ts:col-span-1" : ""
            }`}
          >
            <span
              className={`absolute -top-[20px] xs:-top-8 bg-white rounded-[15px] text-[60px] p-4 py-2 ${
                visible ? "icon-animation" : null
              } shadow-lg  border`}
            >
              {feature.icon1}
            </span>
            <h3
              className={`text-xs xs:text-base ss:text-lg ts:text-xl md:text-2xl text-center font-bold text-white ss:mt-4 md:mt-10`}
            >
              {feature.title}
            </h3>
            <p className="hidden ts:block text-base text-white text-center mt-2">
              {feature.description1}
            </p>
          </div>
        ))}
      </div>

      {showMoreFeatures ? (
        <MoreFeatures setShowMoreFeatures={setShowMoreFeatures} />
      ) : (
        <a href="#more-features">
          <button
            className="text-black mt-16 border-primary button-hover px-12 py-4 w-[200px] border"
            onClick={() => setShowMoreFeatures(true)}
          >
            Load More
          </button>
        </a>
      )}
    </div>
  );
};

export default Features;
