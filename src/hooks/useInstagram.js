import { useStaticQuery, graphql } from "gatsby"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    {
      instagram: allInstaNode(sort: { fields: likes, order: DESC }, limit: 9) {
        nodes {
          caption
          id
          timestamp
          likes
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.instagram.nodes
}

export default useInstagram