import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterBox = styled.footer`
  display: flex;
  color: #9199a1; // 본문 text 색
  background-color: #232629; // background
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 10px;

  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 640px) {
    margin: -24px 0 12px 0;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex: 2 1 auto;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FooterCol = styled.div`
  flex: 1 0 auto;
  padding: 0 12px 24px 0;

  h5 {
    color: #babfc4; // title 색
    margin: 0px 0px 12px;
    font-size: 0.825rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 12px;
      row-gap: 8px;
    }
  }

  li {
    padding: 4px 0;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 17px;

    @media (max-width: 1000px) {
      line-height: 7px;
    }

    @media (max-width: 640px) {
      padding: 2px 0;
    }
  }

  a {
    text-decoration: none;
    color: #9199a1; // 본문 text 색

    &:hover {
      color: #babfc4; // hover시, 밝아지는 색
    }
  }
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 150px;

  @media (max-width: 1000px) {
    flex: 1 1 100px;
  }
`;

const FooterSns = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0;
  padding: 0 67.5px 0 0;
  color: #9199a1; //본문 text 색

  li {
    display: inline-block;
    flex-direction: row;
    padding: 4px 12px 0 0;
    margin: 0;
    font-size: 0.7rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #9199a1; // 본문 text 색

    &:hover {
      color: #babfc4; // hover시, 밝아지는 색
    }
  }

  @media (max-width: 1000px) {
    margin-top: auto;
    justify-content: start;

    ul {
      justify-content: start;
    }
  }
`;

const FooterEtc = styled.p`
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: 24px;
  line-height: 15px;

  .underline {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    margin-top: 12px;
    justify-content: start;
  }
`;

function Footer() {
  const stackoverflowLinks = [
    { name: "Questions", site: "https://stackoverflow.com/questions" },
    { name: "Help", site: "https://stackoverflow.com/help" },
  ];

  const productsLinks = [
    { name: "Teams", site: "https://stackoverflow.co/teams/" },
    { name: "Advertising", site: "https://stackoverflow.co/advertising/" },
    { name: "Collectives", site: "https://stackoverflow.co/collectives/" },
    { name: "Talent", site: "https://stackoverflow.co/talent/" },
  ];

  const companyLinks = [
    { name: "About", site: "https://stackoverflow.co/" },
    { name: "Press", site: "https://stackoverflow.co/company/press" },
    { name: "Work Here", site: "https://stackoverflow.co/company/work-here" },
    { name: "Legal", site: "https://stackoverflow.com/legal/terms-of-service" },
    {
      name: "Privacy Policy",
      site: "https://stackoverflow.com/legal/privacy-policy",
    },
    {
      name: "Terms of Service",
      site: "https://stackoverflow.com/legal/terms-of-service",
    },
    { name: "Contact Us", site: "https://stackoverflow.co/company/contact" },
    { name: "Cookie Settings", site: "https://stackoverflow.com/questions" }, // 모달 창이 띄워지지만 일단, 홈(question)으로 연결해놓겠습니다.
    {
      name: "Cookie Policy",
      site: "https://stackoverflow.com/legal/cookie-policy",
    },
  ];

  const stackLinks = [
    // stack exchange network 이름이 너무 길어 일단, stack으로 축약했습니다.
    { name: "Technology", site: "https://stackexchange.com/sites#technology" },
    {
      name: "Culture & recreation",
      site: "https://stackexchange.com/sites#culturerecreation",
    },
    { name: "Life & arts", site: "https://stackexchange.com/sites#lifearts" },
    { name: "Science", site: "https://stackexchange.com/sites#science" },
    {
      name: "Professional",
      site: "https://stackexchange.com/sites#professional",
    },
    { name: "Business", site: "https://stackexchange.com/sites#business" },
    { name: "API", site: "https://api.stackexchange.com/" }, // 미래에 api 문서가 만들어진다면, 이곳에 들어가야 함.
    { name: "Data", site: "https://data.stackexchange.com/" },
  ];

  const snsLinks = [
    {
      name: "Blog",
      site: "https://stackoverflow.blog/?blb=1&_ga=2.19642040.1615183858.1662280300-2146038593.1639151021",
    },
    {
      name: "Facebook",
      site: "https://www.facebook.com/officialstackoverflow/",
    },
    { name: "Twitter", site: "https://twitter.com/stackoverflow" },
    {
      name: "LinkedIn",
      site: "https://www.linkedin.com/company/stack-overflow/",
    },
    { name: "Instagram", site: "https://www.instagram.com/thestackoverflow/" },
  ];

  return (
    <FooterBox>
      <FooterContainer>
        <FooterLogo>
          <a href="http://localhost:3001/">
            <img
              src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded"
              alt="logo"
            />
          </a>
        </FooterLogo>
        <FooterNav>
          <FooterCol>
            <h5>STACK OVERFLOW</h5>
            <ul>
              {stackoverflowLinks.map((el, idx) => {
                if (el.name === "Questions") {
                  return (
                    <Link to="/">
                      <li key={idx}>
                        {/* <a key={idx} href={el.site}> */}
                          {el.name}
                        {/* </a> */}
                      </li>
                    </Link>
                  );
                } else {
                  return (
                    <li key={idx}>
                      <a key={idx} href={el.site}>
                        {el.name}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </FooterCol>
          <FooterCol>
            <h5>PRODUCTS</h5>
            <ul>
              {productsLinks.map((el, idx) => (
                <li key={idx}>
                  <a key={idx} href={el.site}>
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>
          <FooterCol>
            <h5>COMPANY</h5>
            <ul>
              {companyLinks.map((el, idx) => (
                <li key={idx}>
                  <a key={idx} href={el.site}>
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>
          <FooterCol>
            <h5>STACK EXCHANGE NETWORK</h5>
            <ul>
              {stackLinks.map((el, idx) => (
                <li key={idx}>
                  <a key={idx} href={el.site}>
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCopyright>
            <FooterSns>
              {snsLinks.map((el, idx) => (
                <li key={idx}>
                  <a key={idx} href={el.site}>
                    {el.name}
                  </a>
                </li>
              ))}
            </FooterSns>
            <FooterEtc>
              Site design / logo © 2022 Stack Exchange Inc; user contributions
              licensed under <span className="underline">CC BY-SA</span>.
              <span> rev 2022.8.24.42908</span>
            </FooterEtc>
          </FooterCopyright>
        </FooterNav>
      </FooterContainer>
    </FooterBox>
  );
};

export default Footer;

