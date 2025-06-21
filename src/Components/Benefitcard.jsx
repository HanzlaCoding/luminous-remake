import React from "react";

const Benefitcard = () => {
  return (
    <div className="card bg-[#F3ECE2] h-95 w-230 rounded-[40px] overflow-hidden text-zinc-800 flex">
      <div className="img-div w-120 h-95 rounded-[40px] bg-teal-600">
        <img
          src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/674033244546d6ee0abb7478_Frame%202087331480-2.webp"
          alt="Benefit 1"
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>

      <div className="part2 flex flex-col justify-between p-10">
        <div className="content font-[sans] font-bold flex flex-col gap-y-2">
          <h1 className="text-3xl tracking-wide">Optimize female health</h1>
          <p className="font-normal text-zinc-400">
            Red light therapy can effectively support your fertility in the{" "}
            <br /> long-term.
          </p>
        </div>

        <div className="content-two">
          <p className="text-zinc-400 w-130 leading-5 text-md mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            soluta molestias id. Quod cum accusamus quis perferendis placeat.
          </p>

          <div className="cards flex gap-x-3 w-full">
            <div className="card w-60 p-5 border-1 border-zinc-300 rounded-lg text-zinc-400">
              <p className="mb-8">
                Promotes <br /> healthy tissue
              </p>
            </div>
            <div className="card w-60 p-5 border-1 border-zinc-300 rounded-lg text-zinc-400">
              <p className="mb-8">
                Balances <br /> your hormones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefitcard;
