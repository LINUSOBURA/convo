import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import LevelSelection from "./components/LevelSelection";
import QuestionScreen from "./components/QuestionScreen";
import ReportScreen from "./components/ReportScreen";
import LoadingScreen from "./components/LoadingScreen";
import questions from "./quizes.json";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showReport, setShowReport] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [context, setContext] = useState(null);
  const [level, setLevel] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  useEffect(() => {
    if (context && level) {
      const contextQuestions = questions.filter(
        (q) => q.context === context && q.level === level
      );
      const shuffledQuestions = contextQuestions;
      setRandomQuestions(shuffledQuestions);
    }
  }, [context, level]);

  useEffect(() => {
    if (timeLeft > 0 && randomQuestions.length > 0 && !showReport) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && randomQuestions.length > 0 && !showReport) {
      handleAnswerSelect(null);
    }
  }, [timeLeft, randomQuestions, showReport]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => [...prev, answer]);
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      setShowReport(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowReport(false);
    setTimeLeft(30);
    setShowWelcome(true);
    setShowLevelSelection(false);
    setRandomQuestions([]);
  };

  const handleContextSelect = (selectedContext) => {
    setContext(selectedContext);
    setShowWelcome(false);
    setShowLevelSelection(true);
  };

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
    setShowLevelSelection(false);
  };

  if (showWelcome)
    return <WelcomeScreen onSelectContext={handleContextSelect} />;
  else if (showWelcome) return <LoadingScreen />;
  if (showLevelSelection)
    return <LevelSelection onSelectLevel={handleLevelSelect} />;
  if (randomQuestions.length === 0) return <LoadingScreen />;
  if (showReport)
    return (
      <ReportScreen
        randomQuestions={randomQuestions}
        selectedAnswers={selectedAnswers}
        onRestart={handleRestart}
      />
    );

  return (
    <QuestionScreen
      question={randomQuestions[currentQuestionIndex]}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={randomQuestions.length}
      timeLeft={timeLeft}
      onAnswerSelect={handleAnswerSelect}
    />
  );
};

export default App;
