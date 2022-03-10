import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: alpha(theme.palette.grey['700'], 0.6),
      paddingLeft: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.grey['200'],
      fontFamily: 'Source Code Pro',
    },
    copyButton: {
      padding: theme.spacing(1),
    },
    copyIcon: {
      height: theme.spacing(2),
      width: theme.spacing(2),
    },
  })
);
