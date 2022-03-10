import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';

export const YourPlanTitle = ({ className }: { className?: string }) => {
  const { t } = useTranslation('components');

  return (
    <Box className={className} display="flex" flexDirection="column">
      <Typography color="primary" variant="subtitle2">
        {t('shared.YourPlanTitle.title')}
      </Typography>
      <Typography variant="h5">
        {t('shared.YourPlanTitle.developer')}
      </Typography>
    </Box>
  );
};
