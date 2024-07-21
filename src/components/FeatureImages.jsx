import React, { useEffect } from "react";

const FeatureImages = ({ mappedFeatures, index, swapAnimation }) => {
  useEffect(() => {
    const currentImage = document.querySelector(`.feature-image-${index}`);
    if (currentImage) {
      currentImage.classList.add("scale-animation");
    }
  }, [index]);

  return (
    <div className="my-32 mt-16">
      {mappedFeatures.map((feature, i) => (
        <video
          key={i}
          src={feature.image}
          alt=""
          className={`${
            i === index ? "block feature-image-" + i : "hidden"
          } imganimation w-[600px] h-[400px]`}
        />
      ))}
    </div>
  );
};

export default FeatureImages;
