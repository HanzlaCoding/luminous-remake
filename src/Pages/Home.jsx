import React from "react";
import CartSVG from "../Components/CartSVG";

const Home = () => {
  return (
    <>
      <div className="w-full h-130 rounded-[40px] bg-center bg-[url(https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daa20f8d824dc60d87727_6ca5979b6f014ba47a22c3f88928aabc_bg-1.webp)]  bg-cover">
        <div className="overlay px-6 py-5 w-full h-full text-white">
          <nav className="flex justify-between items-center w-full h-10 font-[sans]">
            <h4 className="text-xl">luminous labs</h4>
            <div className="links flex items-center gap-x-3">
              {["Technology", "Company", "Commercial", "Blog", "Shop"].map(
                (item, index) =>
                  index === 4 ? (
                    <p
                      className="cursor-pointer px-4 py-2 border-1 border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
                      key={index}
                    >
                      {item}
                    </p>
                  ) : (
                    <p
                      className="cursor-pointer px-4 py-2 border-1 border-transparent rounded-full transition-all duration-300
                      hover:border-white"
                      key={index}
                    >
                      {item}
                    </p>
                  )
              )}
            </div>
            <div className="others flex items-center ">
              <select name="" id="">
                <option value="">EN</option>
                <option value="">DE</option>
              </select>
              <div className="cart flex items-center gap-x-2 ml-4">
                <p>Cart</p>
                <div className="cart w-10 h-10 p-1 border-1 cursor-pointer border-zinc-300 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black">
                  <CartSVG />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Home;
