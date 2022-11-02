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

  .text-container {
    width: 50%;
    /* border: 1px solid black; */
  }

  .signup-container {
    width: 50%;
    margin-left: 50px;
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
