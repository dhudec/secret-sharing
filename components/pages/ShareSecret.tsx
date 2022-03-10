import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import {BasisTheoryLogoWithText, CopyButton} from '@/components/shared';
import {Paper, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import RefreshIcon from "@/components/icons/RefreshIcon";
import {FooterInfo} from "@/components/pages/FooterInfo";
import {PoweredByBasisTheory} from "@/components/shared/PoweredByBasisTheory";

interface Props {
  secretId: string;
}

export const ShareSecret = ({secretId}: Props) => {
  const { t } = useTranslation('secrets');
  const secretUrl = `${window.location.host}/${secretId}`;

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
            <PoweredByBasisTheory />
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
                  width: (theme) => theme.spacing(50)
                }}
                inputProps={{
                  readOnly: true,
                  disabled: true,
                }}
                value={secretUrl}
            />
            <CopyButton
                content={secretUrl}
                iconPosition="start"
                showCopyText
                size="small"
            />
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
          <Box display="flex" justifyContent="center">
            <Button
                component="a"
                href="/"
                startIcon={<RefreshIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: (theme) => theme.spacing(4),
                  width: 'fit-content'
                }}
            >
              {t('secureAnotherSecret')}
            </Button>
          </Box>
        </Box>
      </Container>
      <Box alignItems="center" display="flex" flexDirection="column" mb={8} mt={19.5}>
        <FooterInfo />
      </Box>
    </Box>
  );
};
