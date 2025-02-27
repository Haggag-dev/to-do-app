import { useState } from "react";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  const phrases = ["Make dinner.", "Walk the dog.", "Take a break."];

  return (
    <div className="relative h-20 w-full mt-20 max-w-70 mx-auto group">
      <div className="-inset-0.5 flex absolute bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <h1 className="relative rounded-lg bg-black flex items-center justify-center h-full text-white">
        <TypeWriter phrases={phrases} />
      </h1>
    </div>
  );
};

export default Hero;
