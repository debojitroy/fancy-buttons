import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      type: 'text',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = { text: 'Primary' };
