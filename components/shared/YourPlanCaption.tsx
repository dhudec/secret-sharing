import React from 'react';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useCustomTypographyStyles } from '@/components/theme/styles/CustomTypography.styles';

interface Props {
  hasPaymentMethod?: boolean;
  limitExceeded: boolean;
  limitExceededBy?: number;
  typography?: boolean;
}

export const YourPlanCaption = ({
  hasPaymentMethod,
  limitExceeded,
  limitExceededBy,
  typography = true,
}: Props): JSX.Element => {
  const { t } = useTranslation('components');
  const customTypography = useCustomTypographyStyles();

  const text = hasPaymentMethod
    ? t('shared.YourPlanCaption.unlimited')
    : limitExceeded
    ? t('shared.YourPlanCaption.limitExceeded', { limitExceededBy })
    : t('shared.YourPlanCaption.limited');

  if (!typography) {
    return <span>{text}</span>;
  }

  return (
    <Typography className={customTypography.body3} color="textSecondary">
      {text}
    </Typography>
  );
};
