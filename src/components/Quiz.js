import React, { useContext } from "react";
import { Context } from "../Context";
import QuizStart from "./QuizStart";
import QuizQuestions from "./QuizQuestions";
import QuizResult from "./QuizResult";

export default function Quiz() {
  const { quizState, error } = useContext(Context);

  return (
    <div className="quiz-container">
      {quizState === "start" && <QuizStart />}
      {quizState === "game" && error && (
        <h1 className="error">Sorry it seems like there was a problem</h1>
      )}
      {quizState === "game" && !error && <QuizQuestions />}
      {quizState === "result" && !error && <QuizResult />}
    </div>
  );
}
