import React, { useContext, useEffect } from "react";
import QuestionDisplay from "./QuestionDisplay";
import { Context } from "../Context";

export default function QuizStart() {
  const { questions, setQuizState, setGetNewData, setQuestions } =
    useContext(Context);
  const [score, setScore] = React.useState(0);

  useEffect(() => {
    setScore(
      questions.filter(
        (question) => question.user_answer === question.correct_answer
      ).length
    );
  }, [questions]);
  const questionElements = questions.map((question) => (
    <QuestionDisplay
      optionBackground="result"
      item={question}
      key={question.id}
    />
  ));

  return (
    <div className="quiz-content">
      <h3 className="quiz-stage--text">Results</h3>
      {questionElements}
      <div className="quiz-results">
        <p className="quiz-results--text">Correct Answers {score}/5</p>
        <button
          className="primary-btn"
          onClick={() => {
            setQuestions([]);
            setGetNewData((prevState) => !prevState);

            setQuizState("game");
          }}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
