import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: theme.spacing(3),
      background: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
    },
  })
);
