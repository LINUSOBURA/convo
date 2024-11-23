import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Layout from "./Layout";

const ReportScreen = ({ randomQuestions, selectedAnswers, onRestart }) => {
  const correctAnswers = selectedAnswers.filter(
    (answer, index) => answer === randomQuestions[index].correctAnswer
  );
  const score = Math.floor(
    (correctAnswers.length / randomQuestions.length) * 100
  );

  const [showConfetti, setShowConfetti] = useState(false);
  const [showPerfectScoreDialog, setShowPerfectScoreDialog] = useState(false);

  useEffect(() => {
    if (score === 100) {
      setShowConfetti(true); // Trigger confetti if score is 100%
      setShowPerfectScoreDialog(true); // Show dialog
    }
  }, [score]);

  return (
    <Layout title={"Report"}>
      {showConfetti && <Confetti />}

      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 py-6 px-4">
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

      {/* Perfect Score Dialog */}
      {showPerfectScoreDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Congratulations! 🎉
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              You achieved the perfect score!
            </p>
            <button
              onClick={() => setShowPerfectScoreDialog(false)}
              className="bg-lime-500 text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ReportScreen;
