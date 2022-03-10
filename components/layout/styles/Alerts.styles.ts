import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    badge: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      color: theme.palette.secondary.main,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.error.main, 0.19),
    },
  })
);
