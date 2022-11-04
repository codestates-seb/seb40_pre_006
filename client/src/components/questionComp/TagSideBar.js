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
  /* display: inline-block; */
  border-radius: 3px;
  margin-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  background-color: #e1ecf4;
  color: #4c85b9;
  font-size: 0.9rem;

  .tagCount-container {
    margin-top: 1.25px;
    margin-left: 7px;
    color: #5a5a5a;
    font-size: 0.7rem;
  }
`;

function TagSideBar() {
  const [allTags, setAllTags] = useRecoilState(tagState);

  let tags = allTags.filter((el) => el.tagCount > 0);
  console.log(allTags);
  console.log(tags);

  return (
    <TagWrapper>
      <Wrapper>
        <TitleContainer>Related Tags (Top5)</TitleContainer>
        {tags.map((tag) => (
          <TagContainer key={tag.tagId}>
            {tag.tagName}
            <div className="tagCount-container"> x{tag.tagCount}</div>
          </TagContainer>
        ))}
      </Wrapper>
    </TagWrapper>
  );
}

export default TagSideBar;
