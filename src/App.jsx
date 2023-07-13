import React from "react";
import ElectricityBillCalculator from "./ElectricityBillCalculator";
import "./App.css";
import backgroundImage from "./assets/bg.jpg";

const App = () => {
  return (
    <div
      className=" bg-[url] lg:h-screen md:h-screen text-white bg-cover flex items-center justify-center  "
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className=" py-10 h-fit w-full bg-[#26292b] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 mx-10 flex flex-col ">
        <h2 className=" font-bold tracking-widest text-center text-xl title ">
          Hi ! I'm Khaing Wut Yi Win
        </h2>
        <h2 className=" font-bold tracking-widest text-center text-xl title ">
          Calculate Your Electricity Bill With Me
        </h2>
        <ElectricityBillCalculator />
      </div>
    </div>
  );
};

export default App;
