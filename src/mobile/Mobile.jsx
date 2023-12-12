import React, { useState } from "react";
import Homescreen from "./minis/Homescreen";
import Settings from "./minis/Settings";

const Mobile = () => {
  const apps = {
    homescreen: <Homescreen />,
    settings: <Settings />,
  };

  const [screen, setScreen] = useState(apps.homescreen);

  return (
    <div className="container">
      <div className="flex flex-col gap-5">
        <button
          onClick={() => setScreen(apps.settings)}
          className="p-5 bg-white text-black"
        >
          Settings
        </button>
        <button
          onClick={() => setScreen(apps.homescreen)}
          className="p-5 bg-white text-black"
        >
          Homescreen
        </button>
      </div>
      <div className="flex flex-col w-[20rem] h-[35rem] mt-7 shadow-md ">
        <div className="border-[10px] h-full rounded-md border-black ">
          {/* <----Mini-apps----> */}

          {/* <Homescreen /> */}
          {screen}

          {/* <----Mini-apps----> */}
        </div>

        {/* Bottom */}
        <div class="bg-black rounded-md text-white flex justify-around items-center p-2">
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
            width="1.2em"
            height="1.2em"
            class="text-xl"
          >
            <path fill="currentColor" d="M368 64L144 256l224 192V64z"></path>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
            ></path>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            data-v-4a86e42e=""
          >
            <path
              fill="currentColor"
              d="M8 3h8c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5Z"
            ></path>
          </svg>
        </div>
        {/* Bottom */}
      </div>
    </div>
  );
};

export default Mobile;
