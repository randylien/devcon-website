import { useStaticQuery, graphql } from 'gatsby'
import { Playlist } from 'src/types/Playlist'
import { mapToPlaylist } from './usePlaylists'

export const useStaffPicks = (): Playlist => {
  const data = useStaticQuery(graphql`
    query {
      playlist: markdownRemark(fields: {slug: {eq: "/archive/playlists/staff-picks/"}}) {
        id
        frontmatter {
          title
          description
          imageUrl
          categories
          curators          
          profiles {
            id
            name
            lang
            description
            imageUrl
            role
            slug
          }
          videos
          archiveVideos {
            id
            slug
            title
            description
            edition
            youtubeUrl
            ipfsHash
            duration
            expertise
            type
            track
            tags
            speakers
          }
        }
        fields {
          collection
          slug
          id
        }
      }
    }
  `)

  return mapToPlaylist(data.playlist)
}
