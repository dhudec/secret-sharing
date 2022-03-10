import jwtDecode from 'jwt-decode';

export const getTenantId = (authorizationHeader: string) => {
  const token = authorizationHeader?.split(' ')[1];
  if (!token) return undefined;
  const { tenant_id: tenantId } = jwtDecode(token) as any;
  return tenantId;
};
