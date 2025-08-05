# Sanity CMS Setup for The Mechanic

This project now includes Sanity CMS as an alternative to Directus. Here's how to get started:

## 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Note your Project ID and Dataset name (usually 'production')

## 2. Update Configuration

Update the `sanity.config.ts` and `src/lib/sanity.ts` files with your actual project ID:

```typescript
projectId: 'your-actual-project-id', // Replace with your project ID
```

## 3. Start Sanity Studio

Run the Sanity Studio locally:

```bash
npx sanity dev
```

This will start the Sanity Studio at `http://localhost:3333`

## 4. Content Types Available

### Page Builder
- **Page**: Flexible page builder with blocks (Hero, Text Content, Image Section, Team Section)
- **Over Ons**: Dedicated schema for the About Us page
- **Team Member**: Individual team member profiles

### Block Types
- **Hero Section**: Title, subtitle, background image, and buttons
- **Text Content**: Rich text with formatting
- **Image Section**: Single image with alt text
- **Team Section**: Reference to team members

## 5. Demo Page

Visit `/over-ons-sanity` to see the Sanity-powered version of the Over Ons page.

## 6. Key Benefits

- **Block-based page builder**: Users can create pages by adding and arranging blocks
- **Better TypeScript support**: Cleaner type definitions
- **Real-time preview**: See changes instantly
- **Portable Text**: Rich text that's easy to render
- **Image optimization**: Built-in image processing
- **Visual editing**: Intuitive interface for content creators

## 7. Migration from Directus

The current Directus data structure has been mapped to Sanity schemas:
- `over_ons` → `overOns`
- `team_members` → `teamMember`
- Rich text fields → Portable Text (blockContent)

## 8. Components

- `SanityImage.astro`: Renders optimized images from Sanity
- `PortableText.astro`: Renders rich text content
- `over-ons-sanity.astro`: Example page using Sanity data

## Next Steps

1. Set up your Sanity project
2. Add content through the Studio
3. Test the `/over-ons-sanity` page
4. Gradually migrate other pages to use Sanity
5. Eventually replace Directus entirely