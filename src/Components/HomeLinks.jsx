import React from "react";

const HomeLinks = () => {
  const links = ["Technology", "Company", "Commercial", "Blog", "Shop"];

  return (
    <div className="links flex items-center gap-x-3">
      {links.map((item, index) =>
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
  );
};

export default HomeLinks;
