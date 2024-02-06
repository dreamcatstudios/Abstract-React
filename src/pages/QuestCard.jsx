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
