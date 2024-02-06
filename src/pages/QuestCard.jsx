import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js"; // Import CryptoJS

const QuestCard = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);

  const [questionStatus, setQuestionStatus] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  // Define your secret key for decryption
  const decryptionKey = "testing123";

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
