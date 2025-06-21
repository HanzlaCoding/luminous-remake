import React from "react";
import CardsApplied from "../Components/CardsApplied";

const Application = () => {
  const cardData = [
    {
      title: "Stay your best self, always",
      btnText: "Wellbeing",
      imgURL:
        "https://images.unsplash.com/photo-1600585154340-2f8b1c4d3a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },

    {
      title: "Optimize your fertility,cycle and menopause naturally",
      btnText: "Womens Health",
      imgURL:
        "https://images.unsplash.com/photo-1600585154340-2f8b1c4d3a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },

    {
      title: "Fuel your cells for a supercharged life",
      btnText: "Longevity",
      imgURL:
        "https://images.unsplash.com/photo-1600585154340-2f8b1c4d3a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const renderCards = cardData.map((card, index) => {
    const { title, btnText, imgURL } = card;
    return (
      <CardsApplied
        id={index}
        title={title}
        imgURL={imgURL}
        btnText={btnText}
      />
    );
  });

  return (
    <>
      <div className="text-content py-10 font-[sans] text-center">
        <p className="text-zinc-400">Applications</p>
        <h3 className="text-2xl">Start Shaping your tomorrow</h3>
      </div>

      <div className="cards font-[sans] w-fit mx-auto flex items-center gap-x-5">
        {renderCards}
      </div>

      <div className="bnt py-15">
      <button className="font-[sans] text-sm px-13 py-3 bg-zinc-950 text-white rounded-full mt-20 mx-auto cursor-pointer flex justify-between">
        All Products
        <div className="img-div rotate-180 ml-3">
          <img className="h-5 bg-zinc-100" src="/arrow.png" alt="" />
        </div>
      </button>
      </div>
    </>
  );
};

export default Application;
