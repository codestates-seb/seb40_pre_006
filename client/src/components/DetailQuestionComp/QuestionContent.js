import styled from "styled-components";
import { FaCaretUp } from "react-icons/fa";
import { DetailQuestionInfoState } from "../../atom/atom";
import { LoginState } from "../../atom/atom";
import { questionIdState } from "../../atom/atom";
import { userNameState } from "../../atom/atom";
import { constSelector, useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { compareUserNameState } from "../../atom/atom";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { pageState } from "../../atom/atom";
import { questionOptionFocusState } from "../../atom/atom";

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

      textarea {
        width: 90%;
        resize: none;
        /* height : 500px; */
        padding: 5px;
        padding-top: 20px;

        border: 1px solid #babfc4;

        color: #3a3a3a;

        font-size: 15px;

        &:focus {
          outline: none;
          border: 1px solid #6bbbf7;
        }
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

  const [qId, setQId] = useRecoilState(questionIdState);

  const [vote, setVote] = useState(false);

  const [userName, setUserName] = useRecoilState(userNameState);
  const [compareUserName, setCompareUserName] =
    useRecoilState(compareUserNameState);

  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(questionInfo.questionBody);

  const [page, setPage] = useRecoilState(pageState);
  const [opt, setOpt] = useRecoilState(questionOptionFocusState);

  const handleVoteClick = async () => {
    let isGo = false;

    let minusBody = {
      // voteCount : questionInfo.voteCount - 1
      questionId: qId,
    };

    let plusBody = {
      // voteCount : questionInfo.voteCount + 1
      questionId: qId,
    };

    // edit 객체

    if (!isLogin) {
      isGo = window.confirm(
        "로그인이 필요합니다! \n로그인 창으로 이동하시겠습니까?"
      );
      isGo ? (window.location = "/login") : console.log("stay");
    } else {
      if (vote) {
        setVote(false);
        await axios
          .patch(
            `${process.env.REACT_APP_API_URL}/question/${qId}/vote?vote=false`,
            minusBody
          )
          .then((res) => {
            setQuestionInfo(res.data.data);
          });
      } else {
        setVote(true);
        await axios
          .patch(
            `${process.env.REACT_APP_API_URL}/question/${qId}/vote?vote=true`,
            plusBody
          )
          .then((res) => {
            setQuestionInfo(res.data.data);
          });
      }
    }
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleEditChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleCompleteClick = () => {
    // setEditMode(false);

    let isGo = window.confirm("수정하시겠습니까?");

    if (isGo) {
      // TODO
      axios
        .patch(`${process.env.REACT_APP_API_URL}/question/${qId}`, {
          questionBody: editContent,
        })
        .then((res) => {
          setQuestionInfo(res.data.data);
          window.alert("수정되었습니다");
          setEditMode(false);
        })
        .catch((error) => {
          console.log(error);
          window.alert("수정에 실패하였습니다.");
        });
    }
  };

  const handleQuestionDelete = () => {
    let isGo = window.confirm("삭제하시겠습니까?");

    if (isGo) {
      window.alert("삭제되었습니다");
      // delete API 요청

      axios.delete(`${process.env.REACT_APP_API_URL}/question/${qId}`);

      window.location = "/";
      setPage(1);
      setOpt(1);
    } else {
      console.log("stay");
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
            {editMode ? (
              <textarea value={editContent} onChange={handleEditChange} />
            ) : (
              <div className="content">{questionInfo.questionBody}</div>
            )}

            {userName === compareUserName ? (
              <div className="delete">
                <button onClick={handleQuestionDelete}>delete</button>
              </div>
            ) : null}
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
            {userName === compareUserName ? (
              <div className="edit-container">
                {editMode ? (
                  <div className="edit-btn" onClick={handleCompleteClick}>
                    complete
                  </div>
                ) : (
                  <div className="edit-btn" onClick={handleEditClick}>
                    edit
                  </div>
                )}

                {/* onClick={()=>handleQuestionEdit()} 
                onChange={() => handleEditValue}*/}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </>
  );
};

export default QuestionContent;
