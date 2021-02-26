import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';
import { useStaticQuery } from 'gatsby';

const Projects = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "project section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { fields: frontmatter___year, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              year(formatString: "YYYY")
              repo
              link
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const posts = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            frontmatter: { title, repo, link, cover, description, year }
          } = item.node;

          return (
            <Styled.Post key={id}>
              <Link to={repo ? repo : '#'} target='_blank'>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                <Styled.Card>
                  
                  <Styled.Image>
                    { cover?.childImageSharp?.fluid && 
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />}
                  </Styled.Image>
                  <Styled.Content>
                    <Styled.Date>{year}</Styled.Date>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Description>{description}</Styled.Description>
                  </Styled.Content>
                </Styled.Card>
              </motion.div>
              </Link>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Projects;

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;