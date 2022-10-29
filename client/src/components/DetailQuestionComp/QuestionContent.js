import styled from "styled-components";
import { FaCaretUp } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  min-height: 400px;

  border-bottom: 1px solid #e2e2e2;

  display: flex;
  flex-direction: row;

  .vote {
    min-width: 50px;
    min-height: 400px;

    /* border : 1px solid red; */

    display: flex;
    flex-direction: column;

    justify-content: top;
    align-items: center;

    padding-top: 10px;
    margin-right: 20px;
    /* padding-left : 10px; */

    .count-container {
      display: flex;
      flex-direction: row;

      justify-content: left;
      align-items: center;

      width: 100%;
      height: 50px;

      /* border : 1px solid red; */

      .icons {
        font-size: 40px;
        padding-top: 10px;
        color: #b4b4b4;
        /* color : #ff4949; */

        cursor: pointer;
      }

      .count {
        font-size: 30px;
      }
    }

    .message {
      font-size: 12px;
      /* padding-right :10px; */

      color: #fc3a6b;
      font-weight: 800;
    }
  }

  .main {
    display: flex;
    flex-direction: column;

    /* border: 1px solid red; */

    width: 100%;

    .content-container {
      width: 100%;
      min-height: 80%;

      display: flex;
      flex-direction: row;

      justify-content: space-between;

      margin-bottom: 20px;
      /* border: 1px solid red; */

      .content {
        width: 90%;
        padding: 5px;
        padding-top: 20px;

        color: #3a3a3a;

        font-size: 15px;

        /* overflow : auto; */
        /* border: 1px solid red; */
      }

      .delete {
        min-width: 100px;

        /* border: 1px solid red; */

        display: flex;
        flex-direction: row;

        justify-content: right;
        align-items: top;

        /* padding-left: 25px; */

        padding-top: 23px;

        button {
          height: 30px;
          width: 70px;

          border: 0.5px solid #d10404;
          border-radius: 3px;
          background-color: #ff4646;

          color: white;
          font-size: 13px;

          cursor: pointer;

          &:hover {
            background-color: #db2222;
          }
        }
      }
    }

    .extra-info {
      width: 100%;
      height: 80px;

      /* border: 1px solid blue; */

      .detail-info {
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        .tags-container {
          display: flex;
          flex-direction: row;

          /* border: 1px solid red; */

          height: 25px;

          .tags {
            color: hsl(205, 50%, 25%);
            background-color: hsl(205, 53%, 88%);

            display: flex;

            justify-content: center;
            align-items: center;

            height: 25px;
            /* text-align : center; */

            font-size: 0.8rem;

            margin-right: 10px;
            padding: 10px;
            /* padding-bottom : 10px; */

            border-radius: 3px;
            font-weight: 400;
          }
        }

        .author {
          font-size: 15px;
          color: #6d6d6d;
        }
      }

      .edit-container {
        display: flex;
        flex-direction: column;

        justify-content: center;

        margin-top: 5px;
        margin-left: 4px;
        /* border: 1px solid blue; */

        .edit-btn {
          height: 25px;
          width: 50px;

          /* border: 0.5px solid #da8f05; */
          /* border-radius: 3px; */
          /* background-color: #ff9102; */

          color: #727272;
          font-size: 15px;
          cursor: pointer;

          &:hover {
            color: #008cff;
          }
        }
      }
    }
  }
`;

const QuestionContent = () => {
  return (
    <>
      <Container>
        <div className="vote">
          <div className="count-container">
            <div className="icons">
              <FaCaretUp />
            </div>
            <div className="count">0</div>
          </div>
          {/* <div className="message">로그인이 필요합니다</div> */}
        </div>
        <div className="main">
          <div className="content-container">
            <div className="content">
              seraphic aurora laptop fascinating aurora fabulous masquerade
              kitten illusion seraphic twilight serendipity lucid serendipity
              flora blush serendipity masquerade flora twilight hello ice world
              cresent seraphic seraphic ice way twinkle marshmallow shine
              carnival shine baby florence flutter laptop kitten destiny
              illusion you computer adorable cresent adorable hello girlish ice
              iris cresent. heimish droplet droplet stella flutter twinkle like
              lucid girlish apple carnival flutter you requiem cream purity
              world heimish adolescence kitten kitten carnival laptop flutter
              way aurora purity baby lovable ice adolescence stella destiny
              aurora miracle carnival milky droplet baby lucid milky cream
              blossom destiny charming milky lovable way ideale sunrise.
              twilight masquerade milky lovable fascinating aurora serendipity
              masquerade blossom like adolescence sunrise miracle destiny flora
              twinkle hello aurora lucid way adorable haze adorable twinkle
              cherish computer grapes laptop purity adolescence blossom lucid
              shine cherish cresent way carnival marshmallow requiem way honey
              way world blossom destiny serendipity heimish carnival girlish
              milky. moonlight serendipity twilight carnival blossom fascinating
              laptop iris fascinating florence girlish apple fascinating
              twilight lucid world adolescence world twinkle purity illusion
              masquerade eunoia blossom adorable eunoia bijou marshmallow
              droplet haze fabulous iris destiny haze twinkle adolescence flora
              haze world hello serendipity masquerade requiem fabulous
              adolescence fascinating like way marshmallow fascinating. pure
              lucid seraphic aurora purity banana stella flutter requiem
              moonlight vanilla flutter lucy iris girlish computer pure fabulous
              honey banana kitten apple serendipity requiem kitten stella shine
              hello marshmallow requiem destiny like twinkle vanilla iris way
              iris destiny bijou apple twinkle like shine banana adolescence
              aurora requiem melody you miracle.
            </div>
            <div className="delete">
              <button>delete</button>
            </div>
          </div>
          <div className="extra-info">
            <div className="detail-info">
              <div className="tags-container">
                <div className="tags">javascript</div>
                <div className="tags">C++</div>
              </div>
              <div className="author">author : Kim coding</div>
            </div>
            <div className="edit-container">
              <div className="edit-btn">edit</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default QuestionContent;
