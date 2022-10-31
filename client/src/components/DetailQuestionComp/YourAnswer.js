import { useRecoilState } from "recoil";
import styled from "styled-components";
import { answerContentValueState } from "../../atom/atom";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */

  .title-container {
    height: 65px;
    font-size: 1.35rem;
    color: #232629;
    padding: 1px 0px;
    display: flex;
    align-items: center;
    /* background-color: pink; */
  }
  .content-container {
    height: 300px;
    /* background-color: violet; */
  }

  .btn-container {
    /* background-color: aliceblue; */
    height: 80px;
  }

  .post-btn {
    width: flex;
    height: flex;
    padding: 10px;
    background-color: #1693fa;
    border: 0.5px solid #0074cc;
    border-radius: 3px;
    color: #ffffff;
    margin-top: 20px;
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

const Textarea = styled.textarea`
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #babfc4;
  border-radius: 3px;
  /* margin-top: 5px; */
  resize: none;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1px solid #6bbbf7;
  }
`;

const YourAnswer = () => {
  const [answerContent, setAnswerContent] = useRecoilState(
    answerContentValueState
  );

  const handleAsnwerContentValue = (e) => {
    setAnswerContent(e.target.value);
  };

  async function handleAnswerSubmit() {
    const answer = {
      questionId: "1",
      answerBody: answerContent,
      userId: 1,
    };
    // await axios.post(`${process.env.REACT_APP_API_URL}/answer`, answer);
    axios
      .post("http://localhost:3001/question", answer)
      .then((response) => this.setState({ answerId: response.data.id }));

    window.location.reload();
  }

  return (
    <Container>
      <div className="title-container">Your Answer</div>
      <div className="content-container">
        <Textarea onChange={handleAsnwerContentValue} />
      </div>
      <div className="btn-container">
        <button
          className="post-btn"
          disabled={answerContent.length > 0 ? null : "disabled"}
          onClick={handleAnswerSubmit}
        >
          Post Your Answer
        </button>
      </div>
    </Container>
  );
};

export default YourAnswer;
