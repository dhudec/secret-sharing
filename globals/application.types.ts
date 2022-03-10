const applicationTypes = [
  'server_to_server',
  'public',
  'elements',
  'management',
] as const;

type ApplicationType = typeof applicationTypes[number];

interface Application {
  id: string;
  ownerId: string;
  name: string;
  type: ApplicationType;
  createdAt: string;
  modifiedAt: string;
  permissions: string[];
  key?: string;
}

interface ApplicationPermission {
  type: string;
  description: string;
  applicationTypes?: ApplicationType[];
}

interface ApplicationPermissionQuery {
  applicationType?: ApplicationType;
}

interface ApplicationQuery {
  ids?: string[];
  ownerId?: string;
  page?: number;
  size?: number;
}

interface ApplicationUpdate {
  id: string;
  name?: string;
  permissions?: string[];
}

type ApplicationCreate = Pick<Application, 'name' | 'type' | 'permissions'>;

type ApplicationRegenerateApiKey = Pick<
  Application,
  'id' | 'key' | 'modifiedAt'
>;

export { applicationTypes };

export type {
  ApplicationType,
  Application,
  ApplicationPermission,
  ApplicationPermissionQuery,
  ApplicationQuery,
  ApplicationUpdate,
  ApplicationCreate,
  ApplicationRegenerateApiKey,
};
