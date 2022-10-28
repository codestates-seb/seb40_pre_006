import styled from "styled-components";
import QuestionHeader from "../components/questionComp/QuestionHeader";
import TagSideBar from "../components/questionComp/TagSideBar";

import { getDataState } from "../atom/atom";
import { questionCountState } from "../atom/atom";
import { questionOptionFocusState } from "../atom/atom";
import { tagState } from "../atom/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";

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

    useEffect(() => {
    if (opt === 1) {
            axios
        .all([
          axios.get(
            "https://6034-221-140-177-247.jp.ngrok.io/question?page=3&size=1"
          ),
          axios.get("https://6034-221-140-177-247.jp.ngrok.io/tag"),
        ])
        .then(
          axios.spread((res1, res2) => {
                            setData(res1.data.data);
                            setQuestionCount(res1.data.pageInfo.totalElements);
                            setTags(res2.data.data);
                        })
        );
    } else if (opt === 2) {
      axios
        .get("https://6034-221-140-177-247.jp.ngrok.io/question/answered")
        .then((res) => {
          setData(res.data.data.slice(2));
          setQuestionCount(res.data.pageInfo.totalElements - 2);
        });
    } else if (opt === 3) {
      axios
        .get("https://6034-221-140-177-247.jp.ngrok.io/question/answered")
        .then((res) => {
          setData(res.data.data.slice(1));
          setQuestionCount(res.data.pageInfo.totalElements - 1);
        });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opt]);

  return (
    <>
      <Container>
        <Content>
          <QuestionHeader />
        </Content>
        <Right>
          <TagSideBar />
        </Right>
      </Container>
    </>
  );
};

export default Questions;
