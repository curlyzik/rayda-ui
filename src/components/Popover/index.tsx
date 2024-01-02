import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Popover as MUIPopover } from '@mui/material';
import StyleWrapper from '../StyleWrapper';

interface PopoverProps {
  children?: React.ReactNode;
}

const Popover = ({ children }: PopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <StyleWrapper>
      <div>
        <BiDotsVerticalRounded
          className="text-xl cursor-pointer text-[#98A2B3]"
          onClick={handleClick}
        />
      </div>

      <MUIPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div className="p-1 w-full " role="none" onClick={handleClose}>
          {children}
        </div>
      </MUIPopover>
    </StyleWrapper>
  );
};

export default Popover;
