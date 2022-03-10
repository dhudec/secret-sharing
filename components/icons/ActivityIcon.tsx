import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const Activity = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M5 3.75C4.30921 3.75 3.75 4.30921 3.75 5V19C3.75 19.6908 4.30921 20.25 5 20.25H19C19.6908 20.25 20.25 19.6908 20.25 19V5C20.25 4.30921 19.6908 3.75 19 3.75H5ZM2.25 5C2.25 3.48079 3.48079 2.25 5 2.25H19C20.5192 2.25 21.75 3.48079 21.75 5V19C21.75 20.5192 20.5192 21.75 19 21.75H5C3.48079 21.75 2.25 20.5192 2.25 19V5ZM10 7.25C10.2841 7.25 10.5438 7.4105 10.6708 7.66459L14.0253 14.3735L15.4979 11.6439C15.6288 11.4013 15.8823 11.25 16.158 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H16.6056L14.6601 16.3561C14.5272 16.6024 14.2682 16.7543 13.9883 16.7499C13.7085 16.7456 13.4543 16.5857 13.3292 16.3354L10 9.67705L8.67082 12.3354C8.54378 12.5895 8.28408 12.75 8 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H7.53647L9.32918 7.66459C9.45622 7.4105 9.71592 7.25 10 7.25Z"
      fillRule="evenodd"
    />
  </SvgIcon>
);

export default Activity;
