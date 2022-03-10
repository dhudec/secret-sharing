import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    alert: {
      background: alpha(theme.palette.primary.main, 0.08),
      color: theme.palette.primary.main,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
    },
    errorButton: {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      minWidth: theme.spacing(17),
    },
    warningButton: {
      whiteSpace: 'nowrap',
      color: theme.palette.warning.main,
      borderColor: theme.palette.warning.main,
    },
  })
);
