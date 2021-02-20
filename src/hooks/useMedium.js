import { useStaticQuery, graphql } from "gatsby"

const useMedium = () => {
  const data = useStaticQuery(graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
  `)

  return data.allMediumPost.edges
}

export default useMedium
