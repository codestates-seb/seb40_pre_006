import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import axios from "axios";
import {
  signUpEmailValueState,
  signUpEmailMessageState,
  signUpPasswordValueState,
  signUpPasswordMessageState,
  signUpNameValueState,
  signUpResponseState,
  signUpNameMessageState,
  signUpEmailDuplicationState,
} from "../../atom/atom";
import { useEffect } from "react";

const Container = styled.div`
  width: 350px;
  min-height: 460px;
  /* background-color: pink; */
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 30px #d6d6d6;
  /* border: 1px solid black; */

  .wrapper {
    width: 300px;
    /* height: 400px; */
    height: flex;
    /* padding: 10px 0px; */
    /* background-color: w; */
  }

  .name-container {
    width: 100%;
    /* height: 100px; */
    height: flex;
    /* border: 1px solid black; */
  }

  .email-container {
    width: 100%;
    height: flex;
    margin-top: 20px;
    /* border: 1px solid black; */
  }

  .password-container {
    width: 100%;
    height: flex;
    margin-top: 20px;
    /* border: 1px solid black; */
  }

  .btn-container {
    width: 100%;
    height: flex;
    /* height: 80px; */
    /* border: 1px solid black; */
  }

  .title {
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    /* border: 1px solid black; */
  }

  .signup-btn {
    width: 100%;
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

  .message {
    /* width: 100% */
    font-size: 0.83rem;
    color: #d4474c;
    margin-bottom: 5px;
    /* border: 1px solid red; */
  }

  .password-description {
    font-size: 0.83rem;
    color: #737f8d;
    margin-bottom: 5px;
    /* border: 1px solid red; */
  }
`;

const Input = styled.input`
  align-items: center;
  width: 100%;
  height: 32px;
  border: 1px solid #babfc4;
  /* border: ${(props) => props.border}; */
  border-radius: 3px;
  margin: 5px 0px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1px solid #6bbbf7;
    /* border: ${(props) => props.focusedborder}; */
  }
`;

const SignUpForm = () => {
  const [email, setEmail] = useRecoilState(signUpEmailValueState);
  const [emailMessage, setEmailMessage] = useRecoilState(
    signUpEmailMessageState
  );
  const [emailDuplication, setEmailDuplication] = useRecoilState(
    signUpEmailDuplicationState
  );
  const [password, setPassword] = useRecoilState(signUpPasswordValueState);
  const [passwordMessage, setPasswordMessage] = useRecoilState(
    signUpPasswordMessageState
  );
  const [name, setName] = useRecoilState(signUpNameValueState);
  const [nameMessage, setNameMessage] = useRecoilState(signUpNameMessageState);
  const [errorResponse, setErrorResponse] = useRecoilState(signUpResponseState);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const isValidName = /(^[a-z]{1,10})/g;

  const isValidEmail = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;

  // /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  // /^(?=.*[a-zA-z])(?=.*[0-9]).{8,}$/;
  // ("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$");
  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/

  const isValidPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  let number = password.search(/[0-9]/g);
  let english = password.search(/[a-z]/gi);
  let capitalEnglish = name.search(/[A-Z]/gi);
  let spece = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (!isValidEmail.test(email)) {
    setEmailMessage(`${email} is not a valid email address`);
  } else setEmailMessage("이메일 형식 맞음");

  if (number < 0) {
    setPasswordMessage("Please add numbers to make your password stronger");
  } else if (english < 0) {
    setPasswordMessage("Please add letters to make your password stronger");
  } else if (spece < 0) {
    setPasswordMessage(
      "Please add special characters to make your password stronger"
    );
  } else if (password.length < 8) {
    setPasswordMessage(
      `Must contain at least ${8 - password.length} more characters`
    );
  } else if (isValidPassword.test(password)) {
    setPasswordMessage("비밀번호 형식 맞음");
  }

  if (!isValidName.test(name)) {
    setNameMessage(`${name} is not a valid name`);
  } else if (name.length > 10) {
    setNameMessage("Name must contain 10 characters or less");
  } else {
    setNameMessage("");
  }

  const handleSignUp = () => {
    const user = {
      email,
      name,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/user`, user)
      .then((response) => {
        setEmailDuplication("");
        setNameMessage("");
      })
      .then(() => {
        console.log("회원가입 성공");
        alert("회원가입이 완료되었습니다");
        window.location.href = "/login";
      })
      .catch((err) => setErrorResponse(err.response["data"]["message"]));
  };

  if (errorResponse.length > 0) {
    if (errorResponse === "Email and User exist") {
      setNameMessage("User already exist");
      setEmailDuplication("Email already exist");
    } else if (errorResponse === "User exists") {
      setNameMessage("User already exist");
      setEmailDuplication("");
    } else if (errorResponse === "Email exists") {
      setEmailDuplication("Email already exist");
      setNameMessage("");
    }
  }

  return (
    <>
      <Container>
        <div className="wrapper">
          <div className="name-container">
            <div className="title">Display name</div>
            <Input onChange={handleName}></Input>
            <div className="message">{name && nameMessage}</div>
            <div className="password-description">
              Name could contain only lowercases and numbers
            </div>
          </div>
          <div className="email-container">
            <div className="title">Email</div>
            <Input
              onChange={handleEmail}
              // border={
              //   isValidEmail.test(email)
              //     ? "1px solid #2F6F44"
              //     : "1px solid #babfc4"
              // }
              // focusedborder={
              //   isValidEmail.test(email)
              //     ? "1px solid #2F6F44"
              //     : "1px solid #6bbbf7"
              // }
            ></Input>
            {isValidEmail.test(email) ? null : (
              <div className="message">{email && emailMessage}</div>
            )}
            {emailDuplication.length > 0 ? (
              <div className="message">{email && emailDuplication}</div>
            ) : null}
          </div>
          <div className="password-container">
            <div className="title">Password</div>
            <Input type="password" onChange={handlePassword}></Input>
            {isValidPassword.test(password) ? null : (
              <div className="message">{password && passwordMessage}</div>
            )}
            <div className="password-description">
              Passwords must contain at least eight characters, including at
              least 1 letter, 1 number and 1 special character
            </div>
          </div>
          <div className="btn-container">
            <button
              className="signup-btn"
              disabled={
                name.length > 10 ||
                name.length < 1 ||
                email.length < 1 ||
                password.length < 1 ||
                !isValidEmail.test(email) === true ||
                isValidPassword.test(password) === false
                  ? "disabled"
                  : null
              }
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUpForm;
