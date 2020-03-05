import React from "react";
import {storiesOf} from "@storybook/react";
import Project from "./Project";

const a = `With my friends we create an ecological project - the ecoData. 
        Our goal is to create an application allowing users to be more ecological. 
        We are collecting smog data from open-source sensors and also build our own smog 
        sensors that sends data to us. This allows us to create more precise smog map. 
        EcoData also provides online campaign that awares people about ecology. This is our website project`

storiesOf("molecules/Project", module)
    .add("Project", () => <Project name={'ecoData'} description={a} link={'link.com'}/>);