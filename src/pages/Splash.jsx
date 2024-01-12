import React from "react";

const Splash = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="container h-full">
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <h1 className="text-white text-6xl font-bold">Abstract</h1>
          <p className="text-center">
            Please use Firefox or Google Chrome to play the game. Mobile devices
            are currently not supported. After clicking on “PLAY NOW”, the game
            will start in full-screen mode.
          </p>
          <div className="border border-white text-center p-4  hover:border-black  hover:bg-white hover:text-black transition-timing-function: cubic-bezier(0.4, 0, 1, 1); ">
            Play Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
