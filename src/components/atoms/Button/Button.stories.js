import React from "react";
import Button from "./Button";
import {storiesOf} from "@storybook/react";

storiesOf("atoms/Button", module)
    .add("Button",  () => <Button>click for more</Button>);