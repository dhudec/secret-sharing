import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import SignoutIcon from '@/components/icons/SignoutIcon';
import { ConfirmModal } from '@/components/shared/ConfirmModal';

interface Props {
  onClick?: () => unknown;
}

export const LogoutButton = ({ onClick }: Props) => {
  const { t } = useTranslation('components');
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const signOut = () => router.push('/api/auth/federated-logout');

  const handleClick = () => {
    onClick?.();
    setOpen(true);
  };

  return (
    <>
      <MenuItem onClick={handleClick}>
        <Box alignItems="center" display="flex" mr={1}>
          <SignoutIcon color="primary" />
        </Box>
        <div>{t('shared.LogoutButton.signOut')}</div>
      </MenuItem>
      <ConfirmModal
        cancelLabel={t('shared.LogoutButton.cancelLabel')}
        confirmLabel={t('shared.LogoutButton.confirmLabel')}
        onCancel={() => setOpen(false)}
        onConfirm={signOut}
        open={open}
        title={t('shared.LogoutButton.signOut')}
      >
        <Typography variant="subtitle1">
          {t('shared.LogoutButton.confirmHeading')}
        </Typography>
        <Typography variant="caption">
          {t('shared.LogoutButton.confirmCaption')}
        </Typography>
      </ConfirmModal>
    </>
  );
};
