import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Props } from '../src/containers/Disc';
import { ClefDisc } from '../src';

const meta: Meta = {
  title: 'ClefDisc',
  component: ClefDisc,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <ClefDisc {...args} />;

export const Default = Template.bind({});

Default.args = {
  assetID: 'CSB5QjKAYeY5BCK4EyLC66fKn5QWX73HAXhn4pNb9HD',
  borderColor: '#efefef',
  colors: [0, 1, 2, 3, 0, 1, 2, 3],
  onImageReady: (image: string) => console.log(image),
};

export const DefaultNoHandler = Template.bind({});

DefaultNoHandler.args = {
  assetID: 'CSB5QjKAYeY5BCK4EyLC66fKn5QWX73HAXhn4pNb9HD',
  colors: [0, 1, 2, 3, 0, 1, 2, 3],
  onImageReady: undefined,
};
