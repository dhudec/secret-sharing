interface TenantInvitation {
  id: string;
  tenantId: string;
  email: string;
  status: string;
  expiresAt: string;
  createdBy: string;
  createdAt: string;
  modifiedBy?: string;
  modifiedAt?: string;
}

type TenantInvitationCreate = Pick<TenantInvitation, 'email'>;

export type { TenantInvitation, TenantInvitationCreate };
