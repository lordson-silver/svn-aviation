import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'subtitle', type: 'string' },
            { name: 'tagline', type: 'string' },
            { name: 'image', type: 'image' },
            { name: 'ctaText', type: 'string' },
            { name: 'ctaLink', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'operationalTitle',
      title: 'Operational Capability Title',
      type: 'string',
    }),
    defineField({
      name: 'operationalDescription',
      title: 'Operational Capability Description',
      type: 'text',
    }),
    defineField({
        name: 'capabilities',
        title: 'Capabilities List',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    { name: 'title', type: 'string' },
                    { name: 'description', type: 'text' },
                    { name: 'stat', type: 'string' }
                ]
            }
        ]
    }),
    defineField({
      name: 'industryTitle',
      title: 'Industry Section Title',
      type: 'string',
    }),
    defineField({
      name: 'industryDescription',
      title: 'Industry Section Description',
      type: 'text',
    }),
    defineField({
      name: 'logoCloudTitle',
      title: 'Logo Cloud Title',
      type: 'string',
    })
  ],
});
