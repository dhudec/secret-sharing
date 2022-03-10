import type { TokenType } from './token.types';

type ReactorFormulaConfigurationType = 'string';
type ConfigurationItem = {
  name: string;
  type: ReactorFormulaConfigurationType;
  description?: string;
}[];

type ReactorFormulaStatus = 'coming_soon' | 'verified';

interface ReactorFormula {
  id: string;
  name: string;
  description: string;
  sourceTokenType: TokenType;
  icon: string;
  code: string;
  createdAt: string;
  modifiedAt: string;
  status: ReactorFormulaStatus;
  tags?: string[];
  configuration?: ConfigurationItem;
  requestParameters: RequestParameter[];
}

interface Reactor {
  id: string;
  name: string;
  formula: ReactorFormula;
  createdAt: string;
  modifiedAt: string;
  configuration: Record<string, string>;
}

type ReactorUpdate = Pick<Reactor, 'id' | 'name' | 'configuration'>;

interface ReactorCreate extends Omit<ReactorUpdate, 'id'> {
  formula: {
    id: string;
  };
}

interface RequestParameter {
  name: string;
  type: string;
  optional: boolean;
  description: string;
}

export type {
  ReactorFormula,
  Reactor,
  ReactorUpdate,
  ReactorCreate,
  RequestParameter,
};
