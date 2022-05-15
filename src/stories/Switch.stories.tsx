import React from 'react';
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Switch from './Switch';

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean'
    },
    bgOn: {
      control: 'color'
    },
    bgOff: {
      control: 'color'
    },
    buttonColor: {
      control: 'color'
    },
    disabled: {
      control: 'boolean'
    },
    form: {
      control:'inline-radio',
      options: ['round', 'box']
    },
    size:{
      control:'inline-radio',
      options: ['small', 'medium', 'large']
    }
  }
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args}/>;

export const Default = Template.bind({});
Default.args = {
 checked: true,
 bgOn: "red",
 bgOff: "blue",
 buttonColor: "#dfe6e9",
 form: "round"
}

export const Uncontrolled = Template.bind({});
Uncontrolled.args = {
  bgOn: "#55efc4",
  bgOff: "#b2bec3",
  buttonColor: "#dfe6e9",
  form: "round"
}