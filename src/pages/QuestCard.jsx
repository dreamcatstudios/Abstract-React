import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const QuestCard = () => {
  const [userAnswer, setUserAnswer] = useState(""); // New state for user's answer
  const [questData, setQuestData] = useState({
    alex_file01: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/9/image.jpg",
      title: "Alex_File01 - Report",
      fileName: "Location_data.csv",
      points: 0,
      answer: "test",
      fileDownload: "",
      downloadTag: "Alex Data - Download",
      description:
        "Here's some data that we managed to collect on Alex. Identify the data and help the AI algorithm determine Alex's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "What is likely to be Alex's home location?",
          clicked: false,
          answer: "test",
        },
        {
          level: 2,
          title: "Does he have any kids?",
          clicked: false,
          answer: "test",
        },
        {
          level: 3,
          title: "Any medical problems?",
          clicked: false,
          answer: "test",
        },
        {
          level: 4,
          title: "His religious beliefs",
          clicked: false,
          answer: "test",
        },
        {
          level: 5,
          title: "How many kids does he have?",
          clicked: false,
          answer: "test",
        },
      ],
    },
    mia_file02: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/8/image.jpg",
      title: "Mia_File02 - Report",
      fileName: "Medical_data.csv",
      fileDownload: "",
      points: 0,
      answer: "test",
      downloadTag: "Mia Data - Download",
      description:
        "Here's some data that we managed to collect on Mia. Identify the data and help the AI algorithm determine Mia's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "Is Mia on going some kind of medical treatment?",
          clicked: false,
          answer: "test",
        },
        {
          level: 2,
          title: "Does Mia have any allergies?",
          clicked: false,
          answer: "test",
        },
        {
          level: 3,
          title:
            "Does Mia have any medical conditions? If yes write the name of the medical condition",
          clicked: false,
          answer: "test",
        },
        {
          level: 4,
          title: "What was the insurance premium of Mia last month",
          clicked: false,
          answer: "test",
        },
        {
          level: 5,
          title: "Does mia smoke, drink or consume some kind of intoxicants?",
          clicked: false,
          answer: "test",
        },
      ],
    },
    adam_file03: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/2/image.jpg",
      title: "Adam_File03 - Report",
      fileName: "SmartHome_data.csv",
      points: 0,
      fileDownload: "",
      downloadTag: "Adam Data - Download",
      description:
        "Here's some data that we managed to collect on Adam. Identify the data and help the AI algorithm determine Adam's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "At which time does Adam usually wake up?",
          clicked: false,
          answer: "test",
        },
        {
          level: 2,
          title: "Does he have any kids?",
          clicked: false,
          answer: "test",
        },
        {
          level: 3,
          title: "What is Adam's preferred method of commuting to work?",
          clicked: false,
          answer: "test",
        },
        {
          level: 4,
          title: "What are Adam's views on privacy and data security?",
          clicked: false,
          answer: "test",
        },
        {
          level: 5,
          title: "How many kids does Adam have?",
          clicked: false,
          answer: "test",
        },
      ],
    },

    steve_file04: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Steve_File04 - Report",
      fileName: "Deepfake_data.csv",
      points: 0,
      fileDownload: "",
      downloadTag: "Steve Data - Download",
      description:
        "Here's some data that we managed to collect on Steve. Identify the data and help the AI algorithm determine Steve's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "Which Image was a deepfake on Dataset_1?",
          clicked: false,
          answer: "test",
        },
        {
          level: 2,
          title: "Which Image was a deepfake on Dataset_2?",
          clicked: false,
          answer: "test",
        },
        {
          level: 3,
          title: "Which Image was a deepfake on Dataset_3?",
          clicked: false,
          answer: "test",
        },
        {
          level: 4,
          title: "Which Image was a deepfake on Dataset_4?",
          clicked: false,
          answer: "test",
        },
        {
          level: 5,
          title: "Which Image was a deepfake on Dataset_5?",
          clicked: false,
          answer: "test",
        },
      ],
    },
    khushy_file05: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Khushy_File05 - Report",
      fileName: "Job_application.csv",
      points: 0,
      fileDownload: "",
      downloadTag: "Khushy Data - Download",
      description:
        "Here's some data that we managed to collect on Khushy. Identify the data and help the AI algorithm determine Khusy's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "What is Khushy's favorite hobby?",
          clicked: false,
          answer: "test",
        },
        {
          level: 2,
          title: "Is Khushy a vegetarian or a non-vegetarian?",
          answer: "test",
        },
        {
          level: 3,
          title:
            "Which city did Khushy work in before moving to the current location?",
          clicked: false,
          answer: "test",
        },
        {
          level: 4,
          title: "What is Khushy's dream job?",
          clicked: false,
          answer: "test",
        },
        {
          level: 5,
          title: "Does Khushy own any pets?",
          clicked: false,
          answer: "test",
        },
      ],
    },
  });

  const { name } = useParams();

  const onClickExpand = (index) => {
    setQuestData((prevState) => ({
      ...prevState,
      [name.toLowerCase()]: {
        ...prevState[name.toLowerCase()],
        learningPath: prevState[name.toLowerCase()].learningPath.map(
          (item, i) =>
            i === index ? { ...item, clicked: !item.clicked } : item
        ),
      },
    }));
  };

  const selectedQuest = questData[name.toLowerCase()];

  if (!selectedQuest) {
    // Handle invalid difficulty level
    return <div>Invalid difficulty level</div>;
  }

  const onInputClick = (e) => {
    e.stopPropagation();
  };

  const onAnswerSubmit = (index) => {
    const correctAnswer = selectedQuest.learningPath[index].answer;
    const currentQuest = questData[name.toLowerCase()];

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      const updatedPoints = currentQuest.points + 1;

      console.log(updatedPoints); // Log the points before updating the state

      setQuestData((prevState) => ({
        ...prevState,
        [name.toLowerCase()]: {
          ...currentQuest,
          points: updatedPoints,
          learningPath: currentQuest.learningPath.map((item, i) =>
            i === index ? { ...item, clicked: true } : item
          ),
        },
      }));
    }
  };

  const finishData = () => {
    console.log("questData", questData[name.toLowerCase()]);
  };

  return (
    <div className="container h-full flex flex-col justify-between p-3 bg-black">
      <div className="border border-[#333] p-5 mt-5 mb-5">
        <div className="flex-col">
          <img
            src={selectedQuest.img}
            alt="profile-photo"
            className="w-full h-32 object-cover mb-2 rounded-md"
          />
          <h1 className="text-2xl font-bold">{selectedQuest.title}</h1>
        </div>
        <div>
          <p className="mb-2">{selectedQuest.description}</p>
        </div>

        <div className="border border-[#333] p-3 space-y-3">
          <div>
            <h1>{questData[name].downloadTag}</h1>
            <button className="px-5 py-3 border-white border hover:bg-white hover:text-black hover:transition-all hover:delay-50 hover:ease-in-out">
              {questData[name].fileName}
            </button>
          </div>
          {selectedQuest.learningPath.map((item, index) => (
            <div className="flex flex-col gap-3 w-full" key={item.level}>
              <div
                onClick={() => onClickExpand(index)}
                className="bg-[#444] items-center p-2 rounded-sm flex-col "
              >
                <p className="text-white">{`${item.level} - ${item.title}`}</p>
                {item.clicked && (
                  <div className="flex gap-3 items-center">
                    <input
                      onChange={(e) => setUserAnswer(e.target.value)}
                      onClick={onInputClick}
                      placeholder="Type your answer"
                      className="h-5 pt-5 pb-5 pl-2 mt-2 transition-all duration-300 ease-in-out text-black rounded-sm"
                    />
                    <button
                      onClick={() => onAnswerSubmit(index)}
                      className="px-3 py-2 mt-2 bg-black rounded text-white"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={finishData}
        className="bg-[#fafafa] text-black p-3 mb-12"
      >
        Finish
      </button>
    </div>
  );
};

export default QuestCard;
