import React from "react";
import CartSVG from "../Components/CartSVG";

const MiniKini = () => {
  const scaleUp = () => {
    const img = document.querySelector(".image-kini img");
    img.style.transform = "scale(1.1)";
  };

  const scaleDown = () => {
    const img = document.querySelector(".image-kini img");
    img.style.transform = "scale(1)";
  };

  return (
    <>
      <div className="w-full h-140 rounded-[40px] bg-center bg-[url(https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6841b5ed4392ea9a2feb9b3f_banner.jpg)]  bg-cover relative font-[sans] flex items-center justify-center overflow-hidden">
        <div className="overlay px-6 py-10 text-white flex text-center flex-col items-center justify-between w-fit h-140 absolute z-100">
          <div className="content font-[sans] text-3xl leading-7">
            <h3 className="text-[#F8AC93]">
              <span className="text-zinc-100">Meet Kini,</span>
              the first wearable using
            </h3>
            <h3 className="text-[#F8AC93]">non-invasive light technology</h3>
            <h3 className="text-[#F8AC93]">
              to support and improve female longetivity.
            </h3>
          </div>
          <div className="buy-kini backdrop-blur-[50px] backdrop-saturate-200 bg-[#a8818400] flex items-center justify-between px-3 py-3 rounded-full w-150">
            <p className="text-sm">Get the new Kini now</p>
            <div className="price-btn flex items-center gap-x-2">
              <p className="text-lg">$149</p>
              <button
                onMouseEnter={scaleUp}
                onMouseLeave={scaleDown}
                className="bg-zinc-100 text-black px-6 py-3 rounded-full cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="image-kini absolute -bottom-20">
          <img
          className="transition-all duration-300"
            src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daf8686019b7dff3699ab_kini.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MiniKini;
