import React, { FC } from 'react';
import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

export const DrawerItem: FC<BoxProps> = ({ children, ...rest }) => (
  <Box pb={2} px={2} {...rest}>
    {children}
  </Box>
);
