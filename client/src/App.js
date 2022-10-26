import './App.css';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <RecoilRoot>
      <Footer />
    </RecoilRoot>
    </>
  );
}

export default App;
