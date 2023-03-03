import wrapper from "./wrapper";

export const getQuestion = (id) =>
  wrapper.get("/getquestiondetails", { params: { QuestionID: id } });
