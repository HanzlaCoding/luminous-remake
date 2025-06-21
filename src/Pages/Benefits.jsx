import React from "react";
import Tagline from "../Components/Tagline";
import Benefitcard from "../Components/Benefitcard";

const Benefits = () => {
  const data = [
    {
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/674033244546d6ee0abb7478_Frame%202087331480-2.webp",
    },
    {
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/67403324759d4ba06050c510_Frame%202087331480-1.webp",
    },
    {
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/67409518627cee8a92540085_face.webp",
    },
    {
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/674033242fdd7bd921085f15_Frame%202087331480.webp",
    },
    {
      imgURL:
        "https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6740332425a33e3de6ea9d44_Frame%202087331482.webp",
    },
  ];

  const renderCards = data.map((item, index) => {
    return <Benefitcard imgURL={item.imgURL} key={index} />;
  });

  return (
    <>
      <div className="benefits min-h-screen w-full py-10 font-[sans]">
        <div className="tagline">
          <div className="text-content py-10 font-[sans] text-center">
            <p className="text-zinc-400">Benefits</p>
            <h3 className="text-2xl">Feel the difference in every aspect</h3>
          </div>
        </div>

        <div className="benefit-cards flex flex-col gap-y-3 items-center">
          {renderCards}
        </div>
      </div>
    </>
  );
};

export default Benefits;
