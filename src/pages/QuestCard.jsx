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
