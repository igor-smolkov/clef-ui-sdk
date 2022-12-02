import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Props } from '../src/containers/Disc';
import { ClefDisc } from '../src';

const meta: Meta = {
  title: 'ClefDisc',
  component: ClefDisc,
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

const Template: Story<Props> = args => <ClefDisc {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  assetID: 'CSB5QjKAYeY5BCK4EyLC66fKn5QWX73HAXhn4pNb9HD',
};
