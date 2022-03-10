import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import { useTenantMenu } from '@/components/layout/TenantMenu.hooks';
import { CreateTenantModal } from '@/components/tenant/CreateTenantModal';
import { useCustomTypographyStyles } from '@/components/theme/styles/CustomTypography.styles';
import { useStyles as useMenuStyles } from './styles/Menu.styles';
import { useStyles as useTenantMenuStyles } from './styles/TenantMenu.styles';

export const TenantMenu = () => {
  const menuClasses = useMenuStyles();
  const tenantMenuClasses = useTenantMenuStyles();
  const customTypography = useCustomTypographyStyles();
  const theme = useTheme();

  const {
    allTenants,
    anchorEl,
    setAnchorEl,
    currentTenant,
    handleTenantSwitch,
    handleClose,
    handleCreate,
    isCreateModalOpen,
    openCreateModal,
    isAwaiting,
    isOpen,
    t,
  } = useTenantMenu();

  if (isAwaiting) {
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  return (
    <>
      <Button
        className={menuClasses.root}
        endIcon={<ChevronDownIcon />}
        onClick={({ currentTarget }) =>
          setAnchorEl(currentTarget.parentElement)
        }
      >
        {currentTenant?.name}
      </Button>
      <Menu
        MenuListProps={{
          disablePadding: true,
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        onClose={handleClose}
        open={isOpen}
        transformOrigin={{
          vertical: 'top',
          horizontal: -Number(theme.spacing(2).replace(/\D/gu, '')),
        }}
      >
        <Box className={menuClasses.menuHeader}>
          <Typography variant="subtitle2">{currentTenant?.name}</Typography>
          <Typography className={customTypography.body3} color="textSecondary">
            {currentTenant?.id}
          </Typography>
          <Box mt={2}>
            <Link
              href="/settings"
              onClick={(event) => event.stopPropagation()}
              underline="hover"
            >
              <Typography variant="subtitle2">
                {t('layout.TenantMenu.viewSettings')}
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box mb={2}>
          <Divider />
        </Box>
        <Box ml={3}>
          <Typography color="textSecondary" variant="caption">
            {t('layout.TenantMenu.tenantsHeader')}
          </Typography>
        </Box>
        {allTenants.map((tenant) => (
          <MenuItem
            className={tenantMenuClasses.menuItem}
            key={tenant.id}
            onClick={() => handleTenantSwitch(tenant.id)}
            selected={tenant.id === currentTenant?.id}
          >
            <Box ml={1}>
              <Typography variant="body2">
                {tenant.id === currentTenant.id
                  ? currentTenant.name
                  : tenant.name}
              </Typography>
            </Box>
          </MenuItem>
        ))}
        <Box mt={2}>
          <Divider />
        </Box>
        <MenuItem onClick={openCreateModal}>
          <Box alignItems="center" display="flex" mb={1} ml={1} mr={1} mt={1}>
            <PlusIcon className={tenantMenuClasses.plusIcon} color="primary" />
          </Box>
          <Typography variant="body2">
            {t('layout.TenantMenu.createNewTenant')}
          </Typography>
        </MenuItem>
        <CreateTenantModal
          onClose={handleClose}
          onCreate={handleCreate}
          open={isCreateModalOpen}
        />
      </Menu>
    </>
  );
};
