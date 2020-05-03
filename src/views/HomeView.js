import React from "react";
import Me from "../components/organisms/Me/Me";
import AboutMe from "../components/organisms/AboutMe/AboutMe";
import Skills from "../components/molecules/Skills/Skills";
import Projects from "../components/organisms/Projects/Projects";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  color: ${({theme}) => theme.greyDark};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.accent};
  h5 {
  margin: 10px 0;
  }
`;


const HomeView = () => (
    <StyledWrapper>
        <Me/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Footer>
                <h5>Mail: tomasz.ogiolda00@gmail.com</h5>
                <h5>GitHub: https://github.com/ogioldat</h5>
                <h5>LinkedIn: www.linkedin.com/in/ogioldat</h5>
                2020 Tomasz Ogiołda
        </Footer>
    </StyledWrapper>
);

export default HomeView;