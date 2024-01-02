import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Popover from '.';
import { MenuItem, MenuList } from '@mui/material';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

const DefaultPopover: React.FC = () => {
  return (
    <Popover>
      <MenuList>
        <MenuItem id="edit" className="text-base text-gray-900 font-medium">
          Edit
        </MenuItem>

        <MenuItem id="approve" className="text-base text-gray-900 font-medium">
          Approve
        </MenuItem>

        <MenuItem id="delete" className="text-base text-gray-900 font-medium">
          Delete
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

export const Default: Story = {
  render: () => <DefaultPopover />,
};
