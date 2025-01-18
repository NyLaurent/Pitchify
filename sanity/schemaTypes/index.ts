import { type SchemaTypeDefinition } from 'sanity'

import {startup} from './startup'


import {author} from './author'
import { playlist } from './playlist'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [startup,author,playlist],
}
