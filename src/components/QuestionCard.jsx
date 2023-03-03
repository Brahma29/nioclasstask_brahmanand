import React from "react";
import PropTypes from "prop-types";
import { MathJax } from "better-react-mathjax";

function QuestionCard({ questionNumber, questionContent }) {
  return (
    <div className="text-2xl w-full bg-indigo-300 p-5 mb-4 mt-4 rounded-lg">
      <div className="card  bg-base-100">
        <div className="card-body text-center">
          <h2 className="card-title mb-4">Question No : {questionNumber}</h2>
          <p>
            <MathJax dynamic>{questionContent}</MathJax>
          </p>
        </div>
      </div>
    </div>
  );
}

QuestionCard.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  questionContent: PropTypes.string.isRequired,
};

export default QuestionCard;
