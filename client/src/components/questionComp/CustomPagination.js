import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "react-js-pagination";
import { questionCountState } from "../../atom/atom";
import { getDataState } from "../../atom/atom";
import { pageSizeState } from "../../atom/atom";
import { questionOptionFocusState } from "../../atom/atom";
import { pageState } from "../../atom/atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

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

function CustomPagination() {
  const [page, setPage] = useRecoilState(pageState);
  const size = useRecoilValue(pageSizeState);
  const questionCount = useRecoilValue(questionCountState);
  const [data, setData] = useRecoilState(getDataState);
  const opt = useRecoilValue(questionOptionFocusState);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <CustomPaginationBox>
      {questionCount === 0 ? (
        <br></br>
      ) : (
        <Pagination
          activePage={page} //현재페이지
          itemsCountPerPage={size} //한페이지당 보여줄 질문 개수 -> size -> 받아와야함
          totalItemsCount={questionCount} //총 질문 개수 -> totalElements -> atom에 질문총개수 상태 존재
          pageRangeDisplayed={5} //페이지네이션에서 보여줄 페이지버튼 개수(범위)
          prevPageText={"prev"} // 이전 버튼
          nextPageText={"next"} // 이후 버튼
          onChange={handlePageChange} //페이지 바뀔 때 페이지상태값 변경함수
        />
      )}
    </CustomPaginationBox>
  );
}

export default CustomPagination;
