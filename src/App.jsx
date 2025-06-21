import React from "react";
import Home from "./Pages/Home";
import BodayFat from "./Pages/BodayFat";
import Application from "./Pages/Application";
import MiniKini from "./Pages/MiniKini";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen p-7 bg-[#FBF8F1]">
        <Home/>
        <BodayFat/>
        <Application/>
        <MiniKini/>
      </div>
    </>
  );
};

export default App;