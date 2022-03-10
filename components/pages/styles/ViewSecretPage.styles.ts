import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: theme.spacing(1),
            height: theme.spacing(1),
        },
    })
);
