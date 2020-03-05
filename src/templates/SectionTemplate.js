import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
   width: 100%;
   height: ${({fit}) => fit ? 'auto' : '100vh'};
   padding: ${({fit}) => fit ? '80px 0' : '10px 0'};
   display: flex;
   justify-content: center;
   background-color: ${ ({theme, fill}) => fill && theme.accent };
   
`;

const StyledContent = styled.div`
  width: 40%;
  
  @media only screen and (max-width: 600px) {
  width: 80%;
  height: auto;
}
`;

const Section = ({children, fill, fit}) => (
    <StyledWrapper fill={ fill } fit={fit}>
        <StyledContent>
            {
                children
            }
        </StyledContent>
    </StyledWrapper>
);

export default Section