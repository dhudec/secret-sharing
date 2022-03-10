import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    item: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent', // to avoid component flick when hover
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create(
        ['border-color', 'background', 'color'],
        {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.shortest,
        }
      ),
      color: theme.palette.text.secondary,
      '&.Mui-selected': {
        borderColor: theme.palette.divider,
        background: theme.palette.grey['800'],
        color: theme.palette.text.primary,
        '&:hover': {
          borderColor: theme.palette.divider,
          background: theme.palette.grey['800'],
          color: theme.palette.text.primary,
        },
      },
      '&:hover': {
        background: alpha(theme.palette.grey['1000'], 0.6),
        color: theme.palette.text.primary,
      },
    },
    itemText: {
      // this is a special case where we don'' have a specific typography for the element
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
      margin: 0,
    },
    icon: {
      minWidth: theme.spacing(4),
      marginRight: theme.spacing(2),
    },
  })
);
