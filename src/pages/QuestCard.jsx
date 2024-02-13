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
