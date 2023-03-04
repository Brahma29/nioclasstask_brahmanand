import React from 'react';
import PropTypes from 'prop-types';
import { MathJax } from 'better-react-mathjax';

function QuestionCard({ questionNumber, questionContent }) {
  return (
    <div className="max-w-5xl p-5 mt-4 mb-4 text-xl md:text-2xl bg-white shadow-lg shadow-gray-400 rounded-lg w-full lg:w-[64rem]">
      <div className="card bg-base-100">
        <div className="text-center card-body">
          <h2 className="mb-4 card-title">Question No : {questionNumber}</h2>
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
