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
      downloadable: true,
      title: "Alex_File01 - Report",
      fileName: "Location_data.csv",
      points: 0,
      answer: "test",
      fileDownload: "/location_sheet.csv",
      downloadTag: "Alex Data - Download",
      description:
        "Alex's location has been exposed in a leak, which isn't shocking given how many apps and services track user locations under the guise of service improvement. These entities frequently monitor and use location data for purposes such as targeted ads and creating detailed social profiles.",
      learningPath: [
        {
          level: 1,
          title: "What is the current residential address for this individual?",
          clicked: false,
          disabled: false,
          answer: "1",
          options: "[Wisconssin,Texas,Caliornia]",
        },
        {
          level: 2,
          title: "In which field does this person work?",
          clicked: false,
          disabled: false,
          answer: "1",
          options: "[Engineering, Medicine, Accounting]",
        },
        {
          level: 3,
          title: "Does this individual have any dependent children?",
          clicked: false,
          disabled: false,
          answer: "1",
          options: "[yes, no, can't say]",
        },
        {
          level: 4,
          title: "Is this person presently managing any chronic health issues?",
          clicked: false,
          disabled: false,
          answer: "1",
          options: "[yes, no, can't say]",
        },
        {
          level: 5,
          title:
            "Which religious affiliation does this individual identify with?",
          clicked: false,
          disabled: false,
          answer: "1",
          options: "[Judaism, Christianity, Islam]",
        },
      ],
    },
    grace_02: {
      img: "/medical.jpg",
      downloadable: true,
      title: "Grace_File02 - Report",
      fileName: "Medical_data.csv",
      fileDownload: "/medical_data.csv",
      points: 0,
      answer: "test",
      downloadTag: "Grace Data - Download",
      description:
        "Grace's medical information was unfortunately part of a recent data breach, a disconcerting trend given the increasing number of healthcare organizations and tech companies collecting sensitive health data without robust protection measures in place.",
      learningPath: [
        {
          level: 1,
          title: "Does this individual have any medical conditions?",
          clicked: false,
          disabled: false,
          answer: "1",
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
      downloadable: true,
      title: "Ethan_File03 - Report",
      fileName: "Search_data.csv",
      points: 0,
      fileDownload: "/search_queries.csv",
      downloadTag: "Ethan Data - Download",
      description:
        "Ethan had his search history uncovered in a disturbing privacy violation, highlighting the growing concern over online tracking practices where browsing activity is monitored by countless websites and ad networks to serve personalized content and targeted advertisements.",
      learningPath: [
        {
          level: 1,
          title: "Does Ethan possess any pets in his household?",
          clicked: false,
          disabled: false,
          answer: "1",
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
      downloadable: true,
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
          answer: "1",
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
      downloadable: true,
      title: "Samuel_File05 - Report",
      fileName: "Credit_Transactions.csv",
      points: 0,
      fileDownload: "/transactions.csv",
      downloadTag: "Samuel Data - Download",
      description:
        "Samuel fell victim to a credit transaction data leak, an unsettling reminder of the vulnerabilities surrounding financial data security as more businesses digitize payment systems while failing to implement adequate safeguards against cyber attacks.",
      learningPath: [
        {
          level: 1,
          title:
            "Regarding this person's typical acquisitions, what do we know?",
          clicked: false,
          disabled: false,
          answer: "1",
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
      downloadable: true,
      title: "Aurora_File05 - Report",
      fileName: "Fitness.jpg",
      points: 0,
      fileDownload: "/activityTracker.png",
      downloadTag: "Aurora Data - Download",
      description:
        "Tragically, Aurora suffered from a significant data leak revealing her fitness data collected through her smartwatch device and application, bringing attention to insufficient data protection standards among makers of wearables and software providers alike.",
      learningPath: [
        {
          level: 1,
          title: "What do we know about this person sleep cycle?",
          clicked: false,
          disabled: false,
          answer: "1",
          options: "[early bird,can't tell,late riser]",
        },
        {
          level: 2,
          title: "What do we know about this person's lifestyle?",
          clicked: false,
          disabled: false,
          answer: "test2",
          options: "[athletic,can't tell,unfit]",
        },
        {
          level: 3,
          title: "What do we know about this person's workspace?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[office,can't tell,physical activity]",
        },
        {
          level: 4,
          title: "What do we know about this person's age?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options: "[rather young,can't tell,rather old]",
        },
        {
          level: 5,
          title: "What do we know about this person's attitude?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[lazy,can't tell,busy]",
        },
      ],
    },
    natalie_07: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      downloadable: false,
      title: "Natalie_File07 - Report",
      fileName: "Mobile_app_usage",
      points: 0,
      fileDownload: "/mobile/appUsage",
      downloadTag: "Natalie Phone - Checkout",
      description:
        "Natalie experienced a distressing leak of her app usage data, drawing attention to questionable data collection practices and weak privacy protections prevalent in today's digital landscape.",
      learningPath: [
        {
          level: 1,
          title: "What do we know about Natalie's news consumption?",
          clicked: false,
          disabled: false,
          answer: "1",
          options:
            "[politically engaged, mainstream media consumer, alternative sources]",
        },
        {
          level: 2,
          title: "What do we know about Natalie's language proficiency?",
          answer: "test2",
          clicked: false,
          disabled: false,
          options: "[multilingual, bilingual, monolingual]",
        },
        {
          level: 3,
          title: "What do we know about Natalie's social media habits?",
          clicked: false,
          disabled: false,
          answer: "test3",
          options: "[frequent user, moderate user, seldom user]",
        },
        {
          level: 4,
          title: "What do we know about Natalie's technology usage?",
          clicked: false,
          disabled: false,
          answer: "test4",
          options:
            "[smartphone addict, computer reliant, minimalistic approach]",
        },
        {
          level: 5,
          title: "What do we know about Natalie's relationship status?",
          clicked: false,
          disabled: false,
          answer: "test5",
          options: "[single, married, can't tell]",
        },
      ],
    },
    surbhi_08: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      downloadable: false,
      title: "Surbhi_File08 - Report",
      fileName: "Vault",
      points: 0,
      fileDownload: "/mobile/social",
      downloadTag: "Surbhi Data - Download",
      description:
        "People increasingly share personal info online, enabling data brokers and internet firms to track and target them.",
      learningPath: [
        {
          level: 1,
          title: "What is the secret key stored within the vault application?",
          clicked: false,
          disabled: false,
          answer: "1",
          options: "",
        },
        // {
        //   level: 2,
        //   title: "What was Khushy previous salary at her old work?",
        //   answer: "test2",
        //   clicked: false,
        //   disabled: false,
        //   options: "[1,2,3]",
        // },
        // {
        //   level: 3,
        //   title:
        //     "Which city did Khushy work in before moving to the current location?",
        //   clicked: false,
        //   disabled: false,
        //   answer: "test3",
        //   options: "[1,2,3]",
        // },
        // {
        //   level: 4,
        //   title: "What is Khushy's dream job?",
        //   clicked: false,
        //   answer: "test4",
        //   options: "[1,2,3]",
        // },
        // {
        //   level: 5,
        //   title: "Does Khushy own any pets?",
        //   clicked: false,
        //   disabled: false,
        //   answer: "test5",
        //   options: "[1,2,3]",
        // },
      ],
    },
    jim_09: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      downloadable: true,
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
          answer: "1",
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
      downloadable: true,
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
          answer: "1",
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
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 250);
    toast.success("Answer Submitted");

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

  const onDownloadClick = (e) => {
    e.stopPropagation();
    toast.success("File Downloaded! Check your downloads folder");
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
    <div class="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] h-full w-full">
      <div className="h-full container flex flex-col justify-center items-center">
        <ToastContainer />
        <div className="w-full h-[100%] flex flex-col justify-between ">
          <div className="border border-[#fafafa] p-5 mt-5 mb-5">
            <div className="flex-col">
              <img
                src={selectedQuest.img}
                alt="profile-photo"
                className="w-full h-36 sm:h-64 h object-cover mb-2 rounded-sm"
              />
              <h1 className="text-2xl font-bold">{selectedQuest.title}</h1>
            </div>
            <div className="mb-2">
              <p className="">{selectedQuest.description}</p>
              <p className=" font-semibold">
                Tip:- Click the question to see options; then select and submit
                your answer (1, 2, or 3). Any other response will be marked
                incorrect.
              </p>
            </div>

            <div className="border border-[#fafafa] p-3 space-y-3">
              <div className="flex flex-col gap-4">
                <h1>{questData[name].downloadTag}</h1>
                <div className="mb-2 sm:mb-0">
                  {questData[name].downloadable ? (
                    <a
                      onClick={onDownloadClick}
                      href={questData[name].fileDownload}
                      className="px-5 py-4  bg-white text-black hover:bg-black hover:border-white hover:border hover:text-white hover:bg-transparent hover:transition-all hover:delay-50 hover:ease-in-out"
                    >
                      {questData[name].fileName}
                    </a>
                  ) : (
                    <Link
                      to={`/${questData[name].fileDownload}`}
                      onClick={onDownloadClick}
                      className="px-5 py-4 bg-white text-black hover:bg-black hover:border-white hover:border hover:text-white hover:bg-transparent hover:transition-all hover:delay-50 hover:ease-in-out"
                    >
                      {questData[name].fileName}
                    </Link>
                  )}
                </div>
              </div>
              {selectedQuest.learningPath.map((item, index) => (
                <div className="flex flex-col gap-3 w-full" key={item.level}>
                  {item.disabled ? (
                    <div className="bg-gray-800  items-center p-5 mt-2 rounded-sm flex-col">
                      <p className="text-white">{`${item.level} - This item has already been answered`}</p>
                      {/* You can display a message or any other content for disabled items */}
                    </div>
                  ) : (
                    <div
                      onClick={() => onClickExpand(index)}
                      className="bg-gray-800 items-center p-5 mt-1 sm:mt-3 rounded-sm flex-col"
                    >
                      <div className="flex justify-between">
                        <p className="text-white">{`${item.level} - ${item.title}`}</p>
                        {item.clicked ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width={"1.2rem"}
                            height={"1.2rem"}
                          >
                            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width={"1.2rem"}
                            height={"1.2rem"}
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        )}
                      </div>

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
                            {/* <button
                            onClick={() => onCheckAnswer(index)}
                            className="px-3 py-2 w-full sm:w-auto bg-black rounded text-white"
                          >
                            Check
                          </button> */}
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
    </div>
  );
};

export default QuestCard;
