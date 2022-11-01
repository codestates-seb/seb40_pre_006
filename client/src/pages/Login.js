import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isAskState } from "../atom/atom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Oauth from "../components/LoginComponents/Oauth";

const Container = styled.div`
  width: 100vw;
  height: 93vh;

  /* border : 1px solid red; */

  background-color: #f1f2f3;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  .login-container {
    width: 350px;
    height: 350px;
    margin-top : 10px;

    background-color: white;
    box-shadow: 3px 3px 30px #d6d6d6;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    .label {
      width: 275px;
      height: 30px;

      font-weight: 600;
    }
    input {
      width: 275px;
      height: 35px;
      margin-bottom: 5px;

      border-radius: 5px;
      border: 1px solid #b9b9b9;
      padding: 3px;

      color: #575656;

      &:focus {
        outline: none;
        border: 1px solid #6bbbf7;
        /* box-shadow : 3px 3px 10px #addcff; */
      }
    }

    .pass-message {
      font-size : 13px;
      margin-left : 115px;
      /* border : 1px solid red; */
      margin-bottom : 10px;
      /* margin-top : 5px; */
      color : #1693fa;
    }
    .fail-message {
      font-size : 13px;
      margin-left : 75px;
      /* border : 1px solid red; */
      margin-bottom : 10px;
      /* margin-top : 5px; */
      color : #ff3535dc;

    }

    .btn-container {
      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      margin-top: 20px;

      .login-btn {
        width: 275px;
        height: 40px;

        border: 0.5px solid #0074cc;
        border-radius: 5px;
        background-color: #1693fa;

        color: white;
        font-size: 13px;

        cursor: pointer;

        &:hover {
          background-color: #0066cc;
        }
      }

      .login-btn-inactive {
        width: 275px;
        height: 40px;

        border: 0.5px solid #bfe2ff;
        border-radius: 5px;
        background-color: #2e6280;

        color: white;
        font-size: 13px;
      }
      .signup-btn {
        width: 275px;
        height: 40px;
        margin-top: 10px;

        border: 0.5px solid #d0eeff;
        border-radius: 5px;
        background-color: #747777;

        color: white;
        font-size: 13px;

        cursor: pointer;

        &:hover {
          background-color: #2c5680;
        }
      }
    }
  }
`;

const Login = () => {
  const [isAsk, setIsAsk] = useRecoilState(isAskState);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pass, setPass] = useState("");

  let params = useLocation();
  setIsAsk(params.pathname);

  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
    const emailRex = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;

    if (emailRex.test(email)) {
      setPass(true);
    } else {
      setPass(false);
    }
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  }

  return (
    <>
      <Container>
        <Oauth />
        <div className="login-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="label">Email</div>
            <input type="text" value={email} onChange={handleEmailChange}></input>
            {pass === "" ? null : pass ? (
              <div className="pass-message">올바른 이메일 형식입니다!</div>
            ) : (
              <div className="fail-message" >올바르지 않은 이메일 형식입니다!</div>
            )}
            <div className="label">Password</div>
            <input type="password" name="password" autoComplete="off" onChange={handlePwChange} value={pw}></input>
            <div className="btn-container">
              {pass && pw ? <button type="submit" className="login-btn" >Log in</button> : <button type="submit" className="login-btn-inactive" >Log in</button>}
              
              <button className="signup-btn">Sign up</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
