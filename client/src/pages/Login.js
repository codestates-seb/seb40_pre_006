import React from "react";
import styled from "styled-components";
import Oauth from "../components/LoginComponents/Oauth"

const Container = styled.div`
  border: 1px solid red;
`

function Login() {
  return (
    <Container>
      <Oauth />
    </Container>
  );
}

export default Login;
