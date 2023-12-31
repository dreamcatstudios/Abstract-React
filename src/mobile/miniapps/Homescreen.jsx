import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pushApp } from "../store/MobileStore";
import Settings from "./Settings";

const Homescreen = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [date, setDate] = React.useState(new Date().toLocaleDateString());

  const apps = {
    settings: "settings",
    gallery: "gallery",
  };

  const dispatch = useDispatch();

  const onAppClick = (app) => {
    dispatch(pushApp(app));
  };

  useEffect(() => {
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
        <h1 className="text-white">{time}</h1>
        <div className="bg-black p-[12px] rounded-[100%]"></div>
        <div class="flex gap-1" data-v-4a86e42e="">
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            data-v-4a86e42e=""
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
            data-v-4a86e42e=""
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
            data-v-4a86e42e=""
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
          <h1 className="text-white  text-4xl font-bold text-center mt-10">
            {time.slice(0, 7)}
          </h1>
          <p className="text-center">{date}</p>
        </div>

        {/* Apps code */}
        <div className="grid grid-cols-2 gap-3">
          <div
            onClick={() => onAppClick(apps.settings)}
            className="bg-white w-14 h-14 rounded-full flex items-center justify-center"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="text-black text-center"
              data-v-e4c37606=""
            >
              <path
                fill="currentColor"
                d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
              ></path>
            </svg>
          </div>
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="text-black "
              data-v-e4c37606=""
            >
              <path
                fill="currentColor"
                d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8m5 9v-2h-2v2h2m-4 0v-2h-2v2h2m-4 0v-2H7v2h2Z"
              ></path>
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
              class="text-black"
              data-v-e4c37606=""
            >
              <path
                d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM4 18v2h16v-6l-3-3l-6 6l-3-3l-4 4z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="text-black"
              data-v-e4c37606=""
            >
              <path
                fill="currentColor"
                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Apps code */}
      {/* <--- Home Screen Code ---> */}
    </div>
  );
};

export default Homescreen;
