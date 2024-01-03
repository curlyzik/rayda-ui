import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material';
import React from 'react';
import HelpIcon from './HelpIcon';

interface TooltipProps extends MuiTooltipProps {
  title: React.ReactNode | string;
}

const Tooltip = ({ title, arrow, children = <HelpIcon /> }: TooltipProps) => {
  return (
    <MuiTooltip
      title={title}
      arrow={arrow ?? true}
      classes={{
        tooltip: 'bg-gray-900 p-3',
        arrow: 'text-gray-900',
      }}
    >
      <div>{children}</div>
    </MuiTooltip>
  );
};

export default Tooltip;
