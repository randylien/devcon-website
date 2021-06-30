import { CreateSchemaCustomizationArgs } from 'gatsby'
import { links as linksResolver } from './resolvers/links'
import { tagCountResolver, tagsResolver } from './resolvers/tags'
import { dip as dipResolver } from './resolvers/dip'
import { videoResolver } from './resolvers/archive'
import { profileResolver } from './resolvers/profiles'

const baseTypes = `
  type MarkdownRemark implements Node { 
    frontmatter: Frontmatter 
  }

  type Link {
    url: String,
    title: String,
    type: String
    links: [Link]
  }

  type Tag {
    id: String,
    slug: String,
    lang: String,
    title: String
  }

  type ArchiveVideo {
    id: String,
    slug: String,
    edition: Int,
    title: String,
    description: String,
    youtubeUrl: String,
    ipfsHash: String,
    duration: Int,
    expertise: String,
    type: String,
    track: String,
    tags: [String],
    speakers: [String]
  }

  type Profile {
    id: String
    slug: String
    lang: String
    name: String
    role: String
    description: String
    imageUrl: String
  }
`

export const createSchemaCustomization = ({ actions, schema }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions

  const typeDefs: any = [
    baseTypes,
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        links: linksResolver,
        next_dip: dipResolver('next'),
        prev_dip: dipResolver('prev'),
        tagItems: tagsResolver,
        tagCount: tagCountResolver,
        archiveVideos: videoResolver,
        profiles: profileResolver
      },
    }),
  ]

  createTypes(typeDefs)
}
