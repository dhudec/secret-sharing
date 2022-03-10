import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import {
  useStyles,
  ProgressBarStatus,
} from '@/components/shared/styles/YourPlanProgessBar.styles';

interface Props {
  monthlyActiveTokens: number;
  includedMonthlyActiveTokens: number;
}

const normaliseProgressBarValue = (value: number, limit: number) => {
  if (!limit) {
    return 1;
  }

  if (value > limit) {
    return 100;
  }

  return (value * 100) / limit;
};
const getProgressBarStatus = (normalisedProgressBarValue: number) => {
  if (normalisedProgressBarValue >= 90) {
    return ProgressBarStatus.NEARING_LIMIT;
  }

  if (normalisedProgressBarValue >= 70) {
    return ProgressBarStatus.CAUTION;
  }

  return ProgressBarStatus.NOMINAL;
};

export const YourPlanProgressBar = ({
  monthlyActiveTokens,
  includedMonthlyActiveTokens,
}: Props) => {
  const { t } = useTranslation('components');
  const progress = normaliseProgressBarValue(
    monthlyActiveTokens,
    includedMonthlyActiveTokens
  );
  const status = getProgressBarStatus(progress);
  const classes = useStyles({ status });
  const activeTokens = Math.min(
    monthlyActiveTokens,
    includedMonthlyActiveTokens
  );

  return (
    <Box display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <Box marginRight={3}>
          <Typography variant="subtitle1">
            {t('shared.YourPlanProgressBar.includedActiveTokens')}
          </Typography>
        </Box>
        <Typography variant="subtitle1">
          {activeTokens}
          {'/'}
          {includedMonthlyActiveTokens}
        </Typography>
      </Box>
      <Box my={1}>
        <LinearProgress
          classes={classes}
          value={progress}
          variant="determinate"
        />
      </Box>
    </Box>
  );
};
