import React from "react";
import styled from "styled-components";
import Header from "../../atoms/Header/Header";
import Section from "../../../templates/SectionTemplate";

const StyledP = styled.p`
  font-size: ${({theme}) => theme.fontSize.m};
`;

const AboutMe = () => (
    <div id='me_section'>
        <Section fill fit id='me_section'>
            <Header>About me</Header>
            <StyledP>
                I have been creating websites for almost 2 years, web development became one of my interests.
                During my programming journey I've loved to develop myself. That's why I am always trying to find
                time to learn new skills and to broaden horizons.
            </StyledP>
        </Section>
    </div>
);

export default AboutMe;