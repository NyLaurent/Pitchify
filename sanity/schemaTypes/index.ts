import { type SchemaTypeDefinition } from 'sanity'

import {startup} from './startup'


import {author} from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [startup,author],
}
