import React from "react";
import { Button } from "/Users/javayporter/javayscript-app-design-system/src/stories/components/Button/Button.js";

export default {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    label: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button Override",
};
