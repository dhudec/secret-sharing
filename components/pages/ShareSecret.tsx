import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { BasisTheoryLogoWithText } from '@/components/shared';
import {Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import RefreshIcon from "@/components/icons/RefreshIcon";

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
            {t('shareLink')}
          </Typography>
          <Typography color="textSecondary" mb={5}>
            {t('oneTimeLink')}
          </Typography>
          <Box display="flex" flexDirection="row" mb={3} justifyContent="space-around">
            <TextField
                sx={{
                  // marginRight: (theme) => theme.spacing(2),
                  width: (theme) => theme.spacing(50)
                }}
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
            />
            <Button sx={{
              width: (theme) => theme.spacing(12),
              fontSize: '16px',
              fontWeight: 600
            }} color="primary" onClick={() => ({})} variant="contained">
              {t('copy')}
            </Button>
          </Box>
          <Paper color="#070A1B" sx={{
            height: (theme) => theme.spacing(10),
            width: "100%",
            padding: (theme) => `${theme.spacing(2)} ${theme.spacing(3)}`
          }}>
            <Typography color="textSecondary" textAlign="left">
              {t('thisLinkWillBeDestroyed')}
            </Typography>
          </Paper>
          <Button
              startIcon={<RefreshIcon />}
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                marginTop: (theme) => theme.spacing(4)
              }}
              size="medium"
          >
            {t('secureAnotherSecret')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
