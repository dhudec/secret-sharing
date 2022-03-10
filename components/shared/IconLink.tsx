import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
  target?: string;
}

export const IconLink: FC<Props> = ({ title, href, icon, target }) => (
  <Box alignItems="center" display="flex">
    <Link
      href={href}
      sx={{ cursor: 'pointer' }}
      target={target}
      underline="hover"
    >
      {title}
    </Link>
    <Box display="flex" ml={0.5}>
      {icon}
    </Box>
  </Box>
);
