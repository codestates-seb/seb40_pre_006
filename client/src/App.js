import './App.css';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import { isAskState } from './atom/atom';

import Footer from "./components/Footer";
import Aside from './components/Aside';
import Questions from './pages/Questions';
import Tags from './pages/Tags';
import Users from './pages/Users';
import Header from './components/Header';
import AskQuestion from './pages/AskQuestion';

const Container = styled.div`
  display : flex;
  flex-direction : row;
  justify-content : center;

  /* background-color : #ff7b7b; */
`



function App() {
  const [ isAsk, setIsAsk ] = useRecoilState(isAskState);

  return (
    <>
      <Header />
      {isAsk === "/ask" ? null : 
      <Container>
        <Aside/>
        <Routes>
          <Route path='/' element={<Questions />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </Container>
      }
      <Routes>
        <Route path='/ask' element={<AskQuestion/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
