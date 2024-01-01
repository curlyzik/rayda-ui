import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    children: 'Desperado',
    variant: 'contained',
  },
};
export const Outlined: Story = {
  args: {
    children: 'Desperado',
    variant: 'outlined',
    disableRipple: true,
  },
};
export const Text: Story = {
  args: {
    children: 'Desperado',
    variant: 'text',
  },
};