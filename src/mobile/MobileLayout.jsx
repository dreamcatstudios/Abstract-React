// MobileLayout Component
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homescreen from "./miniapps/Homescreen";
import { popApp } from "./store/MobileStore";
import Settings from "./miniapps/Settings";
import Gallery from "./miniapps/Gallery";
import Messaging from "./miniapps/Messaging";
import Activities from "./miniapps/Activities";
import { useParams } from "react-router-dom";
import Instapost from "./miniapps/Instapost";
import Vault from "./miniapps/Vault";

const MobileLayout = () => {
  const dispatch = useDispatch();
  let { level } = useParams();

  const screen = useSelector((state) => {
    if (state.appState.appNames.length === 1) {
      return <Homescreen />;
    } else {
      switch (state.appState.appNames[state.appState.appNames.length - 1]) {
        case "homescreen":
          return <Homescreen />;
        case "settings":
          return <Settings />;
        case "gallery":
          return <Gallery />;
        case "messaging":
          return <Messaging />;
        case "activities":
          return <Activities />;
        case "instapost":
          return <Instapost />;
        case "vault":
          return <Vault />;
        default:
          break;
      }
    }
  });

  const onBackClick = () => {
    console.log("clicked");
    dispatch(popApp());
  };

  useEffect(() => {
    console.log("param:", level);
  }, []);
  return (
    <div className="flex items-center justify-center absolute top-10 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="flex flex-col w-[20rem] h-[35rem] ">
        <div className="border-[10px] h-full rounded-t-md  bg-[#f0f0f0] ">
          {/* App screen is rendering here */}
          {screen !== undefined && screen !== null ? screen : <Homescreen />}
        </div>

        {/* Bottom */}
        <div className="bg-[#f0f0f0] rounded-b-md text-white flex justify-around items-center ">
          {/*<-- Bottom Android Navigation code -->*/}
          <div className="flex justify-evenly w-full pb-2">
            <svg
              key="svg1"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
              width="1.2em"
              height="1.2em"
              className="text-xl text-black"
              onClick={onBackClick}
            >
              <path fill="currentColor" d="M368 64L144 256l224 192V64z"></path>
            </svg>
            <svg
              key="svg2"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="text-xl text-black"
              onClick={onBackClick}
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
              ></path>
            </svg>
            <svg
              key="svg3"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1em"
              className="text-xl text-black"
              height="1em"
              onClick={onBackClick}
            >
              <path
                fill="currentColor"
                d="M8 3h8c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5H8c-2.76 0-5-2.24-5-5V8c0-2.76 2.24-5 5-5Z"
              ></path>
            </svg>
          </div>
        </div>
        {/*<-- Bottom  -->*/}
      </div>
    </div>
  );
};

export default MobileLayout;
