import type { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { DrawerWidth } from '../types';

export const useStyles = makeStyles<Theme, { drawerWidth: DrawerWidth }>(
  (theme) =>
    createStyles({
      root: {
        width: ({ drawerWidth }) => drawerWidth.open,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerPaper: {
        background: theme.palette.grey['900'],
      },
      open: {
        width: ({ drawerWidth }) => drawerWidth.open,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      closed: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: ({ drawerWidth }) => drawerWidth.closed,
      },
      logo: {
        height: theme.spacing(9),
        cursor: 'pointer',
      },
      divider: {
        marginBottom: theme.spacing(3),
      },
    })
);
