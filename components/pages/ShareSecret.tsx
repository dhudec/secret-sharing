import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { BasisTheoryLogoWithText } from '@/components/shared';

export const ShareSecret = () => {
  const { t } = useTranslation('secrets');

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
    >
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Box mb={19.5}>
            <Typography color="textSecondary">{t('poweredBy')}</Typography>
            <Box display="flex" justifyContent="center">
              <BasisTheoryLogoWithText />
            </Box>
          </Box>
          <Typography
            mb={1}
            sx={{
              fontSize: '24px',
              fontWeight: 500,
            }}
          >
            {t('sendSecretSecurely')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
