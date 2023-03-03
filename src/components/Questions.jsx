/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QuestionCard from "./QuestionCard";

function Questions({ questions }) {
  const [question, setQuestion] = useState(null);

  const onQuestionNavigate = (action) => {
    if (action === "prev") {
      setQuestion((prev) => ({
        number: prev.number - 1,
        content: questions[prev.number - 1].Question,
      }));
    } else if (action === "next") {
      setQuestion((prev) => ({
        number: prev.number + 1,
        content: questions[prev.number + 1].Question,
      }));
    }
  };

  useEffect(() => {
    setQuestion({ number: 0, content: questions[0].Question });
  }, []);

  return (
    <div className="m-3">
      <h1 className="text-3xl text-center font-bold italic">NIO Class</h1>
      <div className="h-full flex justify-center items-center flex-col">
        <div>
          {question ? (
            <QuestionCard
              questionNumber={question.number + 1}
              questionContent={question.content}
            />
          ) : null}
        </div>
        <div className="inline-flex">
          <button
            disabled={!question || question?.number === 0}
            type="button"
            onClick={() => onQuestionNavigate("prev")}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-1 disabled:bg-slate-400"
          >
            Previous
          </button>
          <button
            disabled={!question || question?.number === questions.length - 1}
            type="button"
            onClick={() => onQuestionNavigate("next")}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-1 disabled:bg-slate-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

Questions.propTypes = {
  questions: PropTypes.instanceOf(Array).isRequired,
};

export default Questions;
