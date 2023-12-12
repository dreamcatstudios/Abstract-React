import React from "react";

const Settings = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  return (
    <div className="flex rounded-md flex-col justify-center items-center relative h-full bg-black ">
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
            className="text-white"
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
            className="text-white"
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
            className="text-white"
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

      {/*<--- Settings code ---> */}
      <div className="w-full overflow-scroll mt-12">
        <h1 className="text-2xl font-bold pl-3 mb-1 mt-3">Settings</h1>
        <div className="border border-t-0 p-3 w-full flex gap-3 items-center ">
          <i class="ri-battery-charge-fill"></i>
          <h1 className="text-white">Battery</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-volume-up-fill"></i>
          <h1 className="text-white">Sound</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-signal-wifi-fill"></i>
          <h1 className="text-white">Network</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-lock-fill"></i>
          <h1 className="text-white">Security</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-apps-fill"></i>
          <h1 className="text-white">Apps</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-file-info-fill"></i>
          <h1 className="text-white">About</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-u-disk-fill"></i>
          <h1 className="text-white">Storage</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-calendar-schedule-fill"></i>
          <h1 className="text-white">Time</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-shield-user-fill"></i>
          <h1 className="text-white">Permissions</h1>
        </div>
        <div className="border p-3 w-full flex gap-3 items-center ">
          <i class="ri-bluetooth-line"></i>
          <h1 className="text-white">Bluetooth</h1>
        </div>
      </div>
      {/*<--- Settings code ---> */}
    </div>
  );
};

export default Settings;
