import React from "react";
import styled from "styled-components";

import meImg from 'assets/images/meImg.jpg'
import Button from 'components/atoms/Button/Button'

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 100vh;
  width: 40%;
  align-items: center;
  
  @media only screen and (max-width: 600px) {
  grid-template-columns: none;
  grid-template-rows: 3fr 2fr;
  justify-content: center;
  align-items: center;
  width: 80vw;
}
`;

const StyledTextWrapper = styled.div`
  p {
    font-size: ${({theme}) => theme.fontSize.m};
  }
  
  h5 {
  margin: 10px 0;
  }
`;

const StyledImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: white url("${ meImg }") center no-repeat;
  background-size: cover;
  margin: 0 0 0 auto;
  
  @media only screen and (max-width: 600px) {
  margin: 0 0 50px 0;
  justify-self: center;
}
`;

const StyledButton = styled(Button)`
  text-decoration: none;
  font-size: ${({theme}) => theme.fontSize.xs};
`;

const Me = () => (
    <StyledWrapper>
        <StyledTextWrapper>
            <h1>Tomasz Ogiołda</h1>
            <h4>Front-end developer</h4>
            <p>
                Hello! My name is Tomek and I am passionate about websites.

            </p>
            <h5>Mail: tomasz.ogiolda00@gmail.com</h5>
            <h5>GitHub: https://github.com/ogioldat</h5>
            <h5>LinkedIn: www.linkedin.com/in/ogioldat</h5>
            <StyledButton as={'a'} href='#me_section'>Find out more!</StyledButton>
        </StyledTextWrapper>

        <StyledImage/>
    </StyledWrapper>
);

export default Me;