import { useEffect, useState } from 'react';
import { PaginatedList } from '@basis-theory/basis-theory-elements-interfaces/sdk';
import { useApi } from '@basis-theory/basis-theory-portal-commons/src/api/client';
import { useTranslation } from 'next-i18next';
import { useOpenState } from '@/components/hooks';
import { useTenant } from '@/contexts/TenantProvider';
import type { Tenant } from '@/globals';

export const useTenantMenu = () => {
  // refs are supposed to be null
  // eslint-disable-next-line unicorn/no-null
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [tenant, setTenant] = useTenant();
  const [isCreateModalOpen, , openCreateModal, closeCreateModal] =
    useOpenState();
  const { t } = useTranslation('components');

  const handleClose = () => {
    // refs are supposed to be null
    // eslint-disable-next-line unicorn/no-null
    setAnchorEl(null);
    closeCreateModal();
  };

  const handleTenantSwitch = async (selectedTenantId: string) => {
    if (selectedTenantId === tenant.id) {
      handleClose();

      return;
    }

    await fetch('/api/auth/bt-token', {
      method: 'POST',
      body: JSON.stringify({
        tenantId: selectedTenantId,
      }),
    });
    handleClose();
    // move to home page to retrieve all new resources. using window location to force reload
    window.location.href = '/';
  };

  const handleCreate = async (createdTenant: Tenant): Promise<void> => {
    await handleTenantSwitch(createdTenant.id);
    handleClose();
  };

  const isOpen = Boolean(anchorEl) && !isCreateModalOpen;

  const { data: allTenants } = useApi<PaginatedList<Tenant>>(
    `oa/tenants`,
    undefined,
    {
      revalidateOnFocus: false,
    }
  );

  const { data: selfTenant } = useApi(`bt/tenants/self`);

  useEffect(() => {
    if (!tenant && selfTenant) {
      setTenant(selfTenant);
    }
  }, [selfTenant, tenant, setTenant]);

  return {
    allTenants: allTenants?.data || [],
    anchorEl,
    setAnchorEl,
    currentTenant: tenant,
    handleClose,
    handleTenantSwitch,
    handleCreate,
    isCreateModalOpen,
    openCreateModal,
    isAwaiting: !tenant,
    isOpen,
    t,
  };
};
