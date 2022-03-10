import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() =>
  createStyles({
    backdropRoot: {
      position: 'absolute',
      zIndex: 1,
    },
  })
);
