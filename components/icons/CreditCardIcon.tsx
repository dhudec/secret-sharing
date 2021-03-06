import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export const CreditCard = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M6 5.75C4.75721 5.75 3.75 6.75721 3.75 8V8.25H20.25V8C20.25 6.75721 19.2428 5.75 18 5.75H6ZM21.75 8C21.75 5.92879 20.0712 4.25 18 4.25H6C3.92879 4.25 2.25 5.92879 2.25 8V16C2.25 18.0712 3.92879 19.75 6 19.75H18C20.0712 19.75 21.75 18.0712 21.75 16V8ZM20.25 9.75H3.75V16C3.75 17.2428 4.75721 18.25 6 18.25H18C19.2428 18.25 20.25 17.2428 20.25 16V9.75ZM6.25 13C6.25 12.5858 6.58579 12.25 7 12.25H9.57C9.98421 12.25 10.32 12.5858 10.32 13C10.32 13.4142 9.98421 13.75 9.57 13.75H7C6.58579 13.75 6.25 13.4142 6.25 13Z"
      fillRule="evenodd"
    />
  </SvgIcon>
);

export default CreditCard;
