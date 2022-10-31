import styled from "styled-components";

import QuestionTitle from "../components/DetailQuestionComp/QuestionTitle";
import QuestionContent from "../components/DetailQuestionComp/QuestionContent";
import AnswerList from "../components/DetailQuestionComp/AnswerList";
import { getAnswerState, questionIdState } from "../atom/atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from "react";

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
  const [answerData, setAnswerData] = useRecoilState(getAnswerState);
  const [id, setId] = useRecoilState(questionIdState);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/answer/1`).then((res) => {
      setAnswerData(res.data.data);
    });
  }, [id]);

  return (
    <>
      <Container>
        <QuestionTitle />
        <QuestionContent />
        <AnswerList />
      </Container>
    </>
  );
};

export default DetailQuestion;
