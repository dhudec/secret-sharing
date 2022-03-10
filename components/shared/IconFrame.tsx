import React, { FC, HTMLAttributes } from 'react';
import type { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import { useStyles } from './styles/IconFrame.styles';

export interface IconFrameProps
  extends Pick<HTMLAttributes<unknown>, 'className'> {
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
}

export const IconFrame: FC<IconFrameProps> = ({
  size = 'medium',
  className,
  sx,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, classes[size], className)} sx={sx}>
      {children}
    </Box>
  );
};
