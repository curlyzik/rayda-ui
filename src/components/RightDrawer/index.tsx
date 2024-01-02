import { Drawer, Tooltip } from '@mui/material';
import React from 'react';
import { Circle } from 'rc-progress';

import { AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';

export interface RightDrawerProps {
  isDrawerOpen: boolean;
  onClose: () => void;
  width?: number;
  removeBackDrop?: boolean;
  removeZIndex?: boolean;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  showDrawerTooltip?: boolean;
  drawerTooltipDetails?: {
    tooltipTitle: string;
    tooltipDescription?: string;
    progressPercentage?: number;
    totalItems: number;
    itemCount: number;
    itemDescription: string;
  };
  children: React.ReactNode;
}

const RightDrawer = ({
  children,
  isDrawerOpen,
  onClose,
  width = 280,
  description,
  title,
  showDrawerTooltip,
  drawerTooltipDetails,
  removeBackDrop = false,
  removeZIndex = false,
}: RightDrawerProps) => {
  return (
    <Drawer
      open={isDrawerOpen}
      className={classNames({
        '[&>.MuiBackdrop-root.MuiModal-backdrop]:opacity-0': removeBackDrop,
        '[&.MuiDrawer-root.MuiDrawer-modal]:z-[1500]': removeZIndex,
      })}
      anchor="right"
      onClose={onClose}
      sx={{
        position: 'relative',
        zIndex: {
          sm: '3000',
          lg: '1000',
        },
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: width },
          // width: { xs: "100%", sm: "750px", lg: width },
        },
      }}
    >
      {showDrawerTooltip && (
        <Tooltip
          title={
            <div>
              <div className="pb-2">
                <div className="text-xs text-gray-700 font-semibold pb-1">
                  {drawerTooltipDetails?.tooltipTitle}
                </div>
                <div className="text-gray-500 text-xs font-medium">
                  {drawerTooltipDetails?.tooltipDescription}
                </div>
              </div>
              <div className="flex justify-around py-3 gap-x-4 items-center">
                <div className="w-16 relative">
                  <Circle
                    percent={drawerTooltipDetails?.progressPercentage}
                    strokeWidth={7}
                    strokeColor="#004CCC"
                    trailWidth={7}
                    trailColor="#EAECF0"
                    className="w-16"
                  />

                  <div className="absolute top-0 text-sm text-gray-700 font-medium grid place-content-center h-full w-full">
                    {drawerTooltipDetails?.progressPercentage}%
                  </div>
                </div>

                <div className="flex flex-col gap-y-1">
                  <span className="text-gray-900 text-sm font-semibold">
                    Added {drawerTooltipDetails?.itemCount} out of{' '}
                    {drawerTooltipDetails?.totalItems} items
                  </span>
                  <span className="text-gray-600 text-xs">
                    {drawerTooltipDetails?.itemDescription}
                  </span>
                </div>
              </div>
            </div>
          }
          placement="left"
          open={true}
          arrow
          classes={{
            popper: 'hidden lg:block',
            tooltip: 'w-[296px] bg-white p-3',
            arrow: 'text-white',
          }}
        >
          <div className="fixed h-screen place-content-center grid" />
        </Tooltip>
      )}

      <div className="flex flex-col py-6 px-6 relative">
        <div
          className="fixed p-2 right-3 top-2 cursor-pointer"
          onClick={onClose}
        >
          <AiOutlineClose className="text-2xl" />
        </div>
        <span className="text-xl text-gray-900 font-semibold">{title}</span>
        <span className="text-sm text-gray-600 font-normal">{description}</span>
      </div>

      <div>{children}</div>
    </Drawer>
  );
};

export default RightDrawer;
