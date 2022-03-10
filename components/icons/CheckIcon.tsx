import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const Check = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M20.5303 5.96967C20.8232 6.26256 20.8232 6.73744 20.5303 7.03033L9.53033 18.0303C9.23744 18.3232 8.76256 18.3232 8.46967 18.0303L3.46967 13.0303C3.17678 12.7374 3.17678 12.2626 3.46967 11.9697C3.76256 11.6768 4.23744 11.6768 4.53033 11.9697L9 16.4393L19.4697 5.96967C19.7626 5.67678 20.2374 5.67678 20.5303 5.96967Z"
      fillRule="evenodd"
    />
  </SvgIcon>
);

export default Check;
