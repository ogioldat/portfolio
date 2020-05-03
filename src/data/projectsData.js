import ecoData from '../assets/images/ecoData.png'
import artistify from '../assets/images/artistify.png'
import eo from '../assets/images/eo.png'
import foodOrderApp from '../assets/images/foodOrderApp.png'

export const projectsData = [
    {
        name: "ecoData",
        link: "https://github.com/ogioldat/ecodata",
        image: ecoData,
        description: `With my friends we create an ecological project - the ecoData. 
        Our goal is to create an application allowing users to be more ecological. 
        We are collecting smog data from open-source sensors and also build our own smog 
        sensors that sends data to us. This allows us to create more precise smog map. 
        EcoData also provides online campaign that awares people about ecology. This is our website project`,
        technologies: 'Vanilla JavaScript, WebPack, SCSS, Firebase'
    },
    {
        name:"Egzotyczne Ogrody",
        link: "https://github.com/ogioldat/egzotyczne-ogrody",
        image: eo,
        description: `Commercial project I’am working on currently, 
        it is website for gardening company`,
        technologies: "React, styled-components, react-context-api, react-router, Storybook"
    },
    {
        name: "FoodOrderApp",
        link: "https://github.com/ogioldat/FoodOrderApp",
        image: foodOrderApp,
        description: `Front-end of the training application working under local network. I had to provide 
        integration with backend. The website allows user to add burgers and other products to their order.`,
        technologies:'React, styled-comvponents, ReactHooks'
    },
    {
        name: "Artistify",
        link: "https://github.com/ogioldat/Artistify",
        image:artistify,
        description: "Type your favourite music artist and the website will inform you about your artist details and direct to specific song",
        technologies: "Genius API, Vanilla JavaScript"
    }
];