import React, { useEffect, useState } from "react";
import { getQuestion } from "./services/questions";
import Questions from "./components/Questions";
import Loader from "./components/Loader";

const questionIds = [
  "AreaUnderTheCurve_901",
  "BinomialTheorem_901",
  "DifferentialCalculus2_901",
];

function App() {
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

  return questions.length === 0 ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <div>
      <Questions questions={questions} />{" "}
    </div>
  );
}

export default App;
