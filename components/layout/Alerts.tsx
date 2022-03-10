import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import BellIcon from '@/components/icons/BellIcon';
import { useStyles } from './styles/Alerts.styles';

export const Alerts: FC = () => {
  const { t } = useTranslation('components');
  const classes = useStyles();

  return (
    <Box alignItems="center" display="flex">
      <BellIcon color="primary" />
      <Box mx={1}>
        <Typography variant="subtitle1">{t('layout.Alerts.label')}</Typography>
      </Box>
      <Box
        alignItems="center"
        className={classes.badge}
        display="flex"
        justifyContent="center"
      >
        <span>{'3'}</span>
      </Box>
    </Box>
  );
};
