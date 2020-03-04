import React from "react";
import styled from "styled-components";
import meImg from 'assets/images/meImg.jpg'
import Button from 'components/atoms/Button/Button'

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-content: center;
`;

const StyledTextWrapper = styled.div`
`;

const StyledImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: white url("${ meImg }") center no-repeat;
  background-size: cover;
  margin: 0 auto;
`;

const Me = () => (
    <StyledWrapper>
        <StyledTextWrapper>
            <h1>Tomasz Ogiołda</h1>
            <h4>Front-end developer</h4>
            <p>
                Hello! My name is Tomek and I am passionate about websites.
                I have been creating websites for almost 2 years, love to develop myself and learn new skills
            </p>
            <Button>Find out more!</Button>
        </StyledTextWrapper>

        <StyledImage/>
    </StyledWrapper>
);

export default Me;