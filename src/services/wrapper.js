import axios from "axios";

const wrapper = axios.create({
  baseURL:
    "https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails",
});

export default wrapper;
