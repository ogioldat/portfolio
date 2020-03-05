import {IoLogoJavascript} from 'react-icons/io';
import {FaReact, FaGitAlt, FaCss3, FaPython, FaNpm, FaDatabase ,FaBox} from 'react-icons/fa';

export const skillsData = [
    {
        name: "JavaScript",
        icon: IoLogoJavascript,
        description: "JavaScript is my main programming language. I am familiar with its newest trends (ES6+)"
    },
    {
        name: "React",
        icon: FaReact,
        description: `Multiple projects using react-router, 
        higher order components, storybook, styled-components, context-api`
    },
    {
        name: "CSS/SCSS/SASS",
        icon: FaCss3,
        description: `I am able to project efficient and responsive website styles, SCSS/SASS is not a problem`
    },
    {
        name: "WebPack",
        icon: FaBox,
        description: `With my projects I am able to configure WebPack basing on it's documentation`
    },
    {
        name: "GIT",
        icon: FaGitAlt,
        description: `Basic operations on VCS system, worked with GitHub and GitLab`
    },
    {
        name: "npm",
        icon: FaNpm,
        description: `A lot of experience with module managers like npm or yarn, using custom packages and 
        familiar with npm functions like npm scripts`
    },
    {
        name: "python",
        icon: FaPython,
        description: `Good knowledge about python programming, I have written projects like sudoku solver`
    },
    {
        name: "MySQL",
        icon: FaDatabase,
        description: `Familiar with relational databases, I am able to write basic MySQL database queries`
    }
];