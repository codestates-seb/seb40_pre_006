import styled from "styled-components";
import { Routes, Route, Link, useLocation } from "react-router-dom";
// import { useState } from "react";
import { FaGlobeAmericas } from 'react-icons/fa';
import { asideFocusState, headerToggleState, isAskState } from "../atom/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const Container = styled.div`

    width : 180px;
    height : flex;

    /* background-color : #5a5a5a; */

    
    border-right : 1px solid #e0e0e0;
    
    @media screen and (max-width: 640px){
        display : ${(props) => props.props ? 'block' : 'none'};
        width : 220px;
        height : 500px;

        position : absolute;
        left : 0;


    }


    .side-menu {
        width : 100%;
        height : 500px;

        position : sticky;
        top : 53px;

        background-color : white;
        
        
        .menu-list {
            list-style : none;
            padding-top : 30px;
        }

        .root {
            padding-left : 8px;
            padding-bottom : 5px;
            font-size : 12px;
            color : #5a5a5a;
        }
        

    }


`


const Menubox = styled.div`
    display : flex;
    flex-direction : row;
    /* justify-content : center; */
    align-items : center;

    height : 35px;

    cursor: pointer;
    font-weight : ${(props) => props.props ? 700 : 400};
    background-color : ${(props) => props.props ? '#ebebeb' : null};
    border-right : ${(props) => props.props ? '3px solid #e94302' : null};

    /* border : 1px solid red; */


    .icons {
            margin-right : 5px;
            margin-left : 8px;

            width : 20px;
            height : 20px;

            /* border : 1px solid red; */
        }
    .text {
        padding-bottom : 2px;
        font-size : 14px;
        color : #5a5a5a;
    }

`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color : #5a5a5a;
    }
`;

const Aside = () => {
    // const [focus, setFocus] = useState(1);
    const [ focus, setFocus ] = useRecoilState(asideFocusState);
    const [ toggle, setToggle ] = useRecoilState(headerToggleState);
    const [ isAsk, setIsAsk ] = useRecoilState(isAskState);
 

    let params = useLocation();
    setFocus(params.pathname);
    setIsAsk(params.pathname);

    // const handleClick = ( ) => {
    //     setFocus(params.pathname);
    // }

    return (
        <>
        <Container props={toggle}>
            
            <div className="side-menu">
                <ol className="menu-list">
                    <li className="root">PUBLIC</li>
                    <li className="node">
                        <StyledLink to="/">
                            <Menubox  props={focus === "/" ? focus : null}>
                                <div className="icons"><FaGlobeAmericas /></div>
                                <div className="text">Questions</div>
                            </Menubox>
                        </StyledLink>
                    </li>
                    <li className="node">
                        <StyledLink to="/tags">
                            <Menubox  props={focus === "/tags" ? focus : null}>
                                <div className="icons"></div>
                                <div className="text">Tags</div>
                            </Menubox>
                        </StyledLink>
                    </li>

                    <li className="node">
                        <StyledLink to="/users">
                            <Menubox  props={focus === "/users" ? focus : null}>
                            <div className="icons"></div>
                                <div className="text">Users</div>
                            </Menubox>
                        </StyledLink>
                    </li>
                </ol>
            </div>
        </Container>
        </>
    )
}


export default Aside;