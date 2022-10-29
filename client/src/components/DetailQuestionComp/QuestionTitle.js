
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  padding-left: 10px;
  padding-bottom : 20px;

  border-bottom: 1px solid #e7e7e7;

  display : flex;
  flex-direction : column;


  .title-container {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-top : 20px;


    .title {
        font-size : 28px;
    }


    button {
      height: 40px;
      width: 100px;

      border: 0.5px solid #0074cc;
      border-radius: 3px;
      background-color: #1693fa;

      color: white;
      font-size: 13px;


      cursor: pointer;

      &:hover {
        background-color: #0066cc;
      }
    }
  }


  .detail-info {
    display : flex;
    flex-direction : row;

    align-items : center;

    margin-top : 10px;


    .date {
        font-size : 13px;
    }
  }
`;

const QuestionTitle = () => {
  return (
    <>
      <Container>
        <div className="title-container">
          <div className="title">Title</div>
          <a href="/ask">
            <button>Ask Question</button>
          </a>
        </div>
        <div className="detail-info">
            <div className="date">yyyy년 mm월 dd일 hh시 mm분</div>
        </div>
      </Container>
    </>
  );
};

export default QuestionTitle;