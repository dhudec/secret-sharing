import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    dangerAction: {
      background: theme.palette.error.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        background: theme.palette.error.dark,
      },
    },
    input: {
      width: theme.breakpoints.values.md,
    },
  })
);
