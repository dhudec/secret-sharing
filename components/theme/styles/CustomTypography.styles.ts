import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

/**
 * Temporary solution until we migrate to v5
 */
export const useCustomTypographyStyles = makeStyles(() =>
  createStyles({
    body3: {
      fontSize: '12px',
      lineHeight: 17 / 12,
    },
    body4: {
      fontSize: '10px',
      lineHeight: 17 / 12,
    },
    subtitle3: {
      fontSize: '12px',
      lineHeight: 13 / 10,
      fontWeight: 600,
    },
    subtitle4: {
      fontSize: '10px',
      lineHeight: 13 / 10,
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  })
);
