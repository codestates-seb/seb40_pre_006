import styled from "styled-components";
import { FaCaretUp } from "react-icons/fa";
import { DetailQuestionInfoState } from "../../atom/atom";
import { LoginState } from "../../atom/atom";
import { constSelector, useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 400px;

  border-bottom: 1px solid #e2e2e2;

  display: flex;
  flex-direction: row;

  .vote {
    min-width: 50px;
    min-height: 400px;

    /* border : 1px solid red; */

    display: flex;
    flex-direction: column;

    justify-content: top;
    align-items: center;

    padding-top: 10px;
    margin-right: 20px;
    /* padding-left : 10px; */

    .count-container {
      display: flex;
      flex-direction: row;

      justify-content: left;
      align-items: center;

      width: 100%;
      height: 50px;

      /* border : 1px solid red; */

      .icons {
        font-size: 40px;
        padding-top: 10px;
        color: #b4b4b4;
        /* color : #ff4949; */

        cursor: pointer;
      }

      .icons-active {
        font-size: 40px;
        padding-top: 10px;
        color: #ff4949;

        cursor: pointer;
      }

      .count {
        font-size: 30px;
      }
    }

    .message {
      font-size: 12px;
      /* padding-right :10px; */

      color: #fc3a6b;
      font-weight: 800;
    }
  }

  .main {
    display: flex;
    flex-direction: column;

    /* border: 1px solid red; */

    width: 100%;

    .content-container {
      width: 100%;
      min-height: 80%;

      display: flex;
      flex-direction: row;

      justify-content: space-between;

      margin-bottom: 20px;
      /* border: 1px solid red; */

      .content {
        width: 90%;
        padding: 5px;
        padding-top: 20px;

        color: #3a3a3a;

        font-size: 15px;

        /* overflow : auto; */
        /* border: 1px solid red; */
      }

      .delete {
        min-width: 100px;

        /* border: 1px solid red; */

        display: flex;
        flex-direction: row;

        justify-content: right;
        align-items: top;

        /* padding-left: 25px; */

        padding-top: 23px;

        button {
          height: 30px;
          width: 70px;

          border: 0.5px solid #d10404;
          border-radius: 3px;
          background-color: #ff4646;

          color: white;
          font-size: 13px;

          cursor: pointer;

          &:hover {
            background-color: #db2222;
          }
        }
      }
    }

    .extra-info {
      width: 100%;
      height: 80px;

      /* border: 1px solid blue; */

      .detail-info {
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        .tags-container {
          display: flex;
          flex-direction: row;

          /* border: 1px solid red; */

          height: 25px;

          .tags {
            color: hsl(205, 50%, 25%);
            background-color: hsl(205, 53%, 88%);

            display: flex;

            justify-content: center;
            align-items: center;

            height: 25px;
            /* text-align : center; */

            font-size: 0.8rem;

            margin-right: 10px;
            padding: 10px;
            /* padding-bottom : 10px; */

            border-radius: 3px;
            font-weight: 400;
          }
        }

        .author {
          font-size: 15px;
          color: #6d6d6d;
        }
      }

      .edit-container {
        display: flex;
        flex-direction: column;

        justify-content: center;

        margin-top: 5px;
        margin-left: 4px;
        /* border: 1px solid blue; */

        .edit-btn {
          height: 25px;
          width: 50px;

          /* border: 0.5px solid #da8f05; */
          /* border-radius: 3px; */
          /* background-color: #ff9102; */

          color: #727272;
          font-size: 15px;
          cursor: pointer;

          &:hover {
            color: #008cff;
          }
        }
      }
    }
  }
`;

const QuestionContent = () => {
  const [questionInfo, setQuestionInfo] = useRecoilState(
    DetailQuestionInfoState
  );

  const [isLogin, setIsLogin] = useRecoilState(LoginState);

  const [vote, setVote] = useState(false);

  // console.log(questionInfo);

  // const getId = (id) => {
  //   return id++;
  // }

  const handleVoteClick = async () => {
    let isGo = false;

    let minusBody = {
      // voteCount : questionInfo.voteCount - 1
      questionId : 1
    }

    let plusBody = {
      // voteCount : questionInfo.voteCount + 1
      questionId : 1
    }

    if (!isLogin) {
      isGo = window.confirm(
        "로그인이 필요합니다! \n로그인 창으로 이동하시겠습니까?"
      );
      isGo ? (window.location = "/ask") : console.log("stay");
    } else {
      if (vote) {
        setVote(false);
        await axios
          .patch(`${process.env.REACT_APP_API_URL}/question/1/vote/minus`, minusBody)
          .then((res) => {
            setQuestionInfo(res.data.data);
            // console.log(res);
          });
      } else {
        setVote(true);
        await axios
          .patch(`${process.env.REACT_APP_API_URL}/question/1/vote/plus`, plusBody)
          .then((res) => {
            setQuestionInfo(res.data.data);
            // console.log(res);
          });
      }
    }
  };

  return (
    <>
      <Container>
        <div className="vote">
          <div className="count-container">
            <div
              className={vote ? "icons-active" : "icons"}
              onClick={handleVoteClick}
            >
              <FaCaretUp />
            </div>
            <div className="count">{questionInfo.voteCount}</div>
          </div>
          {/* <div className="message">로그인이 필요합니다</div> */}
        </div>
        <div className="main">
          <div className="content-container">
            <div className="content">{questionInfo.questionBody}</div>
            <div className="delete">
              <button>delete</button>
            </div>
          </div>
          <div className="extra-info">
            <div className="detail-info">
              <div className="tags-container">
                {questionInfo
                  ? questionInfo.questionTagList.map((el, idx) => {
                      // let id = 1;
                      return (
                        <div className="tags" key={idx}>
                          {el.tagName}
                        </div>
                      );
                    })
                  : null}
                {/* <div className="tags">javascript</div>
                <div className="tags">C++</div> */}
              </div>
              <div className="author">author : {questionInfo.name}</div>
            </div>
            <div className="edit-container">
              <div className="edit-btn">edit</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default QuestionContent;
