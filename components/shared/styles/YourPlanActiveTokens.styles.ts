import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      '&>*:first-child': {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
  })
);
