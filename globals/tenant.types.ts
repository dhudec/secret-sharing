interface Tenant {
  id: string;
  ownerId: string;
  name: string;
  createdAt: string;
  modifiedAt: string;
}

interface TenantUpdate {
  name: string;
}

interface TenantCreate {
  name: string;
}

export type { Tenant, TenantUpdate, TenantCreate };
