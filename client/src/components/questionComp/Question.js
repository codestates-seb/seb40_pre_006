import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const QuestionBox = styled.div`
  width: 100%;
  color: #5d5e60;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  font-size: 0.85rem;

  :first-child {
    border-top: 1px solid hsl(210, 8%, 90%);
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const QuestionSide = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  width: 15%;
  align-items: flex-end;
  padding: 10px;
  font-weight: 500;

  > * {
    margin-bottom: 3px;
    padding: 3px 5px 3px 5px;
    border-radius: 3px;
    white-space: nowrap;
  }

  > :first-child {
    color: black;
  }

  span {
    font-weight: normal;
  }

  @media (max-width: 1000px) {
    flex-direction: row;
    padding: 0 0 0 5px;
  }
`;

const QuestionContent = styled.div`
  width: 85%; // 반응형 시 변화해야할 것
  display: flex;
  flex-direction: column;
  justify-content: start;

  padding: 10px;

  > * {
    margin-bottom: 5px;
    text-decoration: none;
    height: 100%;
  }

  .title {
    /* overflow: hidden; */
    font-weight: 600;
    color: #0074cc;
    font-size: 20px;

    :hover {
      color: #0a95ff;
    }
  }

  .body {
    overflow: hidden;
    color: hsl(210, 8%, 25%);
    margin-bottom: 10px;

  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  /* border: 1px solid green; */
`;

const Etc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;

  .tags > span {
    margin-right: 10px;
    color: hsl(205, 46%, 32%);
    background-color: hsl(205, 53%, 88%);
    padding: 3px 5px;
    border-radius: 3px;
    font-size: 0.8rem;
    text-align: center;
  }

  .author-time {
    margin-top: 10px;
  }
`;

const Tags = styled.div``;

const Created = styled.div`
  .author {
    color: hsl(206, 100%, 40%);
  }

  .time {
    color: hsl(210, 8%, 45%);
  }
`;

function Question({ question }) {
  const [Q, setQ] = useState(question);

  return (
    <QuestionBox>
      <QuestionSide>
        <div className="total-votes">
          {Q.voteCount} <span>votes</span>
        </div>
        <div className="total-answers">
          {Q.answerCount} <span>answers</span>
        </div>
      </QuestionSide>
      <QuestionContent>
        <Link to="detailQuestion">
          <h3 className="title">
            {/* <a href=""></a> */}
            {Q.title}
          </h3>

        </Link>
        <div className="body">{Q.questionBody}</div>
        <Etc>
          <Tags className="tags">
            {Q.questionTagList.map((tag, idx) => (
              <span key={idx}>{tag.tagName}</span>
            ))}
          </Tags>
          <Created className='author-time'>
            <span className="author">{Q.name}</span>
            <span className="createdAt"> {Q.createdAt}</span>
          </Created>
        </Etc>
      </QuestionContent>
    </QuestionBox>
  );
}

export default Question;