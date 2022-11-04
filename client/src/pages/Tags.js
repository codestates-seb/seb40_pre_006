import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Pagination from "react-js-pagination";

const Container = styled.div`
  width: 70vw;
  min-height: 700px;
  padding: 24px;

  /* background-color : #7e7e7e; */
  /* border: 1px solid blue; */

  .tags-header {
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

const CustomPaginationBox = styled.div`
  ul {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin: 50px 0px;

    & > li:first-child {
      // << 버튼 안보이게
      display: none;
    }

    & > li:last-child {
      // >> 버튼 안보이게
      display: none;
    }

    & > li:nth-child(2) {
      // prev 길이 맞춰 width 설정
      width: 50px;
    }

    & > li:nth-last-child(2) {
      // next 길이 맞춰 width 설정
      width: 50px;
    }

    & > li.active {
      // 클릭->활성화 되었을 때,
      a {
        color: white; // 글자색 흰색
      }
      border-color: #f48225; // 테두리 진한 주황
      background-color: #f48225; // 배경색 주황
    }
  }

  li {
    width: 30px;
    height: 30px;
    border: 1px solid hsl(210, 8%, 85%); // 기본 테두리 색(회색)
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      border: 1px solid #bec1c4;
      background-color: #d6d9dc; // 회색
    }

    > a {
      text-decoration: none;
      color: hsl(210, 8%, 25%);
    }
  }
`;

const Tags = () => {
  const [tags, setTags] = useState([]);
  // const [tagPage, setTagPage] = useState(1);
  // const [tagTotalEl, setTagTotalEl] = useState(0);
  // const [tagSize, setSize] = useState(10);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tag?page=1&size=100`)
      .then((res) => {
        setTags(res.data.data);
      });
  });

  // const handlePageChange = (tagPage) => {
  //   setTagPage(tagPage);
  // };

  return (
    <>
      <Container>
        <div className="tags-header">
          <div className="title">Tags</div>
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
          {tags.map((tag) => tag.tagCount > 0 ? (
            <div key={tag.tagId} className="tag-box">
              <div className="tag-name">{tag.tagName}</div>
              <div className="tag-question-count">
                태그된 수 :
                <span className="tag-question-count-span">
                  {` ${tag.tagCount}`}
                </span>
              </div>
            </div>
          ) : null)}
          {/* {tags.map((tag) =>(
            <div key={tag.tagId} className="tag-box">
              <div className="tag-name">{tag.tagName}</div>
              <div className="tag-question-count">
                태그된 수 :
                <span className="tag-question-count-span">
                  {` ${tag.tagCount}`}
                </span>
              </div>
            </div>
          ))} */}
        </div>
        <br></br>
        {/* <CustomPaginationBox>
          <Pagination
            activePage={tagPage} //현재페이지
            itemsCountPerPage={tagSize} //한페이지당 보여줄 태그 개수 -> size -> 받아와야함
            totalItemsCount={tagTotalEl} //총 태그 개수 -> totalElements -> atom에 질문총개수 상태 존재
            pageRangeDisplayed={5} //페이지네이션에서 보여줄 페이지버튼 개수(범위)
            prevPageText={"prev"} // 이전 버튼
            nextPageText={"next"} // 이후 버튼
            onChange={handlePageChange} //페이지 바뀔 때 페이지상태값 변경함수
          />
        </CustomPaginationBox> */}
      </Container>
    </>
  );
};

export default Tags;
