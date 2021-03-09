import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import CloudPdfResume from 'components/CloudPdfResume';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume"
    description='Competent software engineering professional with 7+ years of experience in software designing and development with various organizations. Brings strong developer ethics to the table. A big advocate of Clean Code and maintaining coding standards. Proficient in developing software using JAVA, Spring Boot, Hibernate, and JavaScript.'
    meta={['developer',
    'resume',
    'web deveoper',
    'java',
    'springboot',
    'writing service',
    'object oriented language',
    'cv',
    'spring boot',
    'object oriented programming',
    'professional resume',
    'app developer',
    'cv resume',
    'resume for job',
    'professional cv',
    'java spring boot',
    'object oriented',
    'app developers']} />
    <Projects />
    <hr />
    <CloudPdfResume />
  </Layout>
);

export default ResumePage;
