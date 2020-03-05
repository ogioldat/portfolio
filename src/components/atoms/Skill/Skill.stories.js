import React from "react";
import Skill from "./Skill";
import {storiesOf} from "@storybook/react";

import {IoLogoJavascript} from 'react-icons/io';

const text = `some text some text
 some text some text some text 
 some text some text some text 
 some text some text `;

storiesOf("atoms/Skill", module)
    .add("Skill", () => <Skill description={text} icon={IoLogoJavascript}/>);