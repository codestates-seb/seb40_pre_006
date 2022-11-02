import styled from "styled-components";
import SignUpForm from "../components/SignUpComponents/SignUpComp";
import SignUpText from "../components/LoginComponents/SignUpText";
import Oauth from "../components/LoginComponents/Oauth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f1f2f3;
  @media screen and (max-width: 850px) {
    justify-content: center;
  }

  .text-container {
    width: 50%;
    min-width: 420px;
    /* border: 1px solid black; */
    @media screen and (max-width: 850px) {
      display: none;
    }
  }

  .signup-container {
    width: 50%;
    margin-left: 50px;
    min-width: 400px;

    /* border: 1px solid red; */
  }
`;

const SignUp = () => {
  return (
    <Container>
      <div className="text-container">
        <SignUpText />
      </div>
      <div className="signup-container">
        <Oauth />
        <SignUpForm />
      </div>
    </Container>
  );
};

export default SignUp;
