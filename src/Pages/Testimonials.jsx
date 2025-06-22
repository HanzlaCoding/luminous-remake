import React from "react";
import ReviewCard from "../Components/ReviewCard"

const Testimonials = () => {
  return (
    <>
      <div className="text-content py-4 font-[sans] text-center">
        <p className="text-zinc-400">Testimonials</p>
        <h3 className="text-2xl">Helping people feel better, everyday!</h3>
      </div>

      <div className="testimonials-marquee mb-20 w-full h-80 flex items-center gap-x-5 flex-nowrap overflow-x-auto p-5">
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </div>
    </>
  );
};

export default Testimonials;
