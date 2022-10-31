import styled from "styled-components";

import QuestionTitle from "../components/DetailQuestionComp/QuestionTitle";
import QuestionContent from "../components/DetailQuestionComp/QuestionContent";
import YourAnswer from "../components/DetailQuestionComp/YourAnswer";

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
  return (
    <>
      <Container>
        <QuestionTitle />
        <QuestionContent />
        <YourAnswer />
      </Container>
    </>
  );
};

export default DetailQuestion;
