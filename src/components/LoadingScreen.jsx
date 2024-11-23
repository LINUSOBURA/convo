import React from "react";

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen bg-green-50 flex-col">
    <p>Atiam greatness ahead...</p>
    <img
      src="src/public/progress-ezgif.gif"
      alt=""
      srcset=""
      className="w-36 h-36"
    />
  </div>
);

export default LoadingScreen;
