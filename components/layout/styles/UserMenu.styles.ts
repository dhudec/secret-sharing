import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      borderColor: theme.palette.primary.main,
      borderStyle: 'solid',
      borderWidth: '1.5px',
      marginRight: theme.spacing(1),
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  })
);
