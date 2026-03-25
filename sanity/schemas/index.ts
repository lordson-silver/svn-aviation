import { type SchemaTypeDefinition } from 'sanity';
import post from './post';
import author from './author';
import category from './category';
import siteSettings from './siteSettings';
import homePage from './homePage';

export const schemaTypes: SchemaTypeDefinition[] = [post, author, category, siteSettings, homePage];
