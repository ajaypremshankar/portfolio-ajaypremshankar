import { useStaticQuery, graphql } from "gatsby"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
  query InstagramQuery {
    allInstagramContent {
      edges {
        node {
          caption
          media_url
          id
          timestamp
          localImage {
            childImageSharp {
              fluid(quality: 100, maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
      }
    }
  }
}
`)
  return data.allInstagramContent.edges.filter(edge => edge 
     && edge.node 
    && edge.node.localImage
    && edge.node.localImage.childImageSharp ).slice(0, 30)
}

export default useInstagram
