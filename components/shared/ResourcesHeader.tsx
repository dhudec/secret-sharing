import React, { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  title: ReactElement;
  subtitle: ReactElement;
  action?: ReactElement;
}

export const ResourcesHeader = ({ title, subtitle, action }: Props) => (
  <Box alignItems="center" display="flex" justifyContent="space-between">
    <div>
      <Typography variant="h5">{title}</Typography>
      <Typography color="textSecondary" variant="body1">
        {subtitle}
      </Typography>
    </div>
    {action}
  </Box>
);
