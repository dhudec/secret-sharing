import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useCreateSecret } from '@/components/pages/CreateSecret.hooks';
import { BasisTheoryLogoWithText } from '@/components/shared';
import { PoweredByBasisTheory } from '@/components/shared/PoweredByBasisTheory';

interface Props {
  ttl: string;
  setTtl: (newTtl: string) => void;
  setData: (newData: string) => void;
  createSecret: () => void;
}

export const CreateSecret = ({ ttl, setTtl, setData, createSecret }: Props) => {
  const { t } = useCreateSecret();

  return (
    <Box>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
        >
          <Box mt={10} mb={19.5}>
            <PoweredByBasisTheory />
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
          <Typography color="textSecondary" mb={5}>
            {t('oneTimeLink')}
          </Typography>
          <TextField
            multiline
            onChange={(event) => setData(event.target.value)}
            placeholder="Passwords, credentials, API Keys or anything..."
            rows={4}
          />
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            my={2.5}
          >
            <Typography color="textSecondary">
              {t('secretExpiresAfter')}
            </Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              onChange={(event, newTtl) => setTtl(newTtl)}
              value={ttl}
            >
              <ToggleButton
                sx={{
                  padding: (theme) => `${theme.spacing(1)} ${theme.spacing(3)}`,
                }}
                value="600"
              >
                {'10m'}
              </ToggleButton>
              <ToggleButton
                sx={{
                  padding: (theme) => `${theme.spacing(1)} ${theme.spacing(3)}`,
                }}
                value="3600"
              >
                {'1h'}
              </ToggleButton>
              <ToggleButton
                sx={{
                  padding: (theme) => `${theme.spacing(1)} ${theme.spacing(3)}`,
                }}
                value="86400"
              >
                {'24h'}
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Button color="primary" onClick={createSecret} variant="contained">
            {t('createLink')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
