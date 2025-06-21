import React from "react";

const CardsApplied = ({ title, btnText, imgURL, iconURL }) => {
  const mouseAnimation = () => {
    const cardBtn = document.querySelector(".card button");
    const img = document.querySelector(".card button img");
    const p = document.querySelector(".card button p");

    cardBtn.addEventListener("mouseenter", () => {
      img.style.scale = "27";
      img.style.translateX = "150px";
      p.color = "white";
      p.marginRight = "30px";
      // img.style.zIndex = "1px";
    });

    cardBtn.addEventListener("mouseleave", () => {
      img.style.scale = "1";
    });
  };

  return (
    <div className="card h-100 w-fit rounded-[40px] overflow-hidden">
      <div className="img w-80 h-60 rounded-[40px] bg-teal-600">
        <img
          className="w-full h-full object-cover object-center"
          src={imgURL}
          alt=""
        />
      </div>
      <p className="content py-5 px-4 text-zinc-400 w-65 h-25">{title}</p>
      <button
        onMouseEnter={mouseAnimation}
        className="flex items-center gap-x-1 rounded-full border-1 border-zinc-400 mx-auto w-65 px-5 py-4 cursor-pointer z-20 overflow-hidden"
      >
        <div className="img bg-red-500 w-5 h-5 rounded-full z-10">
          <img src={iconURL} alt="" className="transition-all duration-300" />
        </div>
        <p className="z-100">{btnText}</p>
      </button>
    </div>
  );
};

export default CardsApplied;
