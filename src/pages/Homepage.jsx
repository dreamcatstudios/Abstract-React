import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const levels = [
    {
      bg: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/9/image.jpg",
      title: "Easy",
      description:
        "This is the easiest level. It's for people who have never played before.",
    },
    {
      bg: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/8/image.jpg",
      title: "Medium",
      description:
        "This is a medium level. It's for people with some experience.",
    },
    {
      bg: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/2/image.jpg",
      title: "Hard",
      description:
        "This is a hard level. It's for experienced players looking for a challenge.",
    },
    {
      bg: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Super Hard",
      description:
        "This is an extremely hard level. It's for expert players seeking the ultimate challenge.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen container">
      <div className="mt-7 lg:mt-0">
        <h1 className="text-4xl sm:text-5xl font-bold">Abstract - React</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
        {levels.map((item, index) => (
          <Link
            key={index}
            to={`/quest/${item.title.toLowerCase().replace(/\s+/g, "")}`}
            className="hover:no-underline"
          >
            <div className="h-full border-[#333] border rounded-md shadow-md p-6 transition-transform transform hover:scale-105 cursor-pointer">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <div>
                <img
                  src={item.bg}
                  alt={item.title}
                  className="w-full h-52 object-cover mb-2 rounded-md"
                />
              </div>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
