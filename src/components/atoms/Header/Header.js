import styled from "styled-components";
import React from "react";

const StyledHeader = styled.h1`
  color: ${({theme}) => theme.greyDark};
  position: relative;
  
  &::after {
    content: '${({text}) => text}';
    color: transparent;
    position: absolute;
    display:block;
    height: 10px;
    background-color: ${({theme, secondary}) => secondary ? theme.greyDark : theme.accent};
  }
`;

const Header = ({children, secondary}) => (
    <StyledHeader text={children} secondary={secondary}>
        {
            children
        }
    </StyledHeader>
);

export default Header