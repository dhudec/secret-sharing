import { useMemo } from 'react';
import { useApi } from '@basis-theory/basis-theory-portal-commons/src/api/client';
import type { ApplicationPermission, ApplicationType } from '@/globals';

type PermissionMap = Record<ApplicationType, ApplicationPermission[]>;

interface UsePermissions {
  availablePermissions?: ApplicationPermission[];
  permissionsMap?: PermissionMap;
}

const usePermissions = (): UsePermissions => {
  const { data: availablePermissions } = useApi<ApplicationPermission[]>(
    'bt/permissions',
    undefined,
    {
      revalidateOnFocus: false,
    }
  );

  const permissionsMap: PermissionMap = useMemo(
    () =>
      availablePermissions?.reduce((map, permission) => {
        const newMap = { ...map };

        permission.applicationTypes.forEach((type) => {
          newMap[type] = [...(map[type] || []), permission];
        });

        return newMap;
      }, {} as PermissionMap),
    [availablePermissions]
  );

  return {
    availablePermissions,
    permissionsMap,
  };
};

export { usePermissions };
