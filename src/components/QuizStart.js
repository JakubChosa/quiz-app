import React, { useContext } from "react";
import { Context } from "../Context";

export default function QuizStart() {
  const { setQuizState } = useContext(Context);

  return (
    <div className="quiz-content">
      <div className="quiz-stage">
        <h3 className="quiz-stage--text">Questions</h3>
        <p className="quiz-start-subtitle">Can you guess everything ?</p>
      </div>
      <button className="primary-btn" onClick={() => setQuizState("game")}>
        Let's begin!
      </button>
    </div>
  );
}
