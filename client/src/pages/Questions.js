import styled from "styled-components";
import QuestionList from "../components/questionComp/QuestionList";
import { useRecoilState } from "recoil";
const Container = styled.div`
  width: 70vw;
  min-height: 700px;

  display: flex;
  flex-direction: row;

  /* background-color : #7e7e7e; */
  @media (max-width: 640px) {
    width: 100vw;
  }
`;

const Content = styled.div`
  width: 80%;
  height: 100%;

  /* border: 1px solid red; */
`;

const Right = styled.div`
  width: 180px;
  height: 100%;

  border: 1px solid blue;
`;

const Questions = () => {
  return (
    <>
      <Container>
        <Content>
          <QuestionList />
        </Content>
        <Right></Right>
      </Container>
    </>
  );
};

export default Questions;
