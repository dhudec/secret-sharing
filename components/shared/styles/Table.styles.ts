import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    borderedContainer: {
      borderRadius: theme.shape.borderRadius,
      border: `1px solid ${theme.palette.divider}`,
    },
    headerCell: {
      paddingTop: theme.spacing(0.75),
      paddingBottom: theme.spacing(0.75),
    },
  })
);
