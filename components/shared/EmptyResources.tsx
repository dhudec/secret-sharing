import React, { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IconFrame } from '@/components/shared/IconFrame';

interface Props {
  icon: ReactElement;
  heading: ReactElement;
  caption: ReactElement;
  button?: ReactElement;
  id?: string;
}

export const EmptyResources: FC<Props> = ({
  icon,
  heading,
  caption,
  button,
  children,
  id,
}) => (
  <Grid alignItems="center" container direction="column" id={id}>
    <Grid item>
      <Box mt={17}>
        <IconFrame size="large">{icon}</IconFrame>
      </Box>
    </Grid>
    <Grid item>
      <Box mt={3}>
        <Typography variant="h6">{heading}</Typography>
      </Box>
    </Grid>
    <Grid item>
      <Typography variant="body1">{caption}</Typography>
    </Grid>
    <Box mb={17}>{button}</Box>
    {children}
  </Grid>
);

export type { Props };
