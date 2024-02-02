import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";

const Scores = () => {
  const location = useLocation();
  const { correct, incorrect, questions, explanation } =
    location.state.data || {};

  const incorrectQuestions = incorrect.map((index) => ({
    question: questions[index],
    explanation: explanation[index],
  }));

  useEffect(() => {
    console.log("data: ", location.state.data);
  }, []);

  const totalQuestions = correct.length + incorrect.length;
  const correctPercentage = (correct.length / totalQuestions) * 100;
  const incorrectPercentage = (incorrect.length / totalQuestions) * 100;

  const data = [
    { label: "Correct", value: correctPercentage },
    { label: "Incorrect", value: incorrectPercentage },
  ];

  const colorScale = ["#4CAF50", "#FF5252"];
  const width = Math.min(300, window.innerWidth - 20);
  const height = Math.min(300, window.innerWidth - 20);
  const radius = Math.min(width, height) / 2;

  return (
    <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen h-full first:w-full">
      <div className="container h-full w-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="border border-[#fafafa] p-5 mt-5 mb-5">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {incorrect.length > 0 && (
                <div className="mb-4">
                  <h1 className="text-white text-2xl mb-2 font-bold">
                    Incorrect Answers
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {incorrect.map((item, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full bg-white text-center text-black flex items-center justify-center"
                      >
                        {item + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {correct.length > 0 && (
                <div className="mb-4">
                  <h1 className="text-white text-2xl mb-2 font-bold">
                    Correct Answers
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {correct.map((item, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full bg-white text-center text-black flex items-center justify-center"
                      >
                        {item + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {incorrect.length > 0 && (
                <div className="border border-white p-4">
                  <h1 className="text-white text-2xl mb-2 font-bold">
                    Explanation for Incorrect Answers
                  </h1>
                  {incorrectQuestions.map((incorrectQuestion, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-white">{`${index + 1} - ${
                        incorrectQuestion.question
                      }`}</p>
                      <p className="text-white">
                        {incorrectQuestion.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col justify-center items-center mt-5 border border-[#fafafa] p-4">
                <h1 className="text-2xl font-bold">Score - Chart</h1>
                {totalQuestions > 0 ? (
                  <svg width={width} height={height}>
                    <Group top={height / 2} left={width / 2}>
                      <Pie
                        data={data}
                        pieValue={(d) => d.value}
                        outerRadius={radius}
                        innerRadius={0}
                        fill={(d) => colorScale[d.index]}
                      />
                    </Group>
                  </svg>
                ) : (
                  <p className="text-white">No questions answered</p>
                )}

                {totalQuestions === correct.length && totalQuestions > 0 && (
                  <p className="text-green-500 text-lg mt-4">
                    Congratulations! All answers are correct.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
