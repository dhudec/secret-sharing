import React from 'react';
import { UserMenu as PortalCommonsUserMenu } from '@basis-theory/basis-theory-portal-commons/src/components/UserMenu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import { useUserMenu } from './UserMenu.hooks';

interface Props {
  setAnchorElToSelf?: boolean;
}

export const UserMenu = ({ setAnchorElToSelf = false }: Props) => {
  const { session, loading, t } = useUserMenu();

  if (loading || !session?.user) {
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  return (
    <PortalCommonsUserMenu setAnchorElToSelf={setAnchorElToSelf}>
      <MenuItem component="a" href="https://support.basistheory.com/hc">
        {t('layout.UserMenu.helpAndSupport')}
      </MenuItem>
      <Box mt={2}>
        <Divider />
      </Box>
    </PortalCommonsUserMenu>
  );
};
