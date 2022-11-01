import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";

const Container = styled.div`
  border: 5px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  button {
    width: 350px;
    height: 42px;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid hsl(210, 8%, 85%);
    display: flex;
    justify-content: center;
    align-items: center;

    :first-of-type {
      background-color: white;
      color: hsl(210, 8%, 25%);

      :hover {
        background-color: #f8f9f9;
      }
    }
    :nth-of-type(2) {
      background-color: hsl(210, 8%, 20%);
      color: white;

      :hover {
        background-color: #23262a;
      }
    }
    :nth-of-type(3) {
      background-color: #385499;
      color: white;

      :hover {
        background-color: #314a86;
      }
    }
  }
`;

function Oauth() {
  return (
    <Container>
      <button>
        <FcGoogle className="logo" alt="GoogleLogo" />
        Log in with Google
      </button>
      <button>
        <AiFillGithub className="logo" alt="githubLogo" />
        Log in with Github
      </button>
      <button>
        <AiFillFacebook className="logo" alt="facebookLogo" />
        Log in with Facebook
      </button>
    </Container>
  );
}

export default Oauth;
