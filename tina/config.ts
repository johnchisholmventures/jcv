import { defineConfig } from 'tinacms'

// Hosting providers expose branch as an env var (Vercel, Netlify, etc.)
// Prefer VERCEL_GIT_COMMIT_REF (always set by Vercel at build time).
// NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF is NOT a default Vercel system var —
// without this, previews fall back to 'master' and TinaCloud build fails.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master'

const topics = [
  { label: 'Entrepreneurship', value: 'entrepreneurship' },
  { label: 'Regulation', value: 'regulation' },
  { label: 'Governance', value: 'governance' },
  { label: 'Economics', value: 'economics' },
  { label: 'Innovation', value: 'innovation' },
  { label: 'Education', value: 'education' },
  { label: 'Interview', value: 'interview' },
  { label: 'AI', value: 'ai' },
  { label: 'Personal development', value: 'personal-development' },
]

export default defineConfig({
  branch,

  // From https://app.tina.io (Free plan: 2 users)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'post',
        label: 'Resources / Posts',
        path: 'content/posts',
        format: 'md',
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              const title = values?.title || 'new-post'
              return String(title)
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
                .slice(0, 80)
            },
          },
        },
        defaultItem: () => ({
          title: 'New resource',
          date: new Date().toISOString(),
          format: 'article',
          topics: ['entrepreneurship'],
          featured: false,
          draft: false,
          author: {
            name: 'John Chisholm',
            picture: '/assets/blog/authors/chisholm.jpg',
          },
        }),
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Short summary',
            ui: {
              component: 'textarea',
              description: 'One or two sentences shown on the homepage list.',
            },
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish date',
            required: true,
          },
          {
            type: 'image',
            name: 'coverImage',
            label: 'Cover image',
            description: 'Optional. Used for cards and social sharing.',
          },
          {
            type: 'string',
            name: 'format',
            label: 'Content type',
            required: true,
            options: [
              { label: 'Article (page on this site)', value: 'article' },
              { label: 'Video (YouTube)', value: 'video' },
              {
                label: 'External link (Forbes, interview, Amazon, etc.)',
                value: 'external',
              },
            ],
            ui: {
              description:
                'Pick the type first. Then fill YouTube ID or external URL if needed.',
            },
          },
          {
            type: 'string',
            name: 'youtubeId',
            label: 'YouTube video ID',
            description:
              'Only for Video. From youtube.com/watch?v=THIS_PART or youtu.be/THIS_PART',
          },
          {
            type: 'string',
            name: 'externalUrl',
            label: 'External URL',
            description: 'Only for External link. Full URL including https://',
          },
          {
            type: 'string',
            name: 'topics',
            label: 'Topics',
            list: true,
            options: topics,
            ui: {
              description: 'Used for filters on the homepage.',
            },
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured on homepage carousel',
          },
          {
            type: 'number',
            name: 'featuredOrder',
            label: 'Featured order',
            description:
              'Lower numbers appear first among featured items. Leave blank if not featured.',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft (hidden from public site)',
          },
          {
            type: 'object',
            name: 'author',
            label: 'Author',
            fields: [
              { type: 'string', name: 'name', label: 'Name' },
              { type: 'image', name: 'picture', label: 'Photo' },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            description:
              'Main article text. For videos, a short description is fine.',
          },
        ],
      },
      {
        name: 'team',
        label: 'Team members',
        path: 'content/team',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            isTitle: true,
            required: true,
          },
          { type: 'image', name: 'picture', label: 'Photo' },
          { type: 'string', name: 'twitter', label: 'Twitter / X URL' },
          { type: 'string', name: 'linkedIn', label: 'LinkedIn URL' },
          {
            type: 'number',
            name: 'order',
            label: 'Display order',
            description: 'Lower numbers first. John should be 1.',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Bio',
            isBody: true,
          },
        ],
      },
      {
        name: 'investment',
        label: 'Investments',
        path: 'content/investments',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Company name',
            isTitle: true,
            required: true,
          },
          { type: 'image', name: 'picture', label: 'Logo' },
          { type: 'string', name: 'site', label: 'Website URL' },
          {
            type: 'string',
            name: 'description',
            label: 'Short description',
            ui: { component: 'textarea' },
          },
          { type: 'number', name: 'order', label: 'Display order' },
        ],
      },
      {
        name: 'peoplePlace',
        label: 'People & Places',
        path: 'content/people-places',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image',
            required: true,
          },
          {
            type: 'string',
            name: 'alt',
            label: 'Alt text',
            description:
              'Describe the image for screen readers. Leave empty only if decorative.',
          },
          {
            type: 'string',
            name: 'location',
            label: 'Location / context',
          },
          {
            type: 'string',
            name: 'caption',
            label: 'Caption',
            ui: { component: 'textarea' },
          },
          { type: 'number', name: 'order', label: 'Display order' },
        ],
      },
      {
        name: 'page',
        label: 'Site pages',
        path: 'content/pages',
        format: 'md',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Page content',
            isBody: true,
          },
        ],
      },
    ],
  },
})
