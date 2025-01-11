import 'server-only'


import { createClient } from 'next-sanity'

import { apiVersion,token, dataset, projectId } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

if(!writeClient.config().token){
    throw new Error("Write token not found.");
}
 