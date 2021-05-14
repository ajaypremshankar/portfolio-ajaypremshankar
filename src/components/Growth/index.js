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

  const sectionTitle = markdownRemark.frontmatter;
  const testimonials = allMarkdownRemark.edges;

  return (
    <Container section>
      <Styled.Content>
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      I intend to help students and early-stage professionals grow in their career.<br /><br />
      If you find yourself asking any one of the following question(s):<br /><br />
        <Styled.ListContent>
          <ul style={{ listStyleType: "square" }}>
            <li>How to plan and prepare for coding interviews?</li>
            <li>Should I do projects or competitive programming?</li>
            <li>Why my resume doesn’t get shortlisted?</li>
            <li>How do I grow in my career?</li>
            <li>How do I build credibility at work?</li>
            <li>How do I make my LinkedIn profile stand out?</li>
            <li>How can I create visibility in the team?</li>
          </ul></Styled.ListContent>
        <br />
        <Link to='/connect-form/'>
          <Button>Request a connect</Button>
        </Link>
        <br /><br />
        I do NOT charge anything for these sessions. I truly want to help you while learning from your experience.<br />
Now, if you're holding back because you think there is a hidden charge which I shall reveal later!
        <br />
        Please note. I expect only two things from you.
        <Styled.ListContent>
          <ul style={{ listStyleType: "square" }}>
            <li>Please make sure you describe your question in detail.</li>
            <li>After the session, share your experience in form of feedback so that I can help better.</li>
          </ul>
        </Styled.ListContent>
        <br /><br /><br /><hr />
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
