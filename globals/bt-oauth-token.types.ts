declare module 'next-auth/jwt' {
  interface JWT {
    btAccountId?: string;
    tenantId?: string;
  }
}

declare module '@basis-theory/basis-theory-portal-commons/src/mongodb/account' {
  interface Account {
    type: 'oauth' | 'bt' | string;
  }
}

export interface BtOauthToken {
  accessToken: string;
  expiresIn: number;
}
