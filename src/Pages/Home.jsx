import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="w-full h-130 rounded-[40px] 
      bg-center bg-[url(https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daa20f8d824dc60d87727_6ca5979b6f014ba47a22c3f88928aabc_bg-1.webp)]
      bg-cover">
        <div className="overlay px-6 py-5 w-full h-full text-white flex flex-col justify-between">
          <Navbar />
          <div className="content text-center font-[sans] pb-6">
            <p className="text-zinc-400">Red Light Therapy: proven, safe and non-invasive</p>
            <h1 className="text-6xl">Your cells, supercharged</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
