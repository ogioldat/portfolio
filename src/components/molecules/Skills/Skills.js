import React from "react";
import styled from "styled-components";
import Header from "../../atoms/Header/Header";
import Section from "../../../templates/SectionTemplate";
import {skillsData} from "../../../data/skillsData";
import Skill from "../../../components/atoms/Skill/Skill";

const StyledSkills = styled.div`
  display: grid;
  align-items: baseline;
  margin-top: 50px;
  
  
  grid-template-columns: repeat(2, 1fr);
  
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
  
`;

const Skills = () => (
    <Section fit>
        <Header>My Skills</Header>
        <StyledSkills>
            {
                skillsData.map(skill => <Skill
                    name={skill.name}
                    description={skill.description}
                    icon={skill.icon}
                />)
            }
        </StyledSkills>
    </Section>
);

export default Skills;