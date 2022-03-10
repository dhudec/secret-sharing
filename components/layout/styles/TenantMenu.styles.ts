import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    plusIcon: {
      height: theme.spacing(2),
      width: theme.spacing(2),
    },
    menuItem: {
      '&.Mui-selected': {
        background: theme.palette.grey['900'],
        '&:hover': {
          background: alpha(theme.palette.grey['800'], 0.6),
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          width: theme.spacing(0.25),
          height: theme.spacing(1),
          left: theme.spacing(1.5),
          background: theme.palette.primary.main,
          borderRadius: Number(theme.shape.borderRadius) / 2,
        },
      },
    },
  })
);
