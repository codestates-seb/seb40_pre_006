import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { isAskState } from "./atom/atom";
import { useState } from "react";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Questions from "./pages/Questions";
import Tags from "./pages/Tags";
import Users from "./pages/Users";
import Header from "./components/Header";
import AskQuestion from "./pages/AskQuestion";
import DetailQuestion from "./pages/DetailQuestion";
import SignUpForm from "./components/SignUpComponents/SignUpComp";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { FaLaptopHouse } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function App() {
  const [isAsk, setIsAsk] = useRecoilState(isAskState);
  const [view, setView] = useState(false);

  window.onload = () => {
    checkScreenSize();
  };

  window.onresize = () => {
    checkScreenSize();
  };

  const checkScreenSize = () => {
    let screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      setView(true);
    } else {
      setView(false);
    }
  };

  return (
    <>
      <Header />
      {!view &&
      (isAsk === "/ask" || isAsk === "/signUp" || isAsk === "/login") ? null : (
        <Container>
          <Aside />
          {/* <DetailQuestion /> */}
          <Routes>
            <Route path="/" element={<Questions />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/users" element={<Users />} />
            <Route path="/detailQuestion" element={<DetailQuestion />} />
          </Routes>
        </Container>
      )}

      <Routes>
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {isAsk === "/login" || isAsk === "/signUp" ? null : <Footer />}
    </>
  );
}

export default App;
