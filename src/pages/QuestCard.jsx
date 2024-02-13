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
                                className="h-10 p-2 w-full sm:w-auto text-black rounded-sm"
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
