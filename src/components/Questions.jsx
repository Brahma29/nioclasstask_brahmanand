/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard';

function Questions({ questions }) {
  const [question, setQuestion] = useState(null);

  const onQuestionNavigate = (action) => {
    if (action === 'prev') {
      setQuestion((prev) => ({
        number: prev.number - 1,
        content: questions[prev.number - 1].Question,
      }));
    } else if (action === 'next') {
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
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4 bg-gray-200">
      <h1 className="text-3xl italic font-bold text-center">NIO Class</h1>
      <div className="flex flex-col items-center justify-center ">
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
            onClick={() => onQuestionNavigate('prev')}
            className="px-4 py-2 mr-1 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 disabled:bg-slate-400"
          >
            Previous
          </button>
          <button
            disabled={!question || question?.number === questions.length - 1}
            type="button"
            onClick={() => onQuestionNavigate('next')}
            className="px-4 py-2 ml-1 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 disabled:bg-slate-400"
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
