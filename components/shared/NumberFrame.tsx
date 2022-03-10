import React, { FC } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export interface NumberFrameProps {
  number: number;
  active?: boolean;
}

export const NumberFrame: FC<NumberFrameProps> = ({
  number,
  active = false,
}) => (
  <Box
    px={2}
    py={1}
    sx={{
      backgroundColor: (theme) => theme.palette.grey['800'],
      borderRadius: '2px',
      border: active
        ? (theme) => `1px solid ${theme.palette.primary.main}`
        : 'none',
    }}
  >
    <Typography variant="body1">{number}</Typography>
  </Box>
);
