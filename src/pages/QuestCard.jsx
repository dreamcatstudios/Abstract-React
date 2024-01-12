import React, { useEffect } from "react";

import { useParams, Link } from "react-router-dom";

const QuestCard = () => {
  const { name } = useParams();

  const questData = {
    alex_file01: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/9/image.jpg",
      title: "Alex - Report",
      description:
        "Here's some data that we managed to collect on Alex. Identify the data and and help the AI algorith to determine the social credit score of Alex",
      learningPath: [
        { level: 1, title: "Start quest" },
        { level: 2, title: "Continue quest" },
        { level: 3, title: "Advance quest" },
        { level: 4, title: "Master quest" },
        { level: 5, title: "Challenge quest" },
      ],
    },
    mia_file02: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/8/image.jpg",
      title: "Privacy Threat Modeling - Medium",
      description:
        "Privacy threat modeling is the ultimate enabler of Privacy by Design...",
      learningPath: [
        { level: 1, title: "Start quest" },
        { level: 2, title: "Continue quest" },
        { level: 3, title: "Advance quest" },
        { level: 4, title: "Master quest" },
        { level: 5, title: "Challenge quest" },
      ],
    },
    adam_file03: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/2/image.jpg",
      title: "Privacy Threat Modeling - Hard",
      description:
        "Privacy threat modeling is the ultimate enabler of Privacy by Design...",
      learningPath: [
        { level: 1, title: "Start quest" },
        { level: 2, title: "Continue quest" },
        { level: 3, title: "Advance quest" },
        { level: 4, title: "Master quest" },
        { level: 5, title: "Challenge quest" },
      ],
    },
    superhard: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Privacy Threat Modeling - Super Hard",
      description:
        "Privacy threat modeling is the ultimate enabler of Privacy by Design...",
      learningPath: [
        { level: 1, title: "Start quest" },
        { level: 2, title: "Continue quest" },
        { level: 3, title: "Advance quest" },
        { level: 4, title: "Master quest" },
        { level: 5, title: "Challenge quest" },
      ],
    },
  };

  const selectedQuest = questData[name.toLowerCase()];

  if (!selectedQuest) {
    // Handle invalid difficulty level
    return <div>Invalid difficulty level</div>;
  }

  return (
    <div className="container h-full flex flex-col justify-between p-3">
      <div className="border border-[#333] p-5 mt-5 mb-5">
        <div className="flex-col">
          <img
            src={selectedQuest.img}
            alt=""
            className="w-full h-32 object-cover mb-2 rounded-md"
          />
          <h1 className="text-2xl font-bold">{selectedQuest.title}</h1>
        </div>
        <div>
          <p className="mb-2">{selectedQuest.description}</p>
        </div>
        <div className="border border-[#333] p-3 space-y-3">
          <div>
            <h1>Alex Data</h1>
          </div>
          {selectedQuest.learningPath.map((item, index) => (
            <Link
              className="flex flex-col gap-3 w-full"
              key={item.level}
              to={`/file/${name.toLowerCase()}/${item.level}`}
            >
              {/* Make this clickable so it goes to the next page */}
              <div
                className="bg-[#444] items-center p-2 flex rounded-sm h-16"
                // Adjust the height as needed
              >
                <p className="text-white">{`Level ${item.level} - ${item.title}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
