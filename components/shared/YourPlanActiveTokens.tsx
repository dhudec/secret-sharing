import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useStyles } from '@/components/shared/styles/YourPlanActiveTokens.styles';

interface Props {
  activeTokens: number;
  includedTokensLimit: number;
}

export const YourPlanActiveTokens = ({
  activeTokens,
  includedTokensLimit,
}: Props) => {
  const { t } = useTranslation('components');

  const classes = useStyles();

  const activeTokenOverage =
    activeTokens > includedTokensLimit ? activeTokens - includedTokensLimit : 0;
  const includedTokens = activeTokens - activeTokenOverage;

  return (
    <Box alignItems="center" className={classes.root} display="flex">
      <Box flexGrow={1} px={2} py={1}>
        <Typography variant="subtitle1">
          {includedTokens}
          {'/'}
          {includedTokensLimit}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {t('shared.YourPlanActiveTokens.includedTokens')}
        </Typography>
      </Box>
      <Box flexGrow={1} px={2} py={1}>
        <Typography variant="subtitle1">{activeTokenOverage}</Typography>
        <Typography color="textSecondary" variant="body2">
          {t('shared.YourPlanActiveTokens.activeTokenOverage')}
        </Typography>
      </Box>
    </Box>
  );
};
