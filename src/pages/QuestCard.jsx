import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js"; // Import CryptoJS
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
    scrollToTop();
    toast.success("File Downloaded! Check your downloads folder");
  };

  const finishData = () => {
    // Check if all questions are answered
    scrollToTop();
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
    <div class="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] h-full w-full min-h-screen">
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
