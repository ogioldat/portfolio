import React from "react";
import Header from "../../atoms/Header/Header";
import Section from "../../../templates/SectionTemplate";
import Project from "../../molecules/Project/Project";
import {projectsData} from '../../../data/projectsData';

const Projects = () => (
    <Section fit>
        <Header>My projects</Header>
        {
            projectsData.map(project => <Project
                name={project.name}
                link={project.link}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
            />)
        }
    </Section>
);

export default Projects