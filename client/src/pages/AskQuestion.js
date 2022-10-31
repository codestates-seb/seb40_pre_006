import styled from "styled-components";
import { useRecoilState, waitForNone } from "recoil";
import { useRef, useEffect } from "react";
import {
  questionTitleValueState,
  questionContentValueState,
  questionTagValueState,
  questionBtn1ClickState,
  questionBtn2ClickState,
  questionBtn3ClickState,
} from "../atom/atom";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 1230px;
  display: flex;
  justify-content: center;
  background-color: #f8f9f9;
  box-sizing: border-box;
  /* background-color: red; */

  .wrapper {
    width: 80%;
    height: 1230px;
    /* border: 1px solid black; */
    overflow: hidden;
  }

  .page-title {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: violet; */
  }

  .page-title-wrapper {
    height: 10%;
    width: 100%;
    font-size: 32px;
    font-weight: 500;
    /* background-color: yellow; */
    display: flex;
    align-items: center;
  }

  .input-container {
    height: 80%;
    /* background-color: blue; */
  }

  .button-container {
    height: 10%;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    /* background-color: green; */
  }

  .input-title {
    height: flex;
    margin-bottom: 25px;
    background-color: #ffffff;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e6e8;
  }

  .input-body {
    height: flex;
    margin-bottom: 25px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e6e8;
  }

  .input-body-disabled {
    height: flex;
    margin-bottom: 25px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e6e8;
    opacity: 0.5;
    :hover {
      cursor: not-allowed;
    }
  }

  .input-tag {
    height: flex;
    background-color: #ffffff;
    /* background-color:pink */
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e6e8;
  }

  .input-tag-disabled {
    height: flex;
    background-color: #ffffff;
    /* background-color:pink */
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e6e8;
    opacity: 0.5;
    :hover {
      cursor: not-allowed;
    }
  }

  .button-wrapper {
    width: 95%;
  }

  .button-wrapper2 {
    width: 100%;
  }
`;

const SectionTitle = styled.div`
  width: 95%;
  height: 2rem;
  margin-top: 25px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  /* background-color: red; */
  background-color: #ffffff;
`;

const SectionDescription = styled.div`
  width: 95%;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4e5457;
  /* background-color: pink; */
  background-color: #ffffff;
`;

const Input = styled.input`
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #babfc4;
  border-radius: 3px;
  margin-top: 5px;
  padding-left: 10px;
  /* background-color: #6bbbf7; */
  &::placeholder {
    font-size: 0.95rem;
    color: #bdc0c4;
  }
  &::-webkit-appearance {
    border: none;
  }
  &:focus {
    outline: none;
    border: 1px solid #6bbbf7;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  align-items: center;
  width: 95%;
  height: 20rem;
  border: 1px solid #babfc4;
  border-radius: 3px;
  margin-top: 5px;
  resize: none;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1px solid #6bbbf7;
  }
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;

const NextBtn = styled.div`
  border: none;
  background-color: ${(props) => props.backgroundcolor};
  .next-btn {
    width: flex;
    height: flex;
    padding: 10px;
    background-color: #1693fa;
    border: 0.5px solid #0074cc;
    border-radius: 3px;
    color: #ffffff;
    margin-bottom: 25px;
    margin-top: 8px;
    font-size: 1rem;
    &:focus,
    &:hover {
      cursor: pointer;
      background-color: #0066cc;
      border: 0.5px solid #0066cc;
    }
    :disabled {
      cursor: not-allowed;
      background-color: #9fc3fb;
      border: none;
    }
  }
`;

const StyledTag = styled.div`
  width: 95%;
  .tag {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 5px;
    /* border: 5px solid #777; */
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    /* border: 1px solid red; */
    /* margin: 8px; */
    /* gap: 10px; */
  }
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3px;
    margin-right: 5px;
    background: #e1ecf4;
    color: #2c5877;
    font-size: 12px;
    font-weight: 600;
    border-radius: 3px;
    line-height: 6px;
    > div {
      padding: 5px;
    }
    > .delete {
      width: 20px;
      height: 20px;
      text-align: center;
      vertical-align: center;
      border-radius: 3px;
      color: #39739d;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        color: #e1ecf4;
        background-color: #2c5877;
      }
    }
  }
`;

