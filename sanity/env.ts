export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-03-14'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

export const isSanityConfigured = !!projectId && projectId !== 'your_real_project_id_here'
