import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  questionTitleValueState,
  questionContentValueState,
  questionTagValueState,
} from "../atom/atom";

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
    height: 1200px;
    /* border: 10px solid black; */
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
  }

  .input-tag {
    height: flex;
    background-color: white;
    /* background-color:pink */
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e6e8;
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
  width: 95%;
  height: ${(props) => props.height};
  border: 1px solid #babfc4;
  border-radius: 3px;
  margin-top: 5px;
  padding-left: 10px;
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
`;

const NextBtn = styled.button`
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
    &:hover {
      cursor: pointer;
      background-color: #0066cc;
    }
    :disabled {
      cursor: default;
      background-color: #9fc3fb;
      border: none;
    }
  }
`;

const AskQuestion = () => {
  const [titleValue, setTitleValue] = useRecoilState(questionTitleValueState);
  const [contentValue, setContentValue] = useRecoilState(
    questionContentValueState
  );

  const hadleTitleValueChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleContentValue = (e) => {
    setContentValue(e.target.value);
  };
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
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                onChange={hadleTitleValueChange}
              ></Input>
              <div className="button-wrapper">
                <NextBtn backgroundcolor="white">
                  <button
                    className="next-btn"
                    disabled={titleValue.length < 15 ? "disabled" : null}
                  >
                    NextBtn
                  </button>
                </NextBtn>
              </div>
            </div>
            <div className="input-body">
              <SectionTitle>Title</SectionTitle>
              <SectionDescription>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </SectionDescription>
              <Textarea onChange={handleContentValue}></Textarea>
              <div className="button-wrapper">
                <NextBtn backgroundcolor="white" s>
                  <button
                    className="next-btn"
                    disabled={contentValue.length < 20 ? "disabled" : null}
                  >
                    NextBtn
                  </button>
                </NextBtn>
              </div>
            </div>
            <div className="input-tag">
              <SectionTitle>Title</SectionTitle>
              <SectionDescription>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </SectionDescription>
              <Input
                height="2.5rem"
                placeholder="e.g. (vba sql-server r)"
              ></Input>
              <div className="button-wrapper">
                <NextBtn backgroundcolor="white">
                  <button className="next-btn">NextBtn</button>
                </NextBtn>
              </div>
            </div>
            <div className="button-container">
              <div className="button-wrapper2">
                <NextBtn backgroundcolor="#f8f9f9">
                  <button
                    className="next-btn"
                    disabled={
                      titleValue.length >= 15 && contentValue.length >= 20
                        ? null
                        : "disabled"
                    }
                  >
                    Post your question
                  </button>
                </NextBtn>
                {/* <NextBtn disabled={true}>Post your question</NextBtn> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AskQuestion;

// #9FC3FB disabled
