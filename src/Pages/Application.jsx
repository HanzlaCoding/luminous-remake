import React from "react";
import CardsApplied from "../Components/CardsApplied";
import Button from "../Components/Button";
import Tagline from "../Components/Tagline";

const Application = () => {
  const cardData = [
    {
      title: "Stay your best self, always",
      btnText: "Wellbeing",
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6748577ad24e2f2050ddaf30_man.webp",
      iconURL: "/orange.svg",
    },

    {
      title: "Optimize your fertility,cycle and menopause naturally",
      btnText: "Womens Health",
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673c1a67dd8dc2f34eb35582_Portrait%20of%20Black%20Woman%203.webp",
      iconURL: "/pink.svg",
    },

    {
      title: "Fuel your cells for a supercharged life",
      btnText: "Longevity",
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b4edb7e08b9f23ffd16d8_Smiling%20Woman%20Purple%20Glasses%201.webp",
      iconURL: "/orange.svg",
    },
  ];

  const renderCards = cardData.map((card, index) => {
    const { title, btnText, imgURL, iconURL} = card;
    return (
      <CardsApplied
        key={index}
        title={title}
        imgURL={imgURL}
        btnText={btnText}
        iconURL={iconURL}
      />
    );
  });
  return (
    <>
      <Tagline />

      <div className="cards font-[sans] w-fit mx-auto flex items-center gap-x-5">
        {renderCards}
      </div>

      <div className="bnt py-15">
        <Button />
      </div>
    </>
  );
};

export default Application;
