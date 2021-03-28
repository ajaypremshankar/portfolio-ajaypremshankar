import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';
import Button from 'components/ui/Button';

const Carousel = Loadable(() => import('components/ui/Carousel'));

const GrowthEnabler = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "mentoring section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "mentoring" } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 80) {
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

    console.log(markdownRemark, allMarkdownRemark)

  const sectionTitle = markdownRemark.frontmatter;
  const testimonials = allMarkdownRemark.edges;

  return (
    <Container section>
      <Styled.Content>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      As a growth enabler, I intend to help students and early-stage professionals grow in their career. My expertise lies in:<br /><br />
        <Styled.ListContent>
          <ul style={{ listStyleType: "square" }}>
            <li>Helping you identify your potential at work</li>
            <li>Brainstorming your career growth and trajectory</li>
            <li>Help you plan consistent growth without creating imbalance.</li>
            <li>Prepare and help you navigate day-to-day at work.</li>
            <li>Help you see what you can become next.</li>
          </ul></Styled.ListContent>
          <br />
          <Link to='/calendly/'>
        <Button>Book my calendar</Button>
        </Link>
        <br /><br /><br />
          <hr />
      </Styled.Content>
      <TitleSection title={'Testimonials'} subtitle={'What people are saying'} center />
      <Styled.GrowthTestimonialSections>
        <Carousel>
          {testimonials.map((item) => {
            const {
              id,
              html,
              frontmatter: { cover, title }
            } = item.node;

            return (
              <Styled.GrowthTestimonialSection key={id}>
                <Styled.Image>
                  <Img fluid={cover.childImageSharp.fluid} alt={title} />
                </Styled.Image>
                <Styled.Title>{title}</Styled.Title>
                <FormatHtml content={html} />
              </Styled.GrowthTestimonialSection>
            );
          })}
        </Carousel>
      </Styled.GrowthTestimonialSections>
    </Container>
  );
};

export default GrowthEnabler;
