import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Disc, Props } from '../src/components/Disc';

const meta: Meta = {
  title: 'DiscComponent',
  component: Disc,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Disc {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  colors: [0,1,2,3,0,1,2,3], 
};
