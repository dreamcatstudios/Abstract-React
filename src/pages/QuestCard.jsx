import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js";
import { animateScroll as scroll } from "react-scroll";

const QuestCard = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

  const [questionStatus, setQuestionStatus] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 150, smooth: true });
  };

  // Define your secret key for decryption
  const decryptionKey = "absd*U#(Eajdn";

  // Encrypted data obtained from pre-encryption step
  const encryptedData =
    "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";

  // Decrypt the encrypted data using AES decryption
  const bytes = CryptoJS.AES.decrypt(encryptedData, decryptionKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  // Use the decrypted data as your questData object
  const [questData, setQuestData] = useState(decryptedData);

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
    console.log("userAnswer: ", userAnswer);
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
    scrollToTop();
    const correctAnswer = selectedQuest.learningPath[index].answer;
    const currentQuest = questData[name.toLowerCase()];

    if (questionStatus[index] !== undefined) {
      toast.error("You have already answered this question.");
      return;
    }

    const submittedAnswer =
      userAnswer.trim() || selectedQuest.learningPath[index].options[0];
    const isCorrect =
      submittedAnswer.toLowerCase() === correctAnswer.toLowerCase();

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
    scrollToTop();
    toast.success("File Downloaded! Check your downloads folder");
  };

  const finishData = () => {
    scrollToTop();
    const answeredQuestions = Object.keys(questionStatus).map(Number);
    const currentQuest = questData[name.toLowerCase()];
    const learningPath = currentQuest.learningPath;

    if (answeredQuestions.length === learningPath.length) {
      // Calculate maxPoints
      const maxPoints = learningPath.length;
      setMaxPoints(maxPoints);

      // Extract correct and incorrect indices
      const correctIndices = [];
      const incorrectIndices = [];

      learningPath.forEach((item, index) => {
        if (questionStatus[index]) {
          correctIndices.push(index);
        } else {
          incorrectIndices.push(index);
        }
      });

      // Send data to Scores component
      const dataToSend = {
        correct: correctIndices,
        incorrect: incorrectIndices,
        questions: learningPath.map((item) => item.title),
        explanation: learningPath.map((item, index) =>
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
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] h-full w-full min-h-screen">
      <div className="h-full w-full container flex flex-col justify-center items-center">
        <ToastContainer />
        <div className="w-full h-full flex flex-col justify-between ">
          <div className="border border-[#fafafa] p-5 mt-5 mb-5">
            <div className="flex-col">
              <img
                src={selectedQuest.img}
                alt="profile-photo"
                className="w-full h-36 sm:h-64 object-cover mb-2 rounded-sm"
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
                            <div className="flex gap-3 items-center flex-col sm:flex-row align-middle mt-2">
                              <select
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                onClick={onInputClick} // Bind the onInputClick function here
                                className="h-10 p-2 w-full sm:w-auto text-black rounded-sm border border-black"
                              >
                                {item.options.map((option, i) => (
                                  <option key={i} value={option}>
                                    {" "}
                                    {option}{" "}
                                  </option>
                                ))}
                              </select>

                              <button
                                onClick={() =>
                                  onAnswerSubmit(index, userAnswer)
                                }
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
