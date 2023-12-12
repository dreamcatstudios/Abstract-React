import React from "react";

const Mobile = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  return (
    <div className="container">
      <div className="flex flex-col w-64 h-[30rem] mt-7">
        <div className="border-[10px] h-full p-2 rounded-md border-black bg-gradient-to-r from-blue-800 to-indigo-900">
          <div className="flex flex-col h-full ">
            {/* Notch Code */}
            <div className="w-full flex justify-around ">
              <h1 className="text-white">{time}</h1>
              <div className="bg-black  p-[12px] rounded-[100%]"></div>
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
            {/* Time Code */}
            <div className=" items-center justify-center flex h-full">
              <h1 className="text-5xl text-center">{time}</h1>
            </div>
            {/* Apps code */}
            <div className="grid grid-cols-2 gap-3 p-5">
              <div className="bg-white p-3 rounded-full "></div>
              <div className="bg-white p-3 rounded-full"></div>
              <div className="bg-white p-3 rounded-full"></div>
              <div className="bg-white p-3 rounded-full"></div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div
          class="bg-black text-white flex justify-around items-center"
          data-v-4a86e42e=""
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
            width="1.2em"
            height="1.2em"
            class="text-xl"
            data-v-4a86e42e=""
          >
            <path fill="currentColor" d="M368 64L144 256l224 192V64z"></path>
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
      </div>
    </div>
  );
};

export default Mobile;
