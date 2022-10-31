import React from "react";
import { getAnswerState } from "../../atom/atom";
import { useRecoilValue } from "recoil";
import AnswerContent from "./AnswerContent";
import styled from "styled-components";

const Container = styled.div`
  .answer-number {
    font-size: 20px;
    margin: 40px 0 10px 0;
  }
`;

function AnswerList() {
  const Alist = useRecoilValue(getAnswerState);

  return (
    <Container>
      {Alist.length === 1 ? (
        <div className="answer-number">{Alist.length} Answer</div>
      ) : (
        <div className="answer-number">{Alist.length} Answers</div>
      )}
      {Alist.map((answer) => (
        <AnswerContent key={answer.answerId} answer={answer} />
      ))}
    </Container>
  );
}

export default AnswerList;
