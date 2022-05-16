import React from 'react';
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Button from './Button';


export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    size:{
      control:'inline-radio',
      options: ['small', 'medium', 'large']
    },
    form: {
      control:'inline-radio',
      options: ['round', 'box']
    },
    disabled: {
      control: 'boolean'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  backgroundColor: "#e32636",
  onClick: ()=>{console.log("pressed!")}
}