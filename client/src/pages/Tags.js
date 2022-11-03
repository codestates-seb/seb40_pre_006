import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  width: 70vw;
  height: 700px;
  padding: 24px;

  /* background-color : #7e7e7e; */
  /* border: 1px solid blue; */

  .tags-header {
    /* border: 1px solid red; */
    height: fit-content;

    .title {
      font-size: 2rem;
      margin-bottom: 24px;
      span {
        font-size: 1.5rem;
      }
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

  .tags-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    /* border: 1px solid purple; */

    .tag-box {
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

      .tag-name {
        /* background-color: hsl(210, 8%, 95%); //2 */
        background-color: hsl(205, 46%, 92%);
        padding: 3px; //2
        color: hsl(210, 8%, 25%);
        color: hsl(206, 100%, 40%); //1
        width: fit-content;
        margin-bottom: 10px;
      }
      .tag-question-count {
        /* background-color: green; */
        color: hsl(210, 8%, 25%);
        span {
          font-weight: bold;
        }
      }
    }
  }
`;

const Tags = () => {
  const [tags, setTags] = useState([]);
  const top = 0;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tag/right`)
      .then((res) => {
        setTags(res.data.data);
      });
  });

  return (
    <>
      <Container>
        <div className="tags-header">
          <div className="title">Tags <span>(Top5)</span></div>
          <div className="searchbar">
            <FaSearch className="icon" />
            <input
              placeholder="Filter by tag"
              autoComplete="off"
              type="text"
            ></input>
          </div>
        </div>
        <div className="tags-list">
          {tags.map((tag, idx) => (
            <div key={tag.tagId} className="tag-box">
              <div className="tag-name">{tag.tagName}</div>
              <div className="tag-question-count">
                Top :
                <span className="tag-question-count-span">
                  {` ${idx+1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Tags;
