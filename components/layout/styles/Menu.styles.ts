import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: theme.palette.action.active,
      borderColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      '&:hover': {
        background: alpha(theme.palette.common.white, 0.04),
        borderColor: theme.palette.divider,
      },
    },
    menuHeader: {
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.grey['800'],
      padding: theme.spacing(1, 3),
    },
  })
);
