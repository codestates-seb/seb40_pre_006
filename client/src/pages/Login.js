import React from "react";
import styled from "styled-components";
import Oauth from "../components/LoginComponents/Oauth"
import SignUpText from "../components/LoginComponents/SignUpText";

const Container = styled.div`
  border: 1px solid red;
`

function Login() {
  return (
    <Container>
      <Oauth />
      <SignUpText />
    </Container>
  );
}

export default Login;
