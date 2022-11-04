import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  width: 70vw;
  min-height: 700px;
  padding: 24px;

  /* background-color : #7e7e7e; */
  /* border: 1px solid blue; */

  .users-header {
    /* border: 1px solid red; */
    height: fit-content;

    .title {
      font-size: 2rem;
      margin-bottom: 24px;
    }

    .searchbar {
      width: 200px;
      position: relative;

      background-color: white;
      height: 36px;
      margin-bottom: 40px;
    }

    input {
      width: 100%;
      border-radius: 3px;
      padding: 10px 12px 10px 35px;
      font-size: 14px;
      color: #9ba1a8;
      border: 1px solid #bbb;

      ::placeholder {
        font-size: 0.85rem;
      }

      &:focus {
        outline: none;
        border: 1px solid #6bbcf7;
      }
    }

    .icon {
      position: absolute;
      width: 17px;
      top: 10px;
      left: 8px;
      margin: 0;
      color: #9ba1a8;
    }
  }

  .users-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    /* border: 1px solid purple; */

    .user-box {
      /* background-color: hsl(210, 8%, 95%); //1 */
      width: 150px;
      min-height: fit-content;
      margin-top: 20px;
      margin-right: 20px;

      /* border: 1px solid hsl(210,8%, 90%); */
      border: 1px solid #bbb;
      border-radius: 3px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 10px;

      .user-name {
        /* background-color: hsl(210, 8%, 95%); //2 */
        background-color: hsl(205, 46%, 92%);
        padding: 3px; //2
        color: hsl(210, 8%, 25%);
        color: hsl(206, 100%, 40%); //1
        width: fit-content;
        margin-bottom: 10px;
      }
      .user-question-count {
        /* background-color: green; */
        color: hsl(210, 8%, 25%);
        span {
          font-weight: bold;
        }
      }
    }
  }
`;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user?page=1&size=100`)
      .then((res) => {
        setUsers(res.data.data);
      });
  });

  return (
    <>
      <Container>
        <div className="users-header">
          <div className="title">Users</div>
          <div className="searchbar">
            <FaSearch className="icon" />
            <input
              placeholder="Filter by user"
              autoComplete="off"
              type="text"
            ></input>
          </div>
        </div>
        <div className="users-list">
          {users.map((user) => (
            <div key={user.userId} className="user-box">
              <div className="user-name">{user.name}</div>
              <div className="user-question-count">
                질문 개수 :
                <span className="user-question-count-span">
                  {` ${user.questionCount}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Users;
