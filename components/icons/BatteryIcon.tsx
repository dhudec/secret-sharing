import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const Battery = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M11.3 15L12.8 12H9.2L10.7 9M19 9H20.01C20.16 9 20.31 9.03 20.45 9.1L20.93 9.34C21.26 9.5 21.48 9.856 21.48 10.23V13.74C21.48 14.11 21.26 14.46 20.92 14.63L20.43 14.87C20.29 14.94 20.13 14.97 19.98 14.97H18.96M17 18H5C3.895 18 3 17.1 3 16V8C3 6.89 3.895 6 5 6H17C18.1 6 19 6.89 19 8V16C19 17.1 18.1 18 17 18Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </SvgIcon>
);

export default Battery;
