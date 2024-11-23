import React from "react";
import Layout from "./Layout";

const WelcomeScreen = ({ onSelectContext }) => (
  <Layout title={"English Conversation Game"}>
    <div className="min-h-screen bg-green-50 flex flex-col md:flex-row items-center md:px-5 lg:px-10 px-4 py-8">
      <div className="flex flex-col items-center md:flex-auto ">
        <img
          src="src/public/opinion-ezgif.gif"
          alt=""
          srcset=""
          className="w-24 h-24"
        />
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
      </div>
      <div className="w-full md:w-1/3">
        <img src="src/public/hero.png" alt="" srcset="" className="" />
      </div>
    </div>
  </Layout>
);

export default WelcomeScreen;
