import React from "react";
import CartSVG from "../Components/CartSVG";
import HomeLinks from "./HomeLinks";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-10 font-[sans]">
      <h4 className="text-xl">luminous labs</h4>
      <HomeLinks />
      <div className="others flex items-center ">
        <select name="" id="">
          <option value="">EN</option>
          <option value="">DE</option>
        </select>
        <div className="cart flex items-center gap-x-2 ml-4">
          <p>Cart</p>
          <div className="cart w-7 h-7 p-1 border-1 cursor-pointer border-zinc-300 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black">
            <CartSVG />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
