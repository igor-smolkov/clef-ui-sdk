import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Disc } from '../src';
import type { Props } from '../src/components/Disc';

const meta: Meta = {
  title: 'Disc',
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
  borderColor: 'red', 
};
