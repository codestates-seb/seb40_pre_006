import styled from "styled-components";

import QuestionTitle from "../components/DetailQuestionComp/QuestionTitle";
import QuestionContent from "../components/DetailQuestionComp/QuestionContent";
import { DetailQuestionInfoState } from "../atom/atom";

import axios from "axios";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import YourAnswer from "../components/DetailQuestionComp/YourAnswer";
import AnswerList from "../components/DetailQuestionComp/AnswerList";
import { getAnswerState, questionIdState } from "../atom/atom";

const Container = styled.div`
  width: 70vw;
  min-height: 700px;
  padding-left: 1.5%;

  /* background-color : #ffcbcb; */

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-right: 19px;
    margin-left: 19px;
  }
`;

const DetailQuestion = () => {
  const [questionInfo, setQuestionInfo] = useRecoilState(
    DetailQuestionInfoState
  );
  const [answerData, setAnswerData] = useRecoilState(getAnswerState);
  const [id, setId] = useRecoilState(questionIdState);


  useEffect(() => {
    axios
      .all([
        axios.get(`${process.env.REACT_APP_API_URL}/question/${id}`),
        axios.get(`${process.env.REACT_APP_API_URL}/answer/${id}`),
      ])
      .then(
        axios.spread((res1, res2) => {
          setQuestionInfo(res1.data.data);
          setAnswerData(res2.data.data);
        })
      );
  }, []);

  return (
    <>
      <Container>
        <QuestionTitle />
        <QuestionContent />
        <AnswerList />
        <YourAnswer />
      </Container>
    </>
  );
};

export default DetailQuestion;
