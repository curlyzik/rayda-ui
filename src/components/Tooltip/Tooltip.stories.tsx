import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '.';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout:"centered"
  }
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: <div>Hello, I'm tooltip</div>,
    children: <div className=''>Hover over me</div>,
    // arrow:false,
  },
};
