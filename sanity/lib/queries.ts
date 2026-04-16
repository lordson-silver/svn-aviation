import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  author->{name, image},
  categories[]->{title},
  body
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

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  title,
  description,
  keywords,
  "ogImage": ogImage.asset->url,
  address,
  email,
  phone,
  socialLinks
}`

export const homePageQuery = groq`*[_type == "homePage"][0] {
  heroSlides[] {
    title,
    subtitle,
    tagline,
    "imageUrl": image.asset->url,
    ctaText,
    ctaLink
  },
  operationalTitle,
  operationalDescription,
  capabilities[] {
    title,
    description,
    stat
  },
  industryTitle,
  industryDescription,
  logoCloudTitle
}`
