import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const CodeCircle = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M12 3.75C7.44272 3.75 3.75 7.4347 3.75 12C3.75 16.5573 7.4347 20.25 12 20.25C16.5568 20.25 20.25 16.5568 20.25 12C20.25 7.44321 16.5568 3.75 12 3.75ZM2.25 12C2.25 6.6053 6.61527 2.25 12 2.25C17.3852 2.25 21.75 6.61479 21.75 12C21.75 17.3852 17.3852 21.75 12 21.75C6.6053 21.75 2.25 17.3847 2.25 12ZM10.5303 8.46967C10.8232 8.76256 10.8232 9.23744 10.5303 9.53033L9.06066 11L10.5303 12.4697C10.8232 12.7626 10.8232 13.2374 10.5303 13.5303C10.2374 13.8232 9.76256 13.8232 9.46967 13.5303L7.46967 11.5303C7.17678 11.2374 7.17678 10.7626 7.46967 10.4697L9.46967 8.46967C9.76256 8.17678 10.2374 8.17678 10.5303 8.46967ZM13.4697 10.4697C13.7626 10.1768 14.2374 10.1768 14.5303 10.4697L16.5303 12.4697C16.8232 12.7626 16.8232 13.2374 16.5303 13.5303L14.5303 15.5303C14.2374 15.8232 13.7626 15.8232 13.4697 15.5303C13.1768 15.2374 13.1768 14.7626 13.4697 14.4697L14.9393 13L13.4697 11.5303C13.1768 11.2374 13.1768 10.7626 13.4697 10.4697Z"
      fillRule="evenodd"
    />
  </SvgIcon>
);

export default CodeCircle;
