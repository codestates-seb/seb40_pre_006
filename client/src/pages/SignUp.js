import styled from "styled-components";
import SignUpForm from "../components/SignUpComponents/SignUpComp";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUp = () => {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
