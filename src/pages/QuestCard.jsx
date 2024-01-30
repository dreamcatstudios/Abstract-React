import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PieChart from "../components/PieChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestCard = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const { name } = useParams();

  const [questData, setQuestData] = useState({
    alex_01: {
      img: "/location.jpg",
      title: "Alex_File01 - Report",
      fileName: "Location_data.csv",
      points: 0,
      answer: "test",
      fileDownload: "/location_sheet.csv",
      downloadTag: "Alex Data - Download",
      description:
        "Here's some data that we managed to collect on Alex. Identify the data and help the AI algorithm determine Alex's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "What is the current residential address for this individual?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[Wisconssin,Texas,Caliornia]",
        },
        {
          level: 2,
          title: "In which field does this person work?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[Engineering, Medicine, Accounting]",
        },
        {
          level: 3,
          title: "Does this individual have any dependent children?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[yes, no, can't say]",
        },
        {
          level: 4,
          title: "Is this person presently managing any chronic health issues?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[yes, no, can't say]",
        },
        {
          level: 5,
          title:
            "Which religious affiliation does this individual identify with?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[Judaism, Christianity, Islam]",
        },
      ],
    },
    grace_02: {
      img: "/public/medical.jpg",
      title: "Grace_File02 - Report",
      fileName: "Medical_data.csv",
      fileDownload: "/medical_data.csv",
      points: 0,
      answer: "test",
      downloadTag: "Grace Data - Download",
      description:
        "Here's some data that we managed to collect on Grace. Identify the data and help the AI algorithm determine Mia's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "Does this individual have any medical conditions?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[Yes, No, Cannot Say]",
        },
        {
          level: 2,
          title:
            "Based on the information provided, what would be the most probable gender identification of this individual?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[Male, Female, cannot say]",
        },
        {
          level: 3,
          title:
            "Approximately how old is this individual? Kindly choose an option that best fits the given data",
          clicked: false,
          disabled: false,
          answer: "test3",
          options:
            "[Mid-twenties to early thirties, Mid-thirties to forties, Mid-forties to fifties]",
        },
        {
          level: 4,
          title: "Does this individual have any offspring?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[yes, can't say, no]",
        },
        {
          level: 5,
          title:
            "Estimate the approximate height range of this individual based on the available information.",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[Over 175 cm, Between 160-175 cm, can't say]",
        },
      ],
    },
    ethan_03: {
      img: "/search.jpg",
      title: "Ethan_File03 - Report",
      fileName: "Search_data.csv",
      points: 0,
      fileDownload: "/search_queries.csv",
      downloadTag: "Ethan Data - Download",
      description:
        "Here's some data that we managed to collect on Ethan. Identify the data and help the AI algorithm determine Adam's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "Does Ethan possess any pets in his household?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[Yes, Can't say, No]",
        },
        {
          level: 2,
          title: "What is Ethan's favorite sport?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[Rugby, Football, Basketball]",
        },
        {
          level: 3,
          title: "Who is most likely to be Ethan's preferred athlete?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[Erling Haaland, Cristiano Ronaldo, Lionel Messi]",
        },
        {
          level: 4,
          title:
            "To which end of the political ideology spectrum is Ethan more inclined?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[Capitalism, Socialism, Communism]",
        },
        {
          level: 5,
          title: "What degree program does Ethan prefer? ",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[ Engineering, Journalism, Psychology]",
        },
      ],
    },
    deepfake_04: {
      img: "/deepfake.jpg",
      title: "Deepafake - Dataset",
      fileName: "Deepfake_data.csv",
      points: 0,
      fileDownload: "/Notion.zip",
      downloadTag: "Deepfake Images - Download",
      description:
        "Here are some of the images that we managed to collect on Deepfake. Identify the data and help the AI algorithm determine Deepfake's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "Which image was a deepfake within Dataset_1?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "Which image was a deepfake within Dataset_2?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[1,2,3]",
        },
        {
          level: 3,
          title: "Which image was a deepfake within Dataset_3?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "Which image was a deepfake within Dataset_4?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "Which image was a deepfake within Dataset_5?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[1,2,3]",
        },
      ],
    },
    samuel_05: {
      img: "/creditCard.jpg",
      title: "Samuel_File05 - Report",
      fileName: "Credit_Transactions.csv",
      points: 0,
      fileDownload: "/transactions.csv",
      downloadTag: "Samuel Data - Download",
      description:
        "Here's some data that we managed to collect on Samuel. Identify the data and help the AI algorithm determine Khusy's social credit score.",
      learningPath: [
        {
          level: 1,
          title:
            "Regarding this person's typical acquisitions, what do we know?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[groceries, unable to determine, or entertainment.]",
        },
        {
          level: 2,
          title:
            "According to the data, what can we infer about this individual's preferences concerning dietary habits?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[vegan, non-vegetarian, or unknown.]",
        },
        {
          level: 3,
          title:
            "Concerning this person's relocation history, what do we know? ",
          clicked: false,
          disabled: false,
          answer: "test3",
          options:
            "[moved, uncertain, or not having recently changed residences]",
        },
        {
          level: 4,
          title:
            "How would you describe this person's existing fiscal situation?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[good, poor, or cannot say.]",
        },
        {
          level: 5,
          title:
            "As for the number of individuals residing in this person's household, what do we understand?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[alone, undecipherable, or cohabiting with family members]",
        },
      ],
    },
    aurora_06: {
      img: "/charity.jpg",
      title: "Aurora_File05 - Report",
      fileName: "Charity.csv",
      points: 0,
      fileDownload: "",
      downloadTag: "Aurora Data - Download",
      description:
        "Here's some data that we managed to collect on Aurora. Identify the data and help the AI algorithm determine Aurora's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "What is Khushy's favorite hobby?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "Is Khushy a vegetarian or a non-vegetarian?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[1,2,3]",
        },
        {
          level: 3,
          title:
            "Which city did Khushy work in before moving to the current location?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "What is Khushy's dream job?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "Does Khushy own any pets?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[1,2,3]",
        },
      ],
    },
    natalie_07: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Natalie_File07 - Report",
      fileName: "Peroids_Data.csv",
      points: 0,
      fileDownload: "",
      downloadTag: "Natalie Data - Download",
      description:
        "Here's some data that we managed to collect on Natalie. Identify the data and help the AI algorithm determine Natalie's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "For which cause Natalie's donated the most?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "Is Natalie likely to be vegetarian or a non-vegetarian?",
          answer: "test2",
          clicked: false,
          disabled: false,
          options: "[1,2,3]",
        },
        {
          level: 3,
          title:
            "Which type of idealogy Natalie is most likey to be inclined (left/centrist/right)?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "Which political party do you think Natalie support?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "What's likely to be Natalie's annual salary?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[1,2,3]",
        },
      ],
    },
    surbhi_08: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Surbhi_File08 - Report",
      fileName: "Employment_data.csv",
      points: 0,
      fileDownload: "",
      downloadTag: "Surbhi Data - Download",
      description:
        "Here's some data that we managed to collect on Surbhi. Identify the data and help the AI algorithm determine Ryan's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "What is Khushy's favorite hobby?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "What was Khushy previous salary at her old work?",
          answer: "test2",
          clicked: false,
          disabled: false,
          options: "[1,2,3]",
        },
        {
          level: 3,
          title:
            "Which city did Khushy work in before moving to the current location?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "What is Khushy's dream job?",
          clicked: false,
          answer: "test4",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "Does Khushy own any pets?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[1,2,3]",
        },
      ],
    },
    jim_09: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Jim_File09 - Report",
      fileName: "Online_poll.csv",
      points: 0,
      fileDownload: "",

      downloadTag: "Jim Data - Download",
      description:
        "Here's some data that we managed to collect on Jim. Identify the data and help the AI algorithm determine Jim's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "What is Khushy's favorite hobby?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "Is Khushy a vegetarian or a non-vegetarian?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[1,2,3]",
        },
        {
          level: 3,
          title:
            "Which city did Khushy work in before moving to the current location?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "What is Khushy's dream job?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "Does Khushy own any pets?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[1,2,3]",
        },
      ],
    },
    adam_10: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      title: "Adam_File05 - Report",
      fileName: "Job_application.csv",
      points: 0,
      fileDownload: "",
      downloadTag: "Adam Data - Download",
      description:
        "Here's some data that we managed to collect on Adam. Identify the data and help the AI algorithm determine Adam's social credit score.",
      learningPath: [
        {
          level: 1,
          title: "What is Khushy's favorite hobby?",
          clicked: false,
          disabled: false,
          answer: "test1",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "Is Khushy a vegetarian or a non-vegetarian?",
          answer: "test2",
          clicked: false,
          disabled: false,
          options: "[1,2,3]",
        },
        {
          level: 3,
          title:
            "Which city did Khushy work in before moving to the current location?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "What is Khushy's dream job?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "Does Khushy own any pets?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[1,2,3]",
        },
      ],
    },
  });

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
    return <div>Invalid level name</div>;
  }

  const onInputClick = (e) => {
    e.stopPropagation();
  };

  const onAnswerSubmit = (index) => {
    const correctAnswer = selectedQuest.learningPath[index].answer;
    const currentQuest = questData[name.toLowerCase()];

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      const updatedPoints = currentQuest.points + 1;
      setQuestData((prevState) => ({
        ...prevState,
        [name.toLowerCase()]: {
          ...currentQuest,
          points: updatedPoints,
          learningPath: currentQuest.learningPath.map((item, i) =>
            i === index ? { ...item, clicked: true, disabled: true } : item
          ),
        },
      }));

      //Pushing answers to array

      // Update totalPoints state
      setTotalPoints((prevTotalPoints) => prevTotalPoints + 1);
    } else {
      setQuestData((prevState) => ({
        ...prevState,
        [name.toLowerCase()]: {
          ...currentQuest,
          learningPath: currentQuest.learningPath.map((item, i) =>
            i === index ? { ...item, clicked: true, disabled: true } : item
          ),
        },
      }));
    }
  };

  const onCheckAnswer = (index) => {
    const correctAnswer = selectedQuest.learningPath[index].answer;
    const currentQuest = questData[name.toLowerCase()];

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };

  const finishData = () => {
    console.log("questData", questData[name.toLowerCase()]);
    console.log("Total Points:", totalPoints);

    // Calculate maxPoints
    const maxPoints = selectedQuest.learningPath.length;
    setMaxPoints(maxPoints);
    setShowChart(!showChart);
    // Delay for 0.5 seconds before scrolling to the botNatalie of the page
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 250);
  };

  const pieChartData = [
    { value: totalPoints },
    { value: maxPoints - totalPoints },
  ];

  return (
    <div className="h-full container bg-black  flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="w-full h-[100%] flex flex-col justify-between bg-black">
        <div className="border border-[#fafafa] p-5 mt-5 mb-5">
          <div className="flex-col">
            <img
              src={selectedQuest.img}
              alt="profile-photo"
              className="w-full h-36 sm:h-64 h object-cover mb-2 rounded-sm"
            />
            <h1 className="text-2xl font-bold">{selectedQuest.title}</h1>
          </div>
          <div>
            <p className="mb-2">{selectedQuest.description}</p>
          </div>

          <div className="border border-[#fafafa] p-3 space-y-3">
            <div className="flex flex-col gap-4">
              <h1>{questData[name].downloadTag}</h1>
              <div>
                <a
                  href={questData[name].fileDownload}
                  className="px-5 py-4 border-white border hover:bg-white hover:text-black hover:transition-all hover:delay-50 hover:ease-in-out"
                >
                  {questData[name].fileName}
                </a>
              </div>
            </div>
            {selectedQuest.learningPath.map((item, index) => (
              <div className="flex flex-col gap-3 w-full" key={item.level}>
                {item.disabled ? (
                  <div className="bg-[#333] items-center p-5 mt-2 rounded-sm flex-col">
                    <p className="text-white">{`${item.level} - This item has already been answered`}</p>
                    {/* You can display a message or any other content for disabled items */}
                  </div>
                ) : (
                  <div
                    onClick={() => onClickExpand(index)}
                    className="bg-[#333] items-center p-5 mt-1 sm:mt-3 rounded-sm flex-col"
                  >
                    <p className="text-white">{`${item.level} - ${item.title}`}</p>

                    {item.clicked && (
                      <>
                        <p>{item.options}</p>
                        <div className="flex gap-3 items-center flex-col sm:flex-row align-middle mt-2">
                          <input
                            onChange={(e) => setUserAnswer(e.target.value)}
                            onClick={onInputClick}
                            placeholder="Type your answer"
                            className="h-5 p-5 pb-5 pl-2 w-full sm:w-auto  hover:transition-all hover:duration-75 hover:ease-in-out text-black rounded-sm"
                          />
                          <button
                            onClick={() => onCheckAnswer(index)}
                            className="px-3 py-2 w-full sm:w-auto bg-black rounded text-white"
                          >
                            Check
                          </button>
                          <button
                            onClick={() => onAnswerSubmit(index)}
                            className="px-3 py-2 w-full sm:w-auto bg-black rounded text-white"
                          >
                            Submit
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={finishData}
          className="bg-[#fafafa] text-black p-3 mb-16 sm:mb-12  hover:text-white hover:bg-black hover:transition-all hover:delay-75 hover:ease-in-out hover:border-white hover:border"
        >
          Finish
        </button>
      </div>
      {/*<--- Chart Component ---> */}
      {showChart && (
        <div className="w-full flex flex-col items-center justify-center pt-10 pb-10 mb-10  border border-[#fafafa]">
          <h1 className="text-5xl text-center  pb-5 font-bold">Your Score</h1>
          <PieChart width={400} height={400} data={pieChartData} />
          <h1 className="text-5xl text-center mt-10 font-bold">{`Total Points: ${totalPoints} / ${maxPoints}`}</h1>
        </div>
      )}

      {/*<--- Chart Component ---> */}
    </div>
  );
};

export default QuestCard;
