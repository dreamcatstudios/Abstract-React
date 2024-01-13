import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const levels = [
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      level: "1",
      title: "Alex_File01",
      description:
        "This is the easiest level. It's for people who have never played before.",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Mia_File02",
      description:
        "This is a medium level. It's for people with some experience.",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Adam_File03",
      description:
        "This is a hard level. It's for experienced players looking for a challenge.",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Steve_File04",
      description:
        "This is an extremely hard level. It's for expert players seeking the ultimate challenge.",
    },
    {
      bg: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/folder-icon.png",
      title: "Khushy_File05",
      description:
        "This is an extremely hard level. It's for expert players seeking the ultimate challenge.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0070f3] container">
      <div className="flex flex-col gap-12 p-6 w-0">
        {levels.map((item, index) => (
          <Link
            key={index}
            to={`/file/${item.title.toLowerCase().replace(/\s+/g, "")}`}
            className=""
          >
            <div
              className="btn-img bg-cover bg-no-repeat w-20 h-20"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <h1 className="text-center whitespace-nowrap pt-[82px]">
                {item.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
