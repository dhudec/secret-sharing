import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const Play = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M12 3.75C7.44321 3.75 3.75 7.44321 3.75 12C3.75 16.5568 7.44321 20.25 12 20.25C16.5568 20.25 20.25 16.5568 20.25 12C20.25 7.44321 16.5568 3.75 12 3.75ZM2.25 12C2.25 6.61479 6.61479 2.25 12 2.25C17.3852 2.25 21.75 6.61479 21.75 12C21.75 17.3852 17.3852 21.75 12 21.75C6.61479 21.75 2.25 17.3852 2.25 12ZM10.559 9.704V14.295L14.4411 11.9995L10.559 9.704ZM11.3228 8.41246C10.3219 7.82017 9.059 8.54328 9.059 9.704V14.295C9.059 15.4558 10.3221 16.179 11.3231 15.5864L15.2044 13.2908C16.1869 12.7105 16.1869 11.2885 15.2044 10.7082"
      fillRule="evenodd"
    />
  </SvgIcon>
);

export default Play;
