import React from "react";

const CardsApplied = ({ title, btnText, imgURL }) => {
  

  return (
      <div className="card h-100 w-fit rounded-[40px] overflow-hidden">
        <div className="img w-80 h-60 rounded-[40px] bg-teal-600">
          <img src="" alt="" />
        </div>
        <p className="content py-5 px-4 text-zinc-400 w-65 h-25">{title}</p>
        <button className="flex items-center gap-x-1 rounded-full border-1 border-zinc-500 mx-auto w-65 px-5 py-4">
          <div className="img bg-red-500 w-5 h-5 rounded-full">
            <img src={imgURL} alt="" />
          </div>
          {btnText}
        </button>
      </div>
  );
};

export default CardsApplied;
