import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretUp } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;

  border-bottom: 1px solid #e2e2e2;

  display: flex;
  flex-direction: row;

  .vote {
    min-width: 50px;
    /* min-height: 400px; */

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

    width: 100%;

    .content-container {
      width: 100%;

      display: flex;
      flex-direction: row;

      justify-content: space-between;

      margin-bottom: 20px;

      .content {
        width: 90%;
        padding: 5px;
        padding-top: 20px;

        color: #3a3a3a;

        font-size: 15px;
      }

      .delete {
        min-width: 100px;

        display: flex;
        flex-direction: row;

        justify-content: right;
        align-items: top;

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
      display: flex;
      justify-content: space-between;

      .createdAt {
        font-size: 15px;
        color: #6d6d6d;
      }

      .author {
        font-size: 15px;
        color: hsl(206, 100%, 40%);
        text-align: end;
      }

      .edit-container {
        margin-left: 4px;

        .edit-btn {
          height: 25px;

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

const AnswerContent = ({ answer }) => {
  const [A, setA] = useState(answer);

  const handleDate = (createdAt) => {
    if(createdAt !== undefined){
      let date = new Date(createdAt).toString()
      let splitDate = date.split(' ');
      let month = splitDate[1];
      let day =  splitDate[2];
      let year = splitDate[3];
      let time = splitDate[4].slice(0,5);
  
      return `asked ${month} ${day}, ${year} at ${time}`

    }
  }

  return (
    <>
      <Container>
        <div className="vote">
          <div className="count-container">
            <div className="icons">
              <FaCaretUp />
            </div>
            <div className="count">0</div>
          </div>
          {/* <div className="message">로그인이 필요합니다</div> */}
        </div>
        <div className="main">
          <div className="content-container">
            <div className="content">{A.answerBody}</div>
            <div className="delete">
              <button>delete</button>
            </div>
          </div>
          <div className="extra-info">
            <div className="edit-container">
              <div className="edit-btn">edit</div>
            </div>
            <div className="detail-info">
              <div className="createdAt">{handleDate(A.createdAt)}</div>
              <div className="author">{A.name}</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AnswerContent;
