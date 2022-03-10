import type {
  Application,
  Log,
} from '@basis-theory/basis-theory-elements-interfaces/models';
import type { User } from 'next-auth';

interface LogWithActor extends Log {
  id: string;
  application?: Application;
  user?: User;
}

interface EntityType {
  displayName: string;
  value: string;
}

export type { LogWithActor, EntityType };
