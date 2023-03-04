import React, { useEffect, useState } from 'react';
import { getQuestion } from '../services/questions';
import Questions from '../components/Questions';
import Loader from '../components/Loader';

const questionIds = [
  'AreaUnderTheCurve_901',
  'BinomialTheorem_901',
  'DifferentialCalculus2_901',
];

const QuestionScreen = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestionsByIds = async () => {
    try {
      const responses = await Promise.all(
        questionIds.map((id) => getQuestion(id))
      );
      setQuestions((prev) => [...responses.map(({ data }) => data[0])]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchQuestionsByIds();
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {questions.length === 0 ? (
        <Loader />
      ) : (
        <Questions questions={questions} />
      )}
    </div>
  );
};

export default QuestionScreen;
