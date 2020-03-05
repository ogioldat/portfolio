import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;


const StyledImage = styled.img`
  width: 700px;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

const StyledText = styled.div`
  align-self: flex-start;
  h5,h2 {margin: 0}
  h2 {
  margin-top: 50px;
  }
  
  
  
`;

const StyledLink = styled.a`
  color: ${({theme}) => theme.greyDark};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.accent};
  height: 30px;
  padding: 0 20px;
  border-radius: .3rem;
  
  @media only screen and (max-width: 600px) {
  width: 80vw;
  font-size: .8rem;
}
`

const Project = ({name, link, image, description, technologies}) => (
    <ProjectWrapper>
        <StyledText>
            <h2>{ name }</h2>
            <h5>Technologies: {technologies}</h5>
            <p> { description } </p>
        </StyledText>
        <StyledImage src={image} alt=""/>
        <StyledLink href={link}><h5>GitHub: {link}</h5></StyledLink>
    </ProjectWrapper>
);

export default Project;