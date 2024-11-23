import React from "react";
import Layout from "./Layout";

const ReportScreen = ({ randomQuestions, selectedAnswers, onRestart }) => {
  const correctAnswers = selectedAnswers.filter(
    (answer, index) => answer === randomQuestions[index].correctAnswer
  );
  const score = Math.floor(
    (correctAnswers.length / randomQuestions.length) * 100
  );

  return (
    <Layout title={"Report"}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 py-6">
        <h2 className="text-3xl font-bold mb-4">Game Over</h2>
        <p className="text-xl mb-2">Your score: {score}%</p>
        <p className="text-xl mb-4">
          Correct answers: {correctAnswers.length}/{randomQuestions.length}
        </p>
        <div className="results-container w-3/4 bg-white p-4 rounded-lg shadow-lg mb-4">
          {randomQuestions.map((question, index) => (
            <div key={index} className="result-item mb-4">
              <p className="font-semibold">{question.question}</p>
              {selectedAnswers[index] === question.correctAnswer ? (
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-green-500">Correct!</p>
                </div>
              ) : (
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-500">
                    Incorrect. Your answer: {selectedAnswers[index]}
                  </p>
                  <p className="text-green-500">
                    Correct answer: {question.correctAnswer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={onRestart}
          className="bg-lime-500 text-white px-6 py-3 rounded-full text-lg"
        >
          Restart Game
        </button>
      </div>
    </Layout>
  );
};

export default ReportScreen;
