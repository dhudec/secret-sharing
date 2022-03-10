import { alpha } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'inline-flex',
      padding: theme.spacing(0.5, 1),
      '&>*': {
        lineHeight: theme.spacing(2),
      },
    },
    default: {
      background: alpha(theme.palette.grey['700'], 0.6),
      color: theme.palette.grey['200'],
    },
    token: {
      background: alpha(theme.palette.primary.dark, 0.15),
      color: theme.palette.primary.main,
    },
    card: {
      background: alpha(theme.palette.accent300.main, 0.1),
      color: theme.palette.accent300.main,
    },
    bank: {
      background: alpha(theme.palette.accent400.main, 0.1),
      color: theme.palette.accent400.main,
    },
    card_number: {
      background: alpha(theme.palette.accent300.main, 0.1),
      color: theme.palette.accent300.main,
    },
    us_bank_routing_number: {
      background: alpha(theme.palette.accent400.main, 0.1),
      color: theme.palette.accent400.main,
    },
    us_bank_account_number: {
      background: alpha(theme.palette.accent400.main, 0.1),
      color: theme.palette.accent400.main,
    },
    social_security_number: {
      background: alpha(theme.palette.primary.dark, 0.15),
      color: theme.palette.primary.main,
    },
    employer_id_number: {
      background: alpha(theme.palette.primary.dark, 0.15),
      color: theme.palette.primary.main,
    },
    yellow_badge_color: {
      background: alpha(theme.palette.accent600.main, 0.1),
      color: theme.palette.accent600.main,
    },
    green_badge_color: {
      background: alpha(theme.palette.success.dark, 0.1),
      color: theme.palette.success.main,
    },
    red_badge_color: {
      background: alpha(theme.palette.error.light, 0.1),
      color: theme.palette.error.main,
    },
    blue_badge_color: {
      background: alpha(theme.palette.primary.dark, 0.15),
      color: theme.palette.primary.main,
    },
  })
);
