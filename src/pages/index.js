import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Instagram, Medium } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Instagram />
    <Medium />
    <Skills />
    <Contact />
  </Layout>
);
