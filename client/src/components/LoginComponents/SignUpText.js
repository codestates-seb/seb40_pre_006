import React from "react";
import styled from "styled-components";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaVoteYea } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { AiFillTrophy } from "react-icons/ai";
import { BsCaretUpFill, BsCaretDown } from "react-icons/bs";

const Container = styled.div`
  /* width: 475px;
  height: 280px; */
  width: fit-content;
  height: fit-content;
  border: 1px solid blue;

  .title {
    font-size: 1.7rem;
    font-weight: 450;
    margin-bottom: 32px;
  }

  .body {
    color: hsl(210, 8%, 15%);
    font-weight: 450;

    ul {
      display: flex;
      flex-direction: column;
    }

    li {
      margin-bottom: 24px;
      display: flex;
      align-items: center;

      .icons {
        width: 26px;
        height: 26px;
        margin-right: 10px;
        color: hsl(206, 100%, 52%);
      }
    }

    .voteIcon {
      display: flex;
      flex-direction: column;

      .vote {
        width: 24px;
        height: 24px;
        margin: -4.5px 10px -4.5px 0 ;
      }
    }
  }

  .ect {
    font-size: 0.8rem;
    color: hsl(210, 8%, 45%);

    a {
      text-decoration: none;
      color: hsl(206, 100%, 40%);
      cursor: pointer;
    }
  }
`;

function SignUpText() {
  return (
    <Container>
      <div className="title">Join the Stack Overflow community</div>
      <div className="body">
        <ul>
          <li>
            <RiQuestionnaireFill className="icons" alt="questinonMark" />
            Get unstuck — ask a question
          </li>
          <li>
            <div className="voteIcon">
              <BsCaretUpFill className="icons vote" alt="voteMark" />
              <BsCaretDown className="icons vote" alt="voteMark" />
            </div>
            Unlock new privileges like voting and commenting
          </li>
          <li>
            <ImPriceTags className="icons" alt="tagsMark" />
            Save your favorite tags, filters, and jobs
          </li>
          <li>
            <AiFillTrophy className="icons" alt="TrophyMark" />
            Earn reputation and badges
          </li>
        </ul>
      </div>
      <div className="ect">
        <div>
          Collaborate and share knowledge with a private group for FREE.
        </div>
        <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
          Get Stack Overflow for Teams free for up to 50 users.
        </a>
      </div>
    </Container>
  );
}

export default SignUpText;
