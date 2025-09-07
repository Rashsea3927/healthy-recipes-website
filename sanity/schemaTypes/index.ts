import { type SchemaTypeDefinition } from 'sanity';
import recipetype from './recipetype';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipetype],
};
