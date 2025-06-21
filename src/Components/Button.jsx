import React from "react";

const Button = () => {
  return (
    <button className="font-[sans] text-sm px-13 py-3 bg-zinc-950 text-white rounded-full mt-20 mx-auto cursor-pointer flex justify-between">
      All Products
      <div className="img-div rotate-180 ml-3">
        <img className="h-5 bg-zinc-100" src="/arrow.png" alt="" />
      </div>
    </button>
  );
};

export default Button;
