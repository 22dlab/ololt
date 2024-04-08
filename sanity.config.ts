import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from '@/sanity/schema'

import { deskStructure } from '@/sanity/config/deskStructure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/admin',

  title: 'CCCMDC',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: deskStructure
    }),
    visionTool()
  ],

  schema: { types: schemaTypes }
})
