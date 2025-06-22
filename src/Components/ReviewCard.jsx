import React from "react";
import { FaInstagram } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div className="card shrink-0 bg-zinc-100 w-200 h-65 p-5 rounded-2xl flex  mx-auto">
      <div className="part1 w-[65%] text-lg leading-5 tracking-tight flex flex-col justify-between">
        <p className="text-zinc-800 font-[swit]">
          "The brain pulse feature supports mental clarity, focus and
          concentration. With
          <span className="text-zinc-400">
            &nbsp; the 10Hz puls-feature optimal brain waves are boosted. And
            all of that in just 10 minutes daily!"
          </span>
        </p>

        <div className="info w-60 h-13">
          <div className="flex gap-x-2 items-center w-30">
            <div className="font-[sans]">Sabine</div>
            <button className="font-[sans] text-sm px-2 py-1 border-1 flex items-center gap-x-2 rounded">
              <FaInstagram />
              <p>@yes.you.are_</p>
            </button>
          </div>
          <p className="text-zinc-400 text-sm font-[swit]">
            Wanted to improve her cognitive function
          </p>
        </div>
      </div>

      <div className="part2 bg-red-500 w-[35%] h-full rounded-2xl overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d58cc7ed73a6b4db3480_sabine_yesyouare.webp"
          className="w-full h-full object-center object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default ReviewCard;
