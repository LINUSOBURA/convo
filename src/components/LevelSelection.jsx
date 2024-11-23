import React from "react";
import Layout from "./Layout";

const LevelSelection = ({ onSelectLevel }) => (
  <Layout title={"Level"}>
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Choose Your Proficiency Level
      </h1>
      <p className="mb-4">
        Only bite what you can chew😁, but remember,{" "}
        <span className="text-green-600 font-bold">sky is the limit!</span>
      </p>
      <div className="level-options grid grid-cols-3 gap-4 mt-4">
        {["beginner", "intermediate", "advanced"].map((level) => (
          <button
            key={level}
            onClick={() => onSelectLevel(level)}
            className="bg-white p-4 rounded-lg shadow-lg text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  </Layout>
);

export default LevelSelection;
