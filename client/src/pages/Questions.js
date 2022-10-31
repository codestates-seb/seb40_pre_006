import styled from "styled-components";
import QuestionHeader from "../components/questionComp/QuestionHeader";
import TagSideBar from "../components/questionComp/TagSideBar";
import CustomPagination from "../components/questionComp/CustomPagination";

import { getDataState } from "../atom/atom";
import { questionCountState } from "../atom/atom";
import { questionOptionFocusState } from "../atom/atom";
import { tagState } from "../atom/atom";
import { pageState } from "../atom/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";

import { pageSizeState } from "../atom/atom";

const Container = styled.div`
  width: 70vw;
  min-height: 700px;

  display: flex;
  flex-direction: row;

  /* background-color : #7e7e7e; */
  @media (max-width: 640px) {
    width: 100vw;
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 640px) {
    width: 100%;
  }

  /* border: 1px solid red; */
`;

const Right = styled.div`
  width: 180px;
  height: 100%;

  /* border: 1px solid blue; */
`;

const Questions = () => {
  const [data, setData] = useRecoilState(getDataState);
  const [questionCount, setQuestionCount] = useRecoilState(questionCountState);
  const [tags, setTags] = useRecoilState(tagState);
  const [opt, setOpts] = useRecoilState(questionOptionFocusState);
  const [size, setSize] = useRecoilState(pageSizeState);
  const [page, setPage] = useRecoilState(pageState);

  useEffect(() => {
    if (opt === 1) {
      axios
        .all([
          axios.get(
            // "https://6034-221-140-177-247.jp.ngrok.io/question?page=3&size=1"
            `${process.env.REACT_APP_API_URL}/question?page=1&size=10`
          ),
          axios.get(`${process.env.REACT_APP_API_URL}/tag/right`),
        ])
        .then(
          axios.spread((res1, res2) => {
            setData(res1.data.data);
            setQuestionCount(res1.data.pageInfo.totalElements);
            setTags(res2.data.data);
            setSize(res1.data.pageInfo.size); // 사이즈는 변하지 않아서 처음에만 설정하면 될 것 같아요
            console.log('옵션1로 변해 모든 데이터(Page1)를 불러와 데이터로 설정') //
          })
        );
    } else if (opt === 2) {
      axios
        // .get(`${process.env.REA_APP_API_URL}/question/answered`)
        .get(`${process.env.REACT_APP_API_URL}/question/unanswered?page=1&size=10`)
        .then((res) => {
          setData(res.data.data);
          setQuestionCount(res.data.pageInfo.totalElements);
          console.log('옵션2로 변해 필터링된 데이터(Page1)를 불러와 데이터로 설정') // 
        });
    } else if (opt === 3) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/question/answered?page=1&size=10`)
        .then((res) => {
          setData(res.data.data);
          setQuestionCount(res.data.pageInfo.totalElements);
          console.log('옵션3로 변해 필터링된 데이터(Page1)를 불러와 데이터로 설정') // 
        });
    }
    
    setPage(1); //
    console.log('페이지 1로 리셋') //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opt]);

  return (
    <>
      <Container>
        <Content>
          <QuestionHeader />
          <CustomPagination />
        </Content>
        <Right>
          <TagSideBar />
        </Right>
      </Container>
    </>
  );
};

export default Questions;
