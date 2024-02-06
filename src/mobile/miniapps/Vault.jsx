import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const securityQuestions = [
  { question: "What is your favorite color?", answer: "blue" },
  { question: "What is your pet's name?", answer: "milo" },
  { question: "Where were you born?", answer: "city" },
];

const Vault = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [password, setPassword] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showVaultContent, setShowVaultContent] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);

  const handleLogin = () => {
    if (password === "your_password") {
      toast.success("Correct password. Welcome!", {
        position: "bottom-center",
      });

      setShowVaultContent(true);
    } else {
      toast.error("Incorrect password. Try again.", {
        position: "bottom-center",
      });
    }
  };

  const handleForgotPassword = () => {
    setForgotPasswordMode(true);
  };

  const handleSubmitForgotPassword = () => {
    if (!selectedQuestion || !answer) {
      toast.error("Please select a security question and provide an answer.", {
        position: "bottom-center",
      });
      return;
    }

    const selectedQuestionObj = securityQuestions.find(
      (q) => q.question === selectedQuestion
    );

    if (
      !selectedQuestionObj ||
      selectedQuestionObj.answer.toLowerCase() !== answer.toLowerCase()
    ) {
      toast.error("Incorrect security question answer. Try again.", {
        position: "bottom-center",
      });
      return;
    }

    setShowVaultContent(true);
    setForgotPasswordMode(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex rounded-md flex-col justify-center items-center relative h-full bg-black ">
        {/* Notch Code */}
        <div className="w-full flex justify-around top-2 absolute ">
          <h1 className="text-white">{time.slice(0, time.lastIndexOf(":"))}</h1>
          <div className="bg-black p-[12px] rounded-[100%]"></div>
          <div className="flex gap-1">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                fill="currentColor"
                d="m12 21l3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2L12 21m0-18C7.95 3 4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C19.79 4.34 16.05 3 12 3m0 6c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c2.03 0 3.9.67 5.4 1.8l1.8-2.4C17.19 9.89 14.7 9 12 9Z"
              ></path>
            </svg>
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                fill="currentColor"
                d="M19.5 5.5v13h-2v-13h2M21 4h-5v16h5V4m-7 5H9v11h5V9m-7 5H2v6h5v-6Z"
              ></path>
            </svg>
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                fill="currentColor"
                d="M16 14H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z"
              ></path>
            </svg>
          </div>
        </div>
        {/* Notch Code */}

        {/* <-- Vault Code --> */}

        <div className="h-full w-full flex items-center justify-center">
          <div className="w-full h-full  flex flex-col justify-center items-center">
            <div className=" p-8  rounded-md shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Vault</h2>

              {showVaultContent ? (
                <p>{`Hi, your answer is {key}`}</p>
              ) : (
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 p-2 border rounded-md w-full text-black"
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      onClick={handleLogin}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p
                      className="text-sm cursor-pointer"
                      onClick={handleForgotPassword}
                    >
                      Forgot Password?
                    </p>
                    {forgotPasswordMode && (
                      <div>
                        <div className="mt-2">
                          <select
                            value={selectedQuestion}
                            onChange={(e) =>
                              setSelectedQuestion(e.target.value)
                            }
                            className="p-2 border rounded-md text-black"
                          >
                            <option value="" disabled>
                              Select Security Question
                            </option>
                            {securityQuestions.map((q) => (
                              <option key={q.question} value={q.question}>
                                {q.question}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="answer"
                            className="block text-sm font-medium text-black"
                          >
                            Answer
                          </label>
                          <input
                            type="text"
                            id="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="mt-1 p-2 border rounded-md w-full text-black"
                          />
                        </div>
                        <div className="mt-4">
                          <button
                            onClick={handleSubmitForgotPassword}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <-- Vault Code --> */}
      </div>
    </>
  );
};

export default Vault;
