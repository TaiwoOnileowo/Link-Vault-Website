import React from "react";
import Heading from "./Heading";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { features } from "../data";
const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading text="How It Works" />
     <div>
     <div className="mt-8">
        <div  className="flex items-center gap-32 justify-center">
      {features.map((feature, index) => (
          <div  key={index} className={`${index===1 ? "mt-32 " : "opacity-50 animate-pulse"} cursor-pointer flex items-center justify-center p-6`}>
            <div className="p-4 bg-gradient-to-r from-accent-bg to-dark-bg rounded-lg shadow-lg">
              {feature.icon2}
            </div>
            <div className="ml-4">
              <h3 className="text-base font-bold text-light-text">
                {feature.title}
              </h3>
              <p className="text-light-text text-sm">{feature.description2}</p>
            </div>
          </div>
        ))}
        </div>
      
     </div>
     </div>
    </div>
  );
};

export default HowItWorks;
