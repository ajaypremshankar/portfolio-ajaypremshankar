import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import dev from 'assets/illustrations/skills.svg';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            <h2>𝗦𝘂𝗺𝗺𝗮𝗿𝘆:</h2>
            <ul>
              <li>Competent software engineering professional with 7+ years of experience in software designing and development with prestigious organizations.</li>
              <li>Person with strong developer ethics to the table. A big advocate of Clean Code and maintaining coding standards.</li>
              <li>Proficient in developing software using JAVA, Spring Boot, Hibernate, and JavaScript.</li>
            </ul>
          </p>
          <Thumbnail>
          <img src={dev} alt="I’m Ajay and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        </Details>
        <Details theme={theme}>
          <p>
            <h2>𝗪𝗵𝗮𝘁 𝗜 𝗕𝗿𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝘁𝗮𝗯𝗹𝗲:</h2>
            <ul>
              <li>Strong work ethics.</li>
              <li>Ability to take and work on the feedback.</li>
              <li>Attention to details while analyzing requirements.</li>
              <li>Calling out blockers and gaps in time to right channels.</li>
              <li>Ability to mentor and influence people around.</li>
            </ul>

            <h2>𝗣𝗿𝗼𝗳𝗶𝗰𝗶𝗲𝗻𝘁 𝗮𝘁:</h2>
            <ul>
              <li>Java and J2EE</li>
              <li>Spring Boot, Spring Framework</li>
              <li>SQL & Relational</li>
              <li>Microservices development</li>
            </ul>

            <h2>𝗚𝗼𝗼𝗱 𝗮𝘁:</h2>
            <ul>
              <li>Event-driven architectures</li>
              <li>Kafka</li>
              <li>Relational Databases and ORMs</li>
              <li>Docker, Kubernetes</li>
              <li>JavaScript, React</li>
            </ul>

            <h2>𝗦𝘂𝗰𝗸𝘀 𝗮𝘁:</h2>
            <ul>
              <li>Multitasking</li>
            </ul>
          </p>
          <p>
            Social buttons go here.
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
