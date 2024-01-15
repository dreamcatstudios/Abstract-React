import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { FadeLoader } from "react-spinners";

const Homepage = () => {
  const levels = [
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      level: "1",
      title: "Alex_File01",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Mia_File02",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Adam_File03",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Steve_File04",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Khushy_File05",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Dave_File06",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Tom_File07",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Surbhi_File08",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Jim_File09",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Adam_File10",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (hasVisitedBefore) {
      // User has visited before, so set loading to false immediately
      setLoading(false);
    } else {
      // User is visiting for the first time, show the loader and set a flag
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisitedBefore", "true");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="flex flex-col h-screen bg-[#0070f3] container">
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color="#ffffff" css={override} size={15} />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col h-[95%] gap-12 p-6 w-0 flex-wrap">
          {levels.map((item, index) => (
            <Link
              key={index}
              to={`/file/${item.title.toLowerCase().replace(/\s+/g, "")}`}
              className=""
            >
              <div
                className="btn-img bg-cover bg-no-repeat sm:w-20 sm:h-20 h-14 w-14 hover:brightness-75"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <h1 className="text-center whitespace-nowrap pt-[60px] sm:pt-[82px]">
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
