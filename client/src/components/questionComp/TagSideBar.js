import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { getDataState } from "../../atom/atom";
import { useRecoilState } from "recoil";

const TagWrapper = styled.div``;

const Wrapper = styled.div`
  /* margin-right: 50px; */
  width: 180px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 73px;
  right: 2.9rem;

  @media screen and (min-width: 642px) and (max-width: 980px) {
    position: absolute;
    top: 850px;
    left: 195px;
  }
  @media screen and (max-width: 641px) {
    top: 750px;
    left: 15px;
    width: 100vw;
  }
  /* @media screen and (max-width: 980px) {
    display: none;
  } */
`;

const TitleContainer = styled.div`
  width: 180px;
  height: 8%;
  /* border: 1px solid black; */
  /* padding-left: 7px; */
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #3b4045;
`;

const TagContainer = styled.div`
  width: min-content;
  height: 25px;
  /* border: 1px solid pink; */
  display: inline-block;
  border-radius: 3px;
  margin-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  background-color: #e1ecf4;
  color: #4c85b9;
`;

function TagSideBar() {
  const [data, setData] = useRecoilState(getDataState);

  useEffect(() => {
    axios.get("http://localhost:3001/data").then((response) => {
      setData(response.data);
    });
  }, []);

  const questionTagList = data.map((row) => row.questionTagList);
  const tagList = questionTagList.flat([1]);
  const tagArr = [];

  for (let key in tagList) {
    tagArr.push(tagList[key].tagName);
  }

  const setTag = new Set(tagArr);
  const uniqueTag = [...setTag];
  const sortedTag = uniqueTag.sort();
  let tags = [];

  for (let i = 0; i < sortedTag.length; i++) {
    let obj = {};
    obj.id = i;
    obj.name = sortedTag[i];
    tags.push(obj);
  }

  return (
    <TagWrapper>
      <Wrapper>
        <TitleContainer>Related Tags</TitleContainer>
        {tags.map((tag) => (
          <TagContainer key={tag.id}>{tag.name}</TagContainer>
        ))}
      </Wrapper>
    </TagWrapper>
  );
}

export default TagSideBar;
