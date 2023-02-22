import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  inputType: "text",
};

export const Email = Template.bind({});
Email.args = {
  inputLabel: "email",
};

export const Password = Template.bind({});
Password.args = {
  inputType: "password",
  inputLabel: "password",
};
