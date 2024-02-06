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
                  width="1.2em"
                  height="1.2em"
                  className="text-black text-center"
                >
                  <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
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
                  className="text-black text-center"
                >
                  <path d="M4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2ZM5 4V20H19V4H5ZM7 6H17V10H7V6ZM7 12H9V14H7V12ZM7 16H9V18H7V16ZM11 12H13V14H11V12ZM11 16H13V18H11V16ZM15 12H17V18H15V12Z"></path>
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
