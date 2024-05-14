import { SchemaBodyContainer } from './schema-body/schema-body.container';
import { SchemaGeneralContainer } from './schema-general/schema-general.container';
import { SchemaHeaderContainer } from './schema-header/schema-header.container';

export const containers: any[] = [
  SchemaBodyContainer,
  SchemaGeneralContainer,
  SchemaHeaderContainer,
];

export * from './schema-body/schema-body.container';
export * from './schema-general/schema-general.container';
export * from './schema-header/schema-header.container';