const AskQuestion = () => {
  const [titleValue, setTitleValue] = useRecoilState(questionTitleValueState);
  const [contentValue, setContentValue] = useRecoilState(
    questionContentValueState
  );
  const [tagValue, setTagValue] = useRecoilState(questionTagValueState);
  const [isBtn1Click, setIsBtn1Click] = useRecoilState(questionBtn1ClickState);
  const [isBtn2Click, setIsBtn2Click] = useRecoilState(questionBtn2ClickState);
  const [isBtn3Click, setIsBtn3Click] = useRecoilState(questionBtn3ClickState);

  const inputBodyRef = useRef(null);
  const inputTagRef = useRef(null);

  const onInputBodyClick = () => {
    inputBodyRef.current?.focus({ preventScroll: true });
    inputBodyRef.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const onInputTagClick = () => {
    inputTagRef.current?.focus();
    inputTagRef.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const hadleTitleValueChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleContentValue = (e) => {
    setContentValue(e.target.value);
  };

  const handleBtn1Click = () => {
    setIsBtn1Click(false);
    onInputBodyClick();
  };

  const handleBtn2Click = () => {
    setIsBtn2Click(false);
    onInputTagClick();
  };

  const handleBtn3Click = () => {
    setIsBtn3Click(false);
  };

  const inputHandler = (e) => {
    const copy = [...tagValue];
    const filterTarget = tagValue.filter((el) => el === e.target.value);
    if (
      e.key === "Enter" &&
      filterTarget.length === 0 &&
      e.target.value.length > 0 &&
      tagValue.length < 5
    ) {
      let tagObj = {};
      tagObj.tagName = e.target.value;
      copy.push(tagObj);
      setTagValue(copy);
      e.target.value = "";
    } else if (tagValue.length >= 5 && e.key === "Enter") {
      e.target.value = "";
    }
  };

  const deleteHandler = (idx) => {
    const copy = [...tagValue];
    const filtered = copy.filter((el, i) => i !== idx);
    setTagValue(filtered);
  };

  function handleSubmit() {
    const question = {
      title: titleValue,
      questionBody: contentValue,
      questionTagList: tagValue,
      userId: 1,
    };
    // await axios.post(`${process.env.REACT_APP_API_URL}/question`, question);
    axios
      .post(`${process.env.REACT_APP_API_URL}/question`, question)
      .then((response) => this.setState({ questionId: response.data.id }));

    alert("질문이 등록되었습니다");
    document.location.href = "/";
  }
  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <>
      <Container>
        <div className="wrapper">
          <div className="page-title">
            <div className="page-title-wrapper">Ask a question!</div>
          </div>
          <div className="input-container">
            <div className="input-title">
              <SectionTitle>Title</SectionTitle>
              <SectionDescription>
                Be specific and imagine you’re asking a question to another
                person. Minimum 15 characters.
              </SectionDescription>
              <Input
                height="2.5rem"
                width="95%"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                onChange={hadleTitleValueChange}
              ></Input>
              <div className="button-wrapper">
                <NextBtn backgroundcolor="white">
                  <button
                    className="next-btn"
                    disabled={titleValue.length < 15 ? "disabled" : null}
                    onClick={handleBtn1Click}
                  >
                    Next
                  </button>
                </NextBtn>
              </div>
            </div>
            <div className={isBtn1Click ? "input-body-disabled" : "input-body"}>
              <SectionTitle>Body</SectionTitle>
              <SectionDescription>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </SectionDescription>
              <Textarea
                onChange={handleContentValue}
                disabled={isBtn1Click ? "disabled" : null}
                ref={inputBodyRef}
              ></Textarea>
              <div className="button-wrapper">
                <NextBtn backgroundcolor="white">
                  <button
                    className="next-btn"
                    disabled={contentValue.length < 20 ? "disabled" : null}
                    onClick={handleBtn2Click}
                  >
                    Next
                  </button>
                </NextBtn>
              </div>
            </div>
            <div className={isBtn2Click ? "input-tag-disabled" : "input-tag"}>
              <SectionTitle>Tags</SectionTitle>
              <SectionDescription>
                Add up to 5 tags to describe what your question is about.
              </SectionDescription>

              <StyledTag>
                <div className="tag">
                  <ul>
                    {tagValue.map((tag, i) => (
                      <li key={i}>
                        <div>{tag.tagName}</div>
                        <div
                          className="delete"
                          onClick={() => deleteHandler(i)}
                        >
                          x
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Input
                    height="2.5rem"
                    width="100%"
                    placeholder="e.g. (vba sql-server r)"
                    onKeyUp={inputHandler}
                    disabled={isBtn1Click || isBtn2Click ? "disabled" : null}
                    ref={inputTagRef}
                  ></Input>
                </div>
              </StyledTag>

              <div className="button-wrapper">
                <NextBtn backgroundcolor="white">
                  <button
                    className="next-btn"
                    disabled={tagValue.length >= 1 ? null : "disabled"}
                    onClick={handleBtn3Click}
                  >
                    Next
                  </button>
                </NextBtn>
              </div>
            </div>
            <div className="button-container">
              <div className="button-wrapper2">
                <NextBtn backgroundcolor="#f8f9f9">
                  <button
                    className="next-btn"
                    disabled={
                      titleValue.length >= 15 &&
                      contentValue.length >= 20 &&
                      tagValue.length >= 1 &&
                      !isBtn3Click
                        ? null
                        : "disabled"
                    }
                    onClick={() => handleSubmit()}
                  >
                    Post your question
                  </button>
                </NextBtn>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AskQuestion;
