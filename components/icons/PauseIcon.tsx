import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const Pause = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      d="M14 15V9"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M10 15V9"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      clipRule="evenodd"
      d="M12 3.75C7.44321 3.75 3.75 7.44321 3.75 12C3.75 16.5568 7.44321 20.25 12 20.25C16.5568 20.25 20.25 16.5568 20.25 12C20.25 7.44321 16.5568 3.75 12 3.75ZM2.25 12C2.25 6.61479 6.61479 2.25 12 2.25C17.3852 2.25 21.75 6.61479 21.75 12C21.75 17.3852 17.3852 21.75 12 21.75C6.61479 21.75 2.25 17.3852 2.25 12Z"
      fillRule="evenodd"
    />
  </SvgIcon>
);

export default Pause;
