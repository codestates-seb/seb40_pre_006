import styled from "styled-components";
import {
  questionOptionFocusState,
  questionCountState,
  getDataState,
  isAskState,
  LoginState,
} from "../../atom/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import { pageState } from "../../atom/atom";

import QuestionList from "./QuestionList";

const Container = styled.div`
  width: 100%;
  height: 150px;

  /* border : 1px solid red; */

  .up-box {
    width: 100%;
    height: 50%;

    /* background-color : #ffbbbb; */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      margin-left: 15px;
    }

    button {
      height: 40px;
      width: 100px;

      border: 0.5px solid #0074cc;
      border-radius: 3px;
      background-color: #1693fa;

      color: white;
      font-size: 13px;

      margin-right: 15px;

      cursor: pointer;

      &:hover {
        background-color: #0066cc;
      }
    }
  }

  .down-box {
    width: 100%;
    height: 50%;

    /* background-color : #ff6c6c; */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* border-bottom : 0.5px solid #dddddd; */

    .question-count {
      font-size: 17px;
      margin-left: 15px;
      width : 120px;

      /* @media screen and (max-width : 750px) {
        font-size : 10px;
      } */
    }

    .option-container {
      display: flex;
      flex-direction: row;

      /* border : 1px solid blue; */

      height: 40px;

      .first-btn {
        border-radius: 3px 0 0 3px;
        border-right: none;
      }

      .last-btn {
        border-radius: 0 3px 3px 0;
        border-left: none;
        margin-right: 15px;
      }
    }
  }
`;

const Button = styled.button`
  padding-left: 10px;
  padding-right: 10px;

  font-size: 13px;
  color: #555555;
  background-color: ${(props) => (props.props ? "#e4e3e3" : "white")};

  border: 0.5px solid #8a8a8a;

  cursor: pointer;

  &:hover {
    /* background-color : #f3f3f3; */
    background-color: ${(props) => (props.props ? "#e4e3e3" : "#f7f5f591")};
  }
`;

const QuestionHeader = () => {
  const [optionBtn, setOptionBtn] = useRecoilState(questionOptionFocusState);
  const [questionCount, setQuestionCount] = useRecoilState(questionCountState);
  const [questions, setQuestions] = useRecoilState(getDataState);
  const [isAsk, setIsAsk] = useRecoilState(isAskState);
  const [login, isLogin] = useRecoilState(LoginState);
  const [page, setPage] = useRecoilState(pageState);

  const handleOptionBtnClick = (opt) => {
    setOptionBtn(opt);
    setPage(1);

  };

  const handleAskBtnClick = () => {
    let isGo = false;

    if (!login) {
      isGo = window.confirm(
        "로그인이 필요합니다! \n로그인 창으로 이동하시겠습니까?"
      );
      isGo ? (window.location = "/login") : console.log("stay");
    }else {
      window.location = "/ask";
    }
  };

  return (
    <>
      <Container>
        <div className="up-box">
          <div className="title">All Questions</div>
          {/* <a href="/ask"> */}
            <button onClick={handleAskBtnClick}>Ask Question</button>
          {/* </a> */}
        </div>
        <div className="down-box">
          <div className="question-count">{questionCount} questions</div>
          <div className="option-container">
            <Button
              className="first-btn"
              onClick={() => handleOptionBtnClick(1)}
              props={optionBtn === 1 ? optionBtn : null}
            >
              All
            </Button>

            <Button
              onClick={() => handleOptionBtnClick(2)}
              props={optionBtn === 2 ? optionBtn : null}
            >
              Unanswered
            </Button>
            <Button
              className="last-btn"
              onClick={() => handleOptionBtnClick(3)}
              props={optionBtn === 3 ? optionBtn : null}
            >
              Answered
            </Button>
          </div>
        </div>
      </Container>
      <QuestionList />
    </>
  );
};

export default QuestionHeader;
