import React, { useState ,useRef ,useEffect} from "react";
import { ReactTyped } from "react-typed";
import icon from "../assets/icon.png";
import { GiShipWheel } from "react-icons/gi";
// import CanvasModel from "./Animation";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef();
  const handleScroll = () => {
    if (contentRef.current) {
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top + 300 < windowHeight && top+ 750 > windowHeight) {
        setIsOpen(true);
      } else {
        setIsOpen(false)
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
    <div className="pt-48 text-light-text md:min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-base xs:text-xl ss:text-2xl ts:text-5xl font-bold mb-2 ts:mb-4">
          <ReactTyped
            className="md:text-5xl"
            typeSpeed={100}
            backSpeed={100}
            loop
            strings={["Save", "Organize", "Access"]}
          />
          Your Links with Ease
        </h1>
        <p className="text-sm xs:text-base ss:text-lg ts:text-xl mb-8">
          Link Vault - Your Ultimate Link Management Tool
        </p>
        <button
          className="text-base xs:text-xl hover:bg-gradient-to-r hover:bg-opacity-10 hover:from-turquoise hover:to-blue bg-gradient-to-r from-blue to-turquoise text-white py-2 px-4 rounded-lg transition-all ease-in-out duration-300"
         
        >
          Get It Now
        </button>
      </div>
      <div className="mt-36">
        {/* <CanvasModel/> */}
  {/* <div
    className={`vault relative w-[250px] h-[250px] bg-primary-gradient rounded-[50%] flex items-center justify-center ${
      isOpen ? "open" : ""
    }`}
    ref={contentRef}
  >
    <div className="door text-white w-[230px] h-[230px] rounded-[50%] flex items-center justify-center text-[2rem] bg-secondary-gradient">
      <GiShipWheel size={50} className="rotate" />
    </div>
    <div className="w-full h-full flex items-center flex-col justify-center absolute">
      <div className={`${isOpen ? "flex" : "hidden"}`}>
        <img src={icon} alt="" className="bounce w-12 h-12" />
        <img src={icon} alt="" className="bounce w-12 h-12" />
        <img src={icon} alt="" className="bounce w-12 h-12" />
      </div>
      <div className={`${isOpen ? "flex" : "hidden"}`}>
        <img src={icon} alt="" className="bounce w-12 h-12" />
        <img src={icon} alt="" className="bounce w-12 h-12" />
        <img src={icon} alt="" className="bounce w-12 h-12" />
      </div>
      <div className={`${isOpen ? "flex" : "hidden"}`}>
        <img src={icon} alt="" className="bounce w-12 h-12" />
        <img src={icon} alt="" className="bounce w-12 h-12" />
        <img src={icon} alt="" className="bounce w-12 h-12" />
      </div>
    </div>
  </div> */}
  {/* <CanvasModel/> */}
</div>
    </div>
  );
};

export default HeroSection;
