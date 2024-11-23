import React, { useMemo } from "react";
import Layout from "./Layout";

const QuestionScreen = ({
  question,
  questionNumber,
  totalQuestions,
  timeLeft,
  onAnswerSelect,
}) => {
  // Shuffle answers using useMemo to avoid reshuffling on every re-render
  const shuffledAnswers = useMemo(() => {
    const answers = [...question.answers];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }, [question.answers]);

  return (
    <Layout title={"Question"}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 py-10 ">
        <h3 className="text-4xl font-bold mb-8 text-gray-800 flex items-center justify-center">
          <img
            src="src/public/q-and-a-ezgif.gif"
            alt="nothing"
            srcset=""
            className="w-14 h-14 inline-block mr-2"
          />
          - {question.context}
        </h3>
        <div className="question-tracker mb-4 text-gray-700">
          Question {questionNumber} of {totalQuestions}
        </div>
        <div className="timer mb-4 text-gray-700">
          Time left: {timeLeft} seconds
        </div>
        <div className="question-container bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            {question.question}
          </h2>
          <ul>
            {shuffledAnswers.map((answer, index) => (
              <li key={index} className="mb-3">
                <button
                  onClick={() => onAnswerSelect(answer)}
                  className="bg-gray-200 px-4 py-2 rounded-full w-full text-left text-gray-700 hover:bg-gray-300 transition duration-300"
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionScreen;
