import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 3),
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
      transition: theme.transitions.create(['border-color', 'background'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shortest,
      }),
      '&:hover': {
        background: alpha(theme.palette.grey['800'], 0.2),
        borderColor: theme.palette.divider,
      },
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
  })
);
