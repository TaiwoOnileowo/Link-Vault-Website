import React from "react";
import { ReactTyped } from "react-typed";
import vault from "../assets/vault.png";
const HeroSection = () => {
  return (
    <div className="pt-40 text-light-text md:min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-base xs:text-xl ss:text-2xl ts:text-5xl font-bold mb-2 ts:mb-4">
          <ReactTyped
            className="md:text-5xl "
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
        <button className="text-base xs:text-xl hover:bg-gradient-to-r hover:bg-opacity-10 hover:from-turquoise hover:to-blue bg-gradient-to-r from-blue to-turquoise text-white py-2 px-4 rounded-lg transition-all ease-in-out duration-300">
          Get It Now
        </button>
      </div>
      <div className="mt-16">
        {/* Place your 3D vault animation here */}
        <img
          src={vault}
          alt="Vault Opening Animation"
          className="w-full max-w-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
