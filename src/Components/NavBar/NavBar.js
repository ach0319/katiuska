import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { User } from "react-feather";
import logo from "../../Components/Images/logo.png";

function Nav() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <Styles.Wrapper>
      <CSSReset />
      <Styles.Logo></Styles.Logo>
      {isMobile ? (
        <MobileNavbar.Wrapper>
          <MobileNavbar.Items>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <User size={18} />
              </MobileNavbar.Icon>
              Contact
            </MobileNavbar.Item>
          </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
      ) : (
        <Navbar.Wrapper>
          <Navbar.Logo></Navbar.Logo>
          <Navbar.Title>Katiuska Beads</Navbar.Title>       
          <Navbar.Items>
            <Navbar.Item>Contact</Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      )}
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #979797;
    height: 8.5vh;
    @media only screen and (max-width: 425px) {
      height: 8vh;
    }
  `,
  Logo: styled.div`
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 425px) {
    background-image: url(${logo});
    width: 65px;
    height: 64px;
    background-repeat: no-repeat;
    background-position: center 1px;
    background-size: cover;
  }`
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    padding: .5rem;
    align-self: flex-start;
    color: white;
    font-family: 'Dancing Script', cursive;
    

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #979797;
  `,
  Logo: styled.div`
    background-image: url(${logo});
    width: 75px;
    height: 73px;
    background-repeat: no-repeat;
    background-position: center -7px;
    background-size: cover;

  `,
Title: styled.h1`
font-size: 2.75rem;
`,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 5rem;
    cursor: pointer;
    font-size: 2.5rem;

  `
};

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    position: fixed;
    width: 100vw;
    bottom: 0;

    justify-content: center;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 2rem;

    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.75rem;
  `,
  Icon: styled.span``
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default Nav;
