import React from "react";
import { useParams } from "react-router-dom";

const Question = () => {
  const { difficulty, number } = useParams();

  // Assuming you have questions for each difficulty level
  const questions = {
    easy: {
      1: {
        question: "What is the capital of France?",
        description: "Description for the capital of France.",
      },
      2: {
        question: "What is the capital of Germany?",
        description: "Description for the capital of Germany.",
      },
      3: {
        question: "What is the capital of Italy?",
        description: "Description for the capital of Italy.",
      },
      4: {
        question: "What is the capital of Spain?",
        description: "Description for the capital of Spain.",
      },
      5: {
        question: "What is the capital of Portugal?",
        description: "Description for the capital of Portugal.",
      },
    },
    medium: {
      1: {
        question: "Another question for medium difficulty...",
        description: "Description for another medium difficulty question.",
      },
      // Add more questions as needed
    },
    hard: {
      1: {
        question: "Another question for hard difficulty...",
        description: "Description for another hard difficulty question.",
      },
      // Add more questions as needed
    },
    superhard: {
      1: {
        question: "Another question for superhard difficulty...",
        description: "Description for another superhard difficulty question.",
      },
      // Add more questions as needed
    },
  };

  // Check if the selected difficulty and question number exist
  if (!questions[difficulty] || !questions[difficulty][number]) {
    return <div>Invalid difficulty or question number</div>;
  }

  const { question, description } = questions[difficulty][number];

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center mt-10 border border-[#333] p-3">
        <h1 className="text-4xl sm:text-5xl font-bold">{question}</h1>
        <p>{description}</p>

        <div className="flex gap-5 border border-[#333] p-3 w-full justify-between">
          <input
            className="pr-5 pt-2 rounded-sm w-full"
            required="true"
            type="text"
          />
          <button
            className="bg-white text-black pl-5 pr-5 p-2  rounded-sm"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
