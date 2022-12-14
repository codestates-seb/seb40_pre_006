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
      // << ?????? ????????????
      display: none;
    }

    & > li:last-child {
      // >> ?????? ????????????
      display: none;
    }

    & > li:nth-child(2) {
      // prev ?????? ?????? width ??????
      width: 50px;
    }

    & > li:nth-last-child(2) {
      // next ?????? ?????? width ??????
      width: 50px;
    }

    & > li.active {
      // ??????->????????? ????????? ???,
      a {
        color: white; // ????????? ??????
      }
      border-color: #f48225; // ????????? ?????? ??????
      background-color: #f48225; // ????????? ??????
    }
  }

  li {
    width: 30px;
    height: 30px;
    border: 1px solid hsl(210, 8%, 85%); // ?????? ????????? ???(??????)
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      border: 1px solid #bec1c4;
      background-color: #d6d9dc; // ??????
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
                ????????? ??? :
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
                ????????? ??? :
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
            activePage={tagPage} //???????????????
            itemsCountPerPage={tagSize} //??????????????? ????????? ?????? ?????? -> size -> ???????????????
            totalItemsCount={tagTotalEl} //??? ?????? ?????? -> totalElements -> atom??? ??????????????? ?????? ??????
            pageRangeDisplayed={5} //???????????????????????? ????????? ??????????????? ??????(??????)
            prevPageText={"prev"} // ?????? ??????
            nextPageText={"next"} // ?????? ??????
            onChange={handlePageChange} //????????? ?????? ??? ?????????????????? ????????????
          />
        </CustomPaginationBox> */}
      </Container>
    </>
  );
};

export default Tags;
