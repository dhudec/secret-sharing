import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    tabs: {
      paddingBottom: theme.spacing(1),
      borderWidth: 0,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
    },
  })
);
