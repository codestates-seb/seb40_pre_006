import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {
  headerToggleState,
  headerClickState,
  userNameState,
  LoginState,
  pageState,
  questionOptionFocusState,
  userIdState
} from "../atom/atom";
import { useRecoilState } from "recoil";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 52px;
  background-color: #f8f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1rem;
  /* padding-left : 6%; */
  border-top: 4px solid #f38237;
  /* border-bottom: 1px solid #e7e7e7; */
  box-shadow: 0.8px 0.8px 0.8px 0.8px #e7e7e7;

  /* 수정사항 */
  z-index: 1;




  .logo {
    /* border : 1px solid red; */
    width: 180px;
    cursor: pointer;
  }
`;

const MenuIcon = styled(FaBars)`
  /* 수정사항 */
  cursor: pointer;

  @media screen and (max-width: 640px) {
    margin-left: 1rem;
    color: #2e3134;
    font-size: 18px;
  }
  @media (min-width: 640px) {
    display: none;
  }

`;

const LogoImg = styled.img`
  margin-left: 1rem;
  width: 150px;
  height: 30px;
  @media screen and (max-width: 400px) {
    width : 120px;
    height : 25px;
  }
`;

const Searchbar = styled.div`
  background-color: white;
  /* width: 65.8rem; */
  width: 71.8rem;
  height: 36px;
  margin-left: 0.5rem;
  margin-right: 10px;
  border-radius: 3px;
  border: 0.5px solid #dadde0;
  display: flex;
  align-items: center;
  &:focus-within {
    border: 1px solid #6bbbf7;
  }
  @media screen and (max-width: 640px) {
    margin-left: 0px;
    margin-right: 0px;
    position: fixed;
    width: 100vw;
    top: 60px;
    left: 0;
    z-index: 1;
    display: ${({ searchClick }) => {
      return searchClick === false ? "none" : "flex";
    }};
  }
`;

const InputSearchIcon = styled(FaSearch)`
  margin-left: 8px;
  height: 20px;
  width: 20px;
  color: #9ba1a8;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  margin-left: 0.5rem;
  border: none;
  /* webkit-appearance: none; */
  &::-webkit-appearance {
    border: none;
  }
  &::placeholder {
    font-size: 0.95rem;
  }
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  @media screen and (min-width: 641px) {
    display: none;
  }
  @media screen and (max-width: 640px) {
    height: 20px;
    width: 20px;
    /* color: #9ba1a8; */
    /* background-color: red; */
    margin-left: 8px;
    color: #2e3134;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  width: 170px;
  display: flex;

  border: 1px soild red;
  @media screen and (max-width: 640px) {
    position: fixed;
    right: 1.2rem;
    top: 10px;
    /* align-items : center;  */
  }

  @media screen and (max-width : 400px) {
    right : 0;
    justify-content : center;
    align-items : center;
  }
`;

const Button = styled.button`
  font-size: 0.95rem;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  margin-right: ${(props) => props.marginright};
  width: ${(props) => props.width};
  height: 36px;
  border-radius: 3px;
  border: ${(props) => props.border};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverbackcolor};
  }

  @media screen and (max-width : 400px) {
    width : 70px;
    font-size : 0.8rem;
  }
`;

const RightContainer = styled.div`
  /* border : 1px solid red; */
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Header() {
  const [menuClick, setMenuClick] = useRecoilState(headerToggleState);
  const [searchClick, setSearchClick] = useRecoilState(headerClickState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const [userId, setUserId] = useRecoilState(userIdState);

  const [page, setPage] = useRecoilState(pageState);
  const [opt, setOpt] = useRecoilState(questionOptionFocusState);

  const handleClickMenu = () => {
    setMenuClick(!menuClick);
    setSearchClick(false);
  };

  const handleClickSearch = () => {
    setSearchClick(!searchClick);
    setMenuClick(false);
  };

  const handleLogoClick = () => {
    document.location.href = "/";
    // window.location.reload();
    setPage(1);
    setOpt(1);
  };

  const handleLogOut = () => {
    if (isLogin === true) {
      setIsLogin(false);
      setUserName("");
      setUserId(0);

      alert("로그아웃 되었습니다.");
      // window.location.reload();
    }
  };

  return (
    <Wrapper>
      <MenuIcon onClick={handleClickMenu} />
      <div className="logo" onClick={handleLogoClick}>
        <LogoImg src="img/logo-stackoverflow.png" alt="logo" />
      </div>
      <RightContainer>
        <Searchbar searchClick={searchClick}>
          <InputSearchIcon />
          <Input placeholder="Search..."></Input>
        </Searchbar>
        <SearchIcon
          onClick={(e) => {
            handleClickSearch();
            e.stopPropagation();
          }}
        />
        <ButtonWrapper>
          <a href={isLogin ? null : "/login"}>
            <Button
              backgroundcolor="#E1ECF4"
              color="#2C5877"
              marginright="7px"
              width="82px"
              border="0.5px solid #7aa7c7"
              hoverbackcolor="#B3D3EA"
            >
              {isLogin ? userName : "Log in"}
            </Button>
          </a>
          <a href={isLogin ? "/login" : "/signUp"}>
            <Button
              backgroundcolor="#1693FA"
              color="#FFFFFF"
              className="sign-up"
              width="87px"
              border="0.5px solid #0074CC"
              hoverbackcolor="#0066cc"
              onClick={handleLogOut}
            >
              {isLogin ? "Log Out" : "Sign up"}
            </Button>
          </a>
        </ButtonWrapper>
      </RightContainer>
    </Wrapper>
  );
}

export default Header;
