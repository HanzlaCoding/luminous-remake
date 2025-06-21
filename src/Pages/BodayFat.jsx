import React from "react";

const BodayFat = () => {
  return (
    <>
      <div className="py-40 font-[sans] text-xl flex flex-col items-center gap-y-1">
        <p>In 2050, material wealth will not be</p>

        <p className="text-zinc-400 flex items-center gap-x-1">
          impressive. YourVO<sub>2</sub>Max,
          <div className="overflow-hidden w-12 h-6 rounded-4xl bg-teal-600">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671a443699cfb0f4ec724439_Screenshot%202024-09-12%20at%2018.26.59%20(1).webp"
              alt=""
            />
          </div>
          speed of aging,
        </p>

        <p className="text-zinc-400 flex items-center gap-x-1">
          HRv
          <div className="img overflow-hidden w-12 h-6 rounded-4xl bg-teal-600">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4e6f73152ac6a0fbb444_Screenshot%202024-09-12%20at%2018.26.59-2.webp"
              alt=""
            />
          </div>
          and body fat percentage
          <div className="img overflow-hidden w-15 h-6 rounded-4xl bg-teal-600">
            <img
              className="object-cover w-full h-full"
              src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4e7fc91b3fa9f76f342b_Screenshot%202024-09-12%20at%2018.26.59.webp"
              alt=""
            />
          </div>
          will be.
        </p>
      </div>
    </>
  );
};

export default BodayFat;
