import React from "react";

const CTA = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center text-white">
      <div className="flex gap-48 items-center w-[75%] justify-center p-12 px-4 rounded-[20px] bg-secondary-gradient shadow-lg">
        <div className="">
          <h2 className="text-4xl font-bold">Download Link Vault Now</h2>
          <p className={`max-w-[470px] mt-5 text-accent-bg text-lg`}>
            Get the perfect Vault for your links now and organize your bookmarks
            in one place
          </p>
        </div>

        <button className="text-lg hover:from-turquoise hover:to-blue bg-gradient-to-r from-blue to-turquoise p-4 rounded-[20px] ">
          Add to Chrome
        </button>
      </div>
    </section>
  );
};

export default CTA;
