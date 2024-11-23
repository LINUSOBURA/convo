import React, { useState } from "react";
import Layout from "./Layout";

const WelcomeScreen = ({ onSelectContext }) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleLearnMoreClick = () => {
    setShowInstructions(true);
  };

  const closeInstructions = () => {
    setShowInstructions(false);
  };

  return (
    <Layout title={"English Conversation Game"}>
      <div className="min-h-screen bg-green-50 flex flex-col md:flex-row items-center md:px-5 lg:px-10 px-4 py-8">
        <div className="flex flex-col items-center md:flex-auto">
          <img src="/opinion-ezgif.gif" alt="Game Icon" className="w-24 h-24" />
          <h1 className="text-xl md:text-2xl font-bold mb-8 text-gray-800 text-center">
            Welcome to the English Conversation Game
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Choose a context for your conversation:
          </p>
          <div className="context-options grid grid-cols-2 gap-4">
            {["market", "classroom", "hospital", "home"].map((context) => (
              <button
                key={context}
                onClick={() => onSelectContext(context)}
                className="bg-white p-4 rounded-lg shadow-lg text-gray-700 hover:bg-gray-100 transition duration-300"
              >
                {context.charAt(0).toUpperCase() + context.slice(1)}
              </button>
            ))}
          </div>

          {/* Learn How to Play Button */}
          <button
            onClick={handleLearnMoreClick}
            className="bg-lime-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-lime-400 transition duration-300"
          >
            Learn How to Play
          </button>
        </div>

        <div className="w-full md:w-1/3">
          <img src="/hero.png" alt="Game Illustration" />
        </div>
      </div>

      {/* Instructions Dialog */}
      {showInstructions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How to Play
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              In this game, you will engage in simulated conversations with
              different contexts. You need to answer the questions presented in
              each context (e.g., market, classroom, hospital, or home). Choose
              the correct answers to progress through the game.
            </p>
            <ul className="text-left text-lg text-gray-700 mb-4">
              <li>1. Select a context to start your conversation.</li>
              <li>2. Answer the questions based on the given scenario.</li>
              <li>3. Your score will be displayed at the end of the game.</li>
            </ul>
            <button
              onClick={closeInstructions}
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

export default WelcomeScreen;
