import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, isSanityConfigured } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true if you want to use the CDN
});

export { isSanityConfigured };
