import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Instagram } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Projects />
    <Instagram />
    <Contact />
  </Layout>
);
