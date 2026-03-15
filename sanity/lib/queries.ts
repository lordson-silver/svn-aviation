import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  author->{name, image},
  categories[]->{title}
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  author->{name, image},
  categories[]->{title},
  body
}`

export const latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  author->{name, image},
  categories[]->{title}
}`
