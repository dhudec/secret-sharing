import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      boxShadow: theme.shadows[1],
      outline: 0,
    },
  })
);
