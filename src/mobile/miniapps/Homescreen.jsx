import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pushApp } from "../store/MobileStore";
import Settings from "./Settings";
import { useParams } from "react-router-dom";

const Homescreen = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [date, setDate] = React.useState(new Date().toLocaleDateString());
  let { level } = useParams();

  const apps = {
    settings: "settings",
    gallery: "gallery",
    messaging: "messaging",
    activities: "activities",
    instapost: "instapost",
    vault: "vault",
    calculator: "calculator",
  };

  const dispatch = useDispatch();

  const onAppClick = (app) => {
    dispatch(pushApp(app));
  };

  useEffect(() => {
    console.log("level:", level);
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex rounded-md flex-col justify-center items-center relative h-full bg-gradient-to-r from-blue-800 to-indigo-900">
      {/* Notch Code */}
      <div className="w-full flex justify-around top-2 absolute ">
        <h1 className="text-white">{time.slice(0, time.lastIndexOf(":"))}</h1>
        <div className="bg-black p-[12px] rounded-[100%]"></div>
        <div className="flex gap-1">
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="m12 21l3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2L12 21m0-18C7.95 3 4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C19.79 4.34 16.05 3 12 3m0 6c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c2.03 0 3.9.67 5.4 1.8l1.8-2.4C17.19 9.89 14.7 9 12 9Z"
            ></path>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="M19.5 5.5v13h-2v-13h2M21 4h-5v16h5V4m-7 5H9v11h5V9m-7 5H2v6h5v-6Z"
            ></path>
          </svg>
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="currentColor"
              d="M16 14H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Notch Code */}

      {/* <--- Home Screen Code ---> */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="text-white text-4xl font-bold text-center mt-10">
            {time.slice(0, time.lastIndexOf(" "))}
          </h1>
          <p className="text-center">{date}</p>
        </div>
        {/* <-- Activities Level */}
        {level.toLowerCase() === "appusage" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => onAppClick(apps.activities)}
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="text-black text-center"
                >
                  <path
                    fill="currentColor"
                    d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
                  ></path>
                </svg>
              </div>
              <div
                onClick={() => onAppClick(apps.calculator)}
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1.2em"
                  height="1.2em"
                  className="text-black"
                >
                  <path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM7 12V14H9V12H7ZM7 16V18H9V16H7ZM11 12V14H13V12H11ZM11 16V18H13V16H11ZM15 12V18H17V12H15ZM7 6V10H17V6H7Z"></path>
                </svg>
              </div>
              <div
                onClick={() => onAppClick(apps.gallery)}
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="text-black"
                >
                  <path
                    d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM4 18v2h16v-6l-3-3l-6 6l-3-3l-4 4z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                onClick={() => window.open("https://www.google.com/", "_blank")}
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1.2em"
                  height="1.2em"
                  className="text-black "
                >
                  <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                </svg>
              </div>
            </div>
          </>
        )}
        {/* <--- Activities Code ---> */}

        {/* <-- Vault Level */}
        {level.toLowerCase() === "social" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => onAppClick(apps.instapost)}
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM5 4V20H19V4H5ZM7 6H17V10H7V6ZM7 12H9V14H7V12ZM7 16H9V18H7V16ZM11 12H13V14H11V12ZM11 16H13V18H11V16ZM15 12H17V18H15V12Z"></path>
                </svg>
              </div>
              <div
                onClick={() =>
                  window.open("https://www.google.com/gmail/about/", "_blank")
                }
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1.2em"
                  height="1.2em"
                  className="text-black"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                </svg>
              </div>
              <div
                onClick={() => onAppClick(apps.vault)}
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1.2em"
                  height="1.2em"
                  className="text-black"
                >
                  <path d="M18.0049 19.9998H6.00488V21.9998H4.00488V19.9998H3.00488C2.4526 19.9998 2.00488 19.5521 2.00488 18.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V18.9998C22.0049 19.5521 21.5572 19.9998 21.0049 19.9998H20.0049V21.9998H18.0049V19.9998ZM11.0049 13.8738V16.9998H13.0049V13.8738C14.7301 13.4297 16.0049 11.8636 16.0049 9.99979C16.0049 7.79065 14.214 5.99979 12.0049 5.99979C9.79574 5.99979 8.00488 7.79065 8.00488 9.99979C8.00488 11.8636 9.27966 13.4297 11.0049 13.8738ZM12.0049 11.9998C10.9003 11.9998 10.0049 11.1044 10.0049 9.99979C10.0049 8.89522 10.9003 7.99979 12.0049 7.99979C13.1095 7.99979 14.0049 8.89522 14.0049 9.99979C14.0049 11.1044 13.1095 11.9998 12.0049 11.9998Z"></path>
                </svg>
              </div>
              <div
                onClick={() => window.open("https://www.google.com/", "_blank")}
                className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="1.2em"
                  height="1.2em"
                  className="text-black "
                >
                  <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                </svg>
              </div>
            </div>
          </>
        )}
        {/* <--- Vault Code ---> */}
      </div>
    </div>
  );
};

export default Homescreen;
