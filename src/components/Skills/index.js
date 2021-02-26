import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';
import Timeline from 'components/ui/Timeline';
import FormatHtml from 'components/utils/FormatHtml';

const Skills = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "skills section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "skills" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const skills = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <Styled.Skills>

        <Timeline
          key={'𝗪𝗵𝗮𝘁 𝗜 𝗕𝗿𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝘁𝗮𝗯𝗹𝗲:'}
          title={'𝗪𝗵𝗮𝘁 𝗜 𝗕𝗿𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝘁𝗮𝗯𝗹𝗲:'}
          subtitle={''}
          content={<FormatHtml content={`
            - Strong work ethics.<br />
- Ability to take and work on the feedback.<br />
- Attention to details while analyzing requirements.<br />
- Calling out blockers and gaps in time to right channels.<br />
- Ability to mentor and influence people around.<br /><br />
`} />}
          startDate={undefined}
          endDate={undefined}
        />

        <Timeline
          key={'𝗣𝗿𝗼𝗳𝗶𝗰𝗶𝗲𝗻𝘁 𝗮𝘁:'}
          title={'𝗣𝗿𝗼𝗳𝗶𝗰𝗶𝗲𝗻𝘁 𝗮𝘁:'}
          subtitle={''}
          content={<FormatHtml content={`
- Java and J2EE<br />
- Spring Boot, Spring Framework<br />
- SQL & Relational<br />
- Microservices development<br /><br />
`} />}
          startDate={undefined}
          endDate={undefined}
        />


        <Timeline
          key={'𝗚𝗼𝗼𝗱 𝗮𝘁:'}
          title={'𝗚𝗼𝗼𝗱 𝗮𝘁:'}
          subtitle={''}
          content={<FormatHtml content={`
- Event-driven architectures<br />
- Kafka<br />
- Relational Databases and ORMs<br />
- Docker, Kubernetes<br />
- JavaScript, React<br />
`} />}
          startDate={undefined}
          endDate={undefined}
        />
      </Styled.Skills><br /><br />
    </Container>
  );
};

export default Skills;
