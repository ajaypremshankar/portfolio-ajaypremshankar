import { useStaticQuery, graphql } from "gatsby"

//https://www.gatsbyjs.com/starters/EmaSuriano/gatsby-starter-mate/


const useMedium = () => {
  const data = useStaticQuery(graphql`
  query {
    medium: allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
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

  console.log(data)
  return data.medium.edges
}

export default useMedium