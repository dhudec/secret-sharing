import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

enum ProgressBarStatus {
  NOMINAL = 'nominal',
  CAUTION = 'caution',
  NEARING_LIMIT = 'nearing_limit',
}

const progressBarColors = {
  [ProgressBarStatus.NOMINAL]: 'accent100',
  [ProgressBarStatus.CAUTION]: 'accent600',
  [ProgressBarStatus.NEARING_LIMIT]: 'accent500',
};

interface BarStylesProps {
  status: ProgressBarStatus;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: theme.spacing(1.4),
      borderRadius: theme.spacing(0.8),
      backgroundColor: theme.palette.grey['1000'],
      borderWidth: theme.spacing(0.25),
      borderStyle: 'solid',
      borderColor: theme.palette.grey['1000'],
    },
    bar: ({ status }: BarStylesProps) => ({
      backgroundColor: theme.palette[progressBarColors[status]].main,
      borderRadius: theme.spacing(0.8),
    }),
  })
);

export { ProgressBarStatus, useStyles };
