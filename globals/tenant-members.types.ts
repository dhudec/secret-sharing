interface User {
  id: string;
  email: string;
  picture: string;
  firstName: string;
  lastName: string;
}

interface TenantMember {
  id: string;
  tenantId: string;
  role: string;
  user: User;
  createdBy: string;
  createdAt: string;
  modifiedBy?: string;
  modifiedAt?: string;
}

export type { TenantMember };
