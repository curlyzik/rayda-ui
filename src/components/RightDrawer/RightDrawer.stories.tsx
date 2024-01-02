import type { Meta, StoryObj } from '@storybook/react';
import RightDrawer from '.';

const meta: Meta<typeof RightDrawer> = {
  component: RightDrawer,
};

export default meta;
type Story = StoryObj<typeof RightDrawer>;

export const Basic: Story = {
  args: {
    title: 'Test drawer',
    description: 'Test description',
    isDrawerOpen: true,
  },
};

export const WithDrawerTooltip: Story = {
  args: {
    title: 'Test drawer',
    description: 'Test description',
    isDrawerOpen: true,
    showDrawerTooltip: true,
    removeBackDrop: true,
    width:500,
    drawerTooltipDetails: {
      tooltipTitle: 'Fill form',
      tooltipDescription:
        'You are required to fill in at least two items in the form to get the best experience possible',
      totalItems: 2,
      itemDescription:
        'Fill in your first item to get the best experience from Rayda',
      itemCount: 1,
      progressPercentage: 50,
    },
  },
};
