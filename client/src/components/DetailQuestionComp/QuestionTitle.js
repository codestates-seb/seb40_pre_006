import styled from "styled-components";
import { useRecoilState } from "recoil";
import { DetailQuestionInfoState, LoginState } from "../../atom/atom";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  padding-left: 10px;
  padding-bottom: 20px;

  border-bottom: 1px solid #e7e7e7;

  display: flex;
  flex-direction: column;

  .title-container {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-top: 20px;

    .title {
      font-size: 28px;
      padding-right : 20px;
    }

    button {
      height: 40px;
      min-width: 100px;

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
    display: flex;
    flex-direction: row;

    align-items: center;

    margin-top: 10px;

    .date {
      font-size: 13px;
      color : #535353;

      .date-label {
        font-size : 13px;
        color : #8b8b8b;
        font-weight : 400;

        margin-right : 5px;
      }
    }
    .view {
      margin-left : 30px;
      font-size: 13px;
      color : #535353;

      .view-label {
        font-size : 13px;
        color : #8b8b8b;
        font-weight : 400;

        margin-right : 5px;
      }

    }
  }
`;

const QuestionTitle = () => {
  const [questionInfo, setQuestionInfo] = useRecoilState(
    DetailQuestionInfoState
  );
  const [login, isLogin] = useRecoilState(LoginState);


  const handleDate = (createdAt) => {
    if(createdAt !== undefined){
      let date = new Date(createdAt);

      const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
      const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
      const kr_curr = utc + (KR_TIME_DIFF);

      date = new Date(kr_curr).toString();
      
      let splitDate = date.split(' ');
      let month = splitDate[1];
      let day =  splitDate[2];
      let year = splitDate[3];
      let time = splitDate[4].slice(0,5);
  
      return `${month} ${day}, ${year} at ${time}`
    }

  }

  const handleAskBtnClick = () => {
    let isGo = false;

    if (!login) {
      isGo = window.confirm(
        "로그인이 필요합니다! \n로그인 창으로 이동하시겠습니까?"
      );
      isGo ? (window.location = "/login") : console.log("stay");
    }else {
      window.location = "/ask";
    }
  };

  return (
    <>
      <Container>
        <div className="title-container">
          <div className="title">{questionInfo.title}</div>
          {/* <a href="/ask"> */}
            <button onClick={handleAskBtnClick}>Ask Question</button>
          {/* </a> */}
        </div>
        <div className="detail-info">
          <div className="date"><span className="date-label">Asked</span>{handleDate(questionInfo.createdAt)}</div>
          <div className="view"><span className="view-label">Viewed</span>{questionInfo.viewCount}</div>
        </div>
      </Container>
    </>
  );
};

export default QuestionTitle;
