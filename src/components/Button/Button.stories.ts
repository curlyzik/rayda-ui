import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    children: 'Login',
    variant: 'contained',
  },
};
export const Outlined: Story = {
  args: {
    children: 'Desperado',
    variant: 'outlined',
  },
};
export const Text: Story = {
  args: {
    children: 'Desperado',
    variant: 'text',
  },
};
