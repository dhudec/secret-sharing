import React, { ReactElement } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

interface Props {
  icon?: ReactElement;
  headerSize: TypographyProps['variant'];
  header: ReactElement | string;
  caption: ReactElement | string;
}

export const ResourceDetailHeader = ({
  icon,
  headerSize,
  header,
  caption,
}: Props) => (
  <Grid alignItems="center" container spacing={4}>
    {icon && <Grid item>{icon}</Grid>}
    <Grid item xs>
      <Typography variant={headerSize}>{header}</Typography>
      <Typography color="textSecondary" variant="body1">
        {caption}
      </Typography>
    </Grid>
  </Grid>
);
