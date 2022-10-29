import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { getDataState } from "../../atom/atom";
import { tagState } from "../../atom/atom";
import { useRecoilState } from "recoil";

const TagWrapper = styled.div``;

const Wrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  top: 73px;

  padding-left: 15px;
  padding-top: 15px;

  @media screen and (max-width: 641px) {
    left: 15px;
    width: 100vw;
    height: flex;
    margin-bottom: 15px;
  }
`;

const TitleContainer = styled.div`
  width: 180px;
  height: 8%;
  margin-top: 12px;
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #3b4045;
`;

const TagContainer = styled.div`
  width: min-content;
  height: 25px;
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
  const [tags, setTags] = useRecoilState(tagState);

  // const questionTagList = data.map((row) => row.questionTagList);
  // const tagList = questionTagList.flat([1]);
  // const tagArr = [];

  // for (let key in tagList) {
  //   tagArr.push(tagList[key].tagName);
  // }

  // const setTag = new Set(tagArr);
  // const uniqueTag = [...setTag];
  // const sortedTag = uniqueTag.sort();
  // let tags = [];

  // for (let i = 0; i < sortedTag.length; i++) {
  //   let obj = {};
  //   obj.id = i;
  //   obj.name = sortedTag[i];
  //   tags.push(obj);
  // }

  return (
    <TagWrapper>
      <Wrapper>
        <TitleContainer>Related Tags</TitleContainer>
        {tags.map((tag) => (
          <TagContainer key={tag.tagId}>{tag.tagName}</TagContainer>
        ))}
      </Wrapper>
    </TagWrapper>
  );
}

export default TagSideBar;
