import React from "react";
import CartSVG from "../Components/CartSVG";

const MiniKini = () => {
  return (
    <>
      <div className="w-full h-130 rounded-[40px] bg-center bg-[url(https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6841b5ed4392ea9a2feb9b3f_banner.jpg)]  bg-cover">
        <div className="overlay px-6 py-10 w-full h-full text-white flex items-center justify-center">
          
            <div className="content font-[sans] bg-red-500 w-fit h-110">
            <h3>
              <span>Meet Kini,</span>
              the first wearable using
            </h3>
            <h3>
              non-invasive light technology
            </h3>
            <h3>
              to support and improve female longetivity
            </h3>
            </div>

        </div>
      </div>
    </>
  );
};

export default MiniKini;
