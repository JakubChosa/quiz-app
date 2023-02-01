import React, { useContext } from "react";
import QuestionDisplay from "./QuestionDisplay";
import { BounceLoader } from "react-spinners";
import { Context } from "../Context";

export default function QuizQuestionst() {
  const { questions, setQuizState } = useContext(Context);
  const questionElements = questions.map((question) => (
    <QuestionDisplay
      optionBackground="quiz"
      item={question}
      key={question.id}
    />
  ));

  return (
    <div className="quiz-content">
      <h3 className="quiz-stage--text">Questions</h3>
      {questionElements}
      {questions.length === 0 && <BounceLoader />}
      <button className="primary-btn" onClick={() => setQuizState("result")}>
        Check Answers
      </button>
    </div>
  );
}
