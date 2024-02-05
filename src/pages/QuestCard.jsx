import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestCard = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

  const [questionStatus, setQuestionStatus] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  const [questData, setQuestData] = useState({
    alex_01: {
      img: "/assets/location.jpg",
      downloadable: true,
      title: "Alex_File01 - Report",
      fileName: "Location_data.csv",
      points: 0,
      answer: "test",
      fileDownload: "/assets/location_sheet.csv",
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
          explanation: "He lives in Wisconsin. ",
          options: "[Wisconsin, Texas, California]",
        },
        {
          level: 2,
          title: "In which field does this person work?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation:
            "He works in the IT field because he constantly visits the IT firm.",
          options: "[Engineering, Information Technology, Accounting]",
        },
        {
          level: 3,
          title: "Does this individual have any dependent children?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation:
            "Yes, he visits multiple locations such as a playhouse and playground, suggesting that he has children.",
          options: "[yes, no, can't say]",
        },
        {
          level: 4,
          title: "Is this person presently managing any chronic health issues?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation:
            "No, there's no location that suggests he constantly visits a hospital. So, we can't say he has any chronic health issues.",
          options: "[yes, no, can't say]",
        },
        {
          level: 5,
          title:
            "Which religious affiliation does this individual identify with?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation: "Because he constantly visits the Jewish church.",
          options: "[Judaism, Christianity, Islam]",
        },
      ],
    },
    grace_02: {
      img: "/assets/medical.jpg",
      downloadable: true,
      title: "95600_File02 - Report",
      fileName: "Medical_data.csv",
      fileDownload: "/assets/medical_data.csv",
      points: 0,
      answer: "test",
      downloadTag: "Grace Data - Download",
      description:
        "Medical information was unfortunately part of a recent data breach, a disconcerting trend given the increasing number of healthcare organizations and tech companies collecting sensitive health data without robust protection measures in place.",
      learningPath: [
        {
          level: 1,
          title: "Does this individual have any medical conditions?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation: "Yes, patient 95600 suffers from sleep disorders.",
          options: "[Yes, No, Cannot Say]",
        },
        {
          level: 2,
          title:
            "Based on the information provided, what would be the most probable gender identification of this individual?",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation:
            "She is female because average female testosterone levels range between Female: 15 to 70 ng/dL or 0.5 to 2.4 nmol/L.",
          options: "[Male, Female, cannot say]",
        },
        {
          level: 3,
          title:
            "Approximately how old is this individual? Kindly choose an option that best fits the given data",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation: "Patient 95600 is 33 years old.",
          options:
            "[Mid-twenties to early thirties, Mid-thirties to forties, Mid-forties to fifties]",
        },
        {
          level: 4,
          title: "Does this individual have any offspring?",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation: "Insufficient data is given so can't say.",
          options: "[yes, can't say, no]",
        },
        {
          level: 5,
          title:
            "Estimate the approximate height range of this individual based on the available information.",
          clicked: false,
          disabled: false,
          answer: "3",
          explanation:
            "Insufficient data is given, so can't say. This is because of this.",
          options: "[Over 175 cm, Between 160-175 cm, can't say]",
        },
      ],
    },
    ethan_03: {
      img: "/assets/search.jpg",
      downloadable: true,
      title: "Ethan_File03 - Report",
      fileName: "Search_data.csv",
      points: 0,
      fileDownload: "/assets/search_queries.csv",
      downloadTag: "Ethan Data - Download",
      description:
        "Ethan’s search history was exposed, raising concerns over increasing privacy violations, as numerous websites and ad networks monitor users’ browsing activities to deliver personalized content and targeted ads.",
      learningPath: [
        {
          level: 1,
          title: " Does Ethan own any pets?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation:
            "Yes, since many search queries relate to Maine coons, a cat breed.",
          options: ["Yes, Unclear, No"],
        },
        {
          level: 2,
          title: " What is Ethan’s favorite sport?",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation:
            "Probably football, given the frequent searches on UEFA and similar leagues.",
          options: ["Rugby, Football, Basketball"],
        },
        {
          level: 3,
          title: "Which athlete is Ethan most likely to favor?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation: "Likely Cristiano Ronaldo due to multiple searches.",
          options: ["Cristiano Ronaldo, Conor McGregor, LeBron James"],
        },
        {
          level: 4,
          title: "On which side of the political spectrum is Ethan leaning?",
          clicked: false,
          disabled: false,
          answer: "3",
          explanation:
            "Many searches involve capitalism, suggesting an inclination toward it.",
          options: ["Socialism, Communism, Capitalism"],
        },
        {
          level: 5,
          title: " Which major is Ethan most probably pursuing?",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation:
            "Numerous journalism-related searches suggest he studies journalism.",
          options: ["Engineering, Journalism, Psychology"],
        },
      ],
    },
    deepfake_04: {
      img: "/assets/deepfake.jpg",
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
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "Which image was a deepfake within Dataset_2?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 3,
          title: "Which image was a deepfake within Dataset_3?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "Which image was a deepfake within Dataset_4?",
          clicked: false,
          disabled: false,
          answer: "test4",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "Which image was a deepfake within Dataset_5?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
      ],
    },
    samuel_05: {
      img: "/assets/creditCard.jpg",
      downloadable: true,
      title: "Samuel File05 - Report",
      fileName: "Credit_Transactions.csv",
      points: 0,
      fileDownload: "/assets/transactions.csv",
      downloadTag: "Samuel Data - Download",
      description:
        "A credit transaction data leak has affected Samuel, highlighting concerns around financial data security as businesses adopt digital payments without implementing robust cyber attack defenses.",
      learningPath: [
        {
          level: 1,
          title: "What do we know about this person's usual purchases?",
          clicked: false,
          disabled: false,
          answer: "3",
          explanation:
            "He has spent a total of $128.00 on groceries and $369.99 on entertainment.",
          options: ["Groceries", "Unable to determine", "Entertainment"],
        },
        {
          level: 2,
          title:
            "What can we infer about this individual's dietary preferences from the data?",
          clicked: false,
          disabled: false,
          answer: "3",
          explanation:
            "Expenses include fast food (Wendy's, McDonald's, Popeyes), dessert places (Baskin Robbins), and grocery stores. The exact food items aren't specified, making it challenging to definitively classify their dietary preference as vegan, non-vegetarian, or otherwise.",
          options: ["Vegan", "Non-vegetarian", "Can't tell"],
        },
        {
          level: 3,
          title: "What do we know about this person's relocation history?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation:
            "We observe fluctuations in rental payments, suggesting that they may have moved at some point.",
          options: ["Moved", "Uncertain", "Not recently changed residences"],
        },
        {
          level: 4,
          title:
            "How would you describe this person's current financial status?",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation:
            "Increasing credit card debt coupled with a low credit score indicates a financially precarious position.",
          options: ["Good", "Poor", "Cannot say."],
        },
        {
          level: 5,
          title:
            "Based on available data, how many people live in this person's household?",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation:
            "There is no relevant information provided regarding the number of residents in the household within the dataset.",
          options: [
            "Lives alone",
            "Undecipherable",
            "Cohabits with family members",
          ],
        },
      ],
    },
    aurora_06: {
      img: "/assets/charity.jpg",
      downloadable: true,
      title: "Aurora_File05 - Report",
      fileName: "Fitness.jpg",
      points: 0,
      fileDownload: "/assets/activityTracker.png",
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
          explanation: "This is because of this",
          options: "[early bird,can't tell,late riser]",
        },
        {
          level: 2,
          title: "What do we know about this person's lifestyle?",
          clicked: false,
          disabled: false,
          answer: "test2",
          explanation: "This is because of this",
          options: "[athletic,can't tell,unfit]",
        },
        {
          level: 3,
          title: "What do we know about this person's workspace?",
          clicked: false,
          disabled: false,
          answer: "test3",
          explanation: "This is because of this",
          options: "[office,can't tell,physical activity]",
        },
        {
          level: 4,
          title: "What do we know about this person's age?",
          clicked: false,
          disabled: false,
          answer: "test4",
          explanation: "This is because of this",
          options: "[rather young,can't tell,rather old]",
        },
        {
          level: 5,
          title: "What do we know about this person's attitude?",
          clicked: false,
          disabled: false,
          answer: "test5",
          explanation: "This is because of this",
          options: "[lazy,can't tell,busy]",
        },
      ],
    },
    natalie_07: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      downloadable: false,
      title: "Natalie_File07 - Report",
      fileName: "App_usage",
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
          explanation: "This is because of this",
          options:
            "[politically engaged, mainstream media consumer, alternative sources]",
        },
        {
          level: 2,
          title: "What do we know about Natalie's language proficiency?",
          answer: "test2",
          explanation: "This is because of this",
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
          explanation: "This is because of this",
          options: "[frequent user, moderate user, seldom user]",
        },
        {
          level: 4,
          title: "What do we know about Natalie's technology usage?",
          clicked: false,
          disabled: false,
          answer: "test4",
          explanation: "This is because of this",
          options:
            "[smartphone addict, computer reliant, minimalistic approach]",
        },
        {
          level: 5,
          title: "What do we know about Natalie's relationship status?",
          clicked: false,
          disabled: false,
          answer: "test5",
          explanation: "This is because of this",
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
          explanation: "This is because of this",
          options: "",
        },
      ],
    },
    jim_09: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      downloadable: true,
      title: "Jim_File09 - Report",
      fileName: "Smart_Home.csv",
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
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 2,
          title: "Is Khushy a vegetarian or a non-vegetarian?",
          clicked: false,
          disabled: false,
          answer: "test2",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 3,
          title:
            "Which city did Khushy work in before moving to the current location?",
          clicked: false,
          disabled: false,
          answer: "test3",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 4,
          title: "What is Khushy's dream job?",
          clicked: false,
          disabled: false,
          answer: "test4",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
        {
          level: 5,
          title: "Does Khushy own any pets?",
          clicked: false,
          disabled: false,
          answer: "test5",
          explanation: "This is because of this",
          options: "[1,2,3]",
        },
      ],
    },
    adam_10: {
      img: "https://s3-eu-west-1.amazonaws.com/privacyquest-storage/quests/4/image.png",
      downloadable: true,
      title: "Adam_File05 - Comprehensive Activity Report Analysis",
      fileName: "Heatmap.zip",
      points: 0,
      fileDownload: "/assets/heatmap.zip",
      downloadTag: "Adam Data - Download",
      description:
        "Heatmaps record user clicks, scrolls, and navigation on a website, indicating hotspots through color intensity. Website owners use these insights to analyze user interactions, pinpoint popular elements, and enhance layouts for effective advertising.",
      learningPath: [
        {
          level: 1,
          title: "What kind of headphones did Adam look for?",
          clicked: false,
          disabled: false,
          answer: "1",
          explanation: "Based on this reasoning:",
          options: ["TWS, Other, Not sure"],
        },
        {
          level: 2,
          title: "What was Adam's target price range for headphones?",
          answer: "1",
          explanation:
            "As most displayed headphones fall within $200 based on the heatmap analysis.",
          clicked: false,
          disabled: false,
          options: ["Under $200, Over $200, Can't tell"],
        },
        {
          level: 3,
          title: "Did Adam subscribe to any newsletters?",
          clicked: false,
          disabled: false,
          answer: "2",
          explanation:
            "The heatmap suggests minimal interaction with the newsletter area.",
          options: ["Yes, No, Can't tell"],
        },
        {
          level: 4,
          title: "Did Adam purchase headphones during his visit?",
          clicked: false,
          disabled: false,
          answer: "3",
          explanation:
            "Although the interest is evident from the product page heatmap, no corresponding data exists for the checkout process.",
          options: ["Yes, No, Can't tell"],
        },
        {
          level: 5,
          title: "How often does Adam shop online?",
          clicked: false,
          disabled: false,
          answer: "test5",
          explanation: "Based on this reasoning:",
          options: ["Frequently, Occasionally, Rarely"],
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

  useEffect(() => {
    const storedQuestionStatus = localStorage.getItem(
      `${name.toLowerCase()}_question_status`
    );

    setQuestionStatus((prevQuestionStatus) => ({
      ...prevQuestionStatus,
      ...(storedQuestionStatus ? JSON.parse(storedQuestionStatus) : {}),
    }));
  }, [name]);

  useEffect(() => {
    localStorage.setItem(
      `${name.toLowerCase()}_question_status`,
      JSON.stringify(questionStatus)
    );
  }, [name, questionStatus]);

  const onAnswerSubmit = (index) => {
    const correctAnswer = selectedQuest.learningPath[index].answer;
    const currentQuest = questData[name.toLowerCase()];

    if (questionStatus[index] !== undefined) {
      toast.error("You have already answered this question.");
      return;
    }

    const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

    setQuestionStatus((prev) => ({
      ...prev,
      [index]: isCorrect,
    }));

    toast.success(isCorrect ? "Answer Submitted!!" : "Answer Submitted!!");

    if (isCorrect) {
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

  const finishData = () => {
    // Check if all questions are answered
    const answeredQuestions = Object.keys(questionStatus).map(Number);

    if (answeredQuestions.length === selectedQuest.learningPath.length) {
      // Calculate maxPoints
      const maxPoints = selectedQuest.learningPath.length;
      setMaxPoints(maxPoints);

      // Extract correct and incorrect indices
      const correctIndices = answeredQuestions.filter(
        (index) => questionStatus[index]
      );
      const incorrectIndices = answeredQuestions.filter(
        (index) => !questionStatus[index]
      );

      // Send data to Scores component
      const dataToSend = {
        correct: correctIndices,
        incorrect: incorrectIndices,
        questions: selectedQuest.learningPath.map((item) => item.title),
        explanation: selectedQuest.learningPath.map((item, index) =>
          questionStatus[index] ? "" : item.explanation
        ),
      };

      // Use history object to navigate and send data as state
      navigate("/scores", { state: { data: dataToSend } });
    } else {
      toast.error("Please answer all questions before finishing.");
    }
  };

  return (
    <div class="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] h-full w-full">
      <div className="h-full w-full container flex flex-col justify-center items-center">
        <ToastContainer />
        <div className="w-full h-full flex flex-col justify-between ">
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
                      to={questData[name].fileDownload}
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
                  {questionStatus[index] === undefined ? (
                    item.disabled ? (
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
                    )
                  ) : (
                    <div className="bg-gray-800  items-center p-5 mt-2 rounded-sm flex-col">
                      <p className="text-white">{`${item.level} - This item has already been answered`}</p>
                      {/* You can display a message or any other content for disabled items */}
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
      </div>
    </div>
  );
};

export default QuestCard;
