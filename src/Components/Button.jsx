import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <button className="font-[sans] text-sm px-10 py-4 bg-zinc-950 text-white rounded-full mt-20 mx-auto cursor-pointer flex items-center transition-all duration-300 gap-x-2 block hover:gap-x-6">
      <p>All Products</p>
      <FaArrowRight />
    </button>
  );
};

export default Button;
