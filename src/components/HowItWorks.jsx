import React, { useState } from "react";
import Heading from "./Heading";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { features } from "../data";
import FeatureImages from "./FeatureImages";

const HowItWorks = () => {
  const [index, setIndex] = useState(1);
  const [mappedFeatures, setMappedFeatures] = useState(features);
  const [swapAnimation, setSwapAnimation] = useState({
    swap_left: false,
    swap_right: false,
    swap_middle_left: false,
    swap_middle_right: false,
  });

  const handleClick = (newIndex) => {
    if (newIndex === index) return;
    console.log("index", index);
    let updatedFeatures = [...mappedFeatures];
    if (newIndex === 0 && index === 1) {
      // Move left to middle, middle to right
      updatedFeatures = [mappedFeatures[1], mappedFeatures[0], mappedFeatures[2]];
      console.log("0, 1");
      setSwapAnimation({
        swap_left: false,
        swap_right: true,
        swap_middle_left: true,
        swap_middle_right: false,
      });
    } else if (newIndex === 2 && index === 1) {
      // Move right to middle, middle to left
      updatedFeatures = [mappedFeatures[0], mappedFeatures[2], mappedFeatures[1]];
      console.log("2, 1");
      setSwapAnimation({
        swap_left: true,
        swap_right: false,
        swap_middle_left: false,
        swap_middle_right: true,
      });
    } else if (newIndex === 0 && index === 2) {
      // Move left to middle, middle to right (from right)
      console.log("0, 2");
      updatedFeatures = [mappedFeatures[2], mappedFeatures[0], mappedFeatures[1]];
      setSwapAnimation({
        swap_left: false,
        swap_right: true,
        swap_middle_left: true,
        swap_middle_right: false,
      });
    } else if (newIndex === 2 && index === 0) {
      // Move right to middle, middle to left (from left)
      console.log("2, 0");
      updatedFeatures = [mappedFeatures[1], mappedFeatures[2], mappedFeatures[0]];
      setSwapAnimation({
        swap_left: true,
        swap_right: false,
        swap_middle_left: false,
        swap_middle_right: true,
      });
    }

    setMappedFeatures(updatedFeatures);
    setIndex(newIndex);

    setTimeout(() => {
      setSwapAnimation({
        swap_left: false,
        swap_right: false,
        swap_middle_left: false,
        swap_middle_right: false,
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center my-24 justify-center">
      <Heading text="How It Works" />

      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center gap-24 justify-center">
          {mappedFeatures.map((feature, i) => (
            <div
              key={i}
              className={`${
                i === 1 ? "mt-32" : "opacity-50"
              } cursor-pointer flex items-center left-6 justify-center p-6 ${
                swapAnimation.swap_left && i === 2 && "swap-left"
              } ${swapAnimation.swap_right && i === 0 && "swap-right"} ${
                swapAnimation.swap_middle_left && i === 1 && "swap-middle-left"
              } ${
                swapAnimation.swap_middle_right && i === 1 && "swap-middle-right"
              }`}
              onClick={() => {
                handleClick(i);
              }}
            >
              <div className="p-4 bg-gradient-to-r from-accent-bg to-dark-bg rounded-lg shadow-lg">
                {feature.icon2}
              </div>
              <div className="ml-4">
                <h3 className="text-base font-bold text-light-text">
                  {feature.title}
                </h3>
                <p className="text-light-text text-sm">
                  {feature.description2}
                </p>
              </div>
            </div>
          ))}
        </div>
        <FeatureImages mappedFeatures={mappedFeatures} index={index} swapAnimation={swapAnimation}/>
      </div>
    </div>
  );
};

export default HowItWorks;
