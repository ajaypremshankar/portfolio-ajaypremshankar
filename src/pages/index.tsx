import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import Newsletter from 'components/Newsletter';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home"
      description='Ajay Prem Shankar'
      meta={['develop microservices in java',
      'develop microservices using spring boot',
      'developing microservices in java',
      'developing microservices using spring boot',
      'developing microservices with spring boot',
      'java and microservices',
      'java developer software',
      'java engineering',
      'java for microservices',
      'java in use microservices',
      'java microservices developer',
      'java microservices spring',
      'java microservices spring boot',
      'java microservices with spring boot',
      'java software developer',
      'java software engineering',
      'java spring boot microservices',
      'java with microservices',
      'microservice in spring boot',
      'microservice java spring boot',
      'microservice using spring boot',
      'microservices and spring boot',
      'microservices for java developers',
      'microservices in java spring boot',
      'microservices using java',
      'microservices using spring',
      'software developed in java',
      'software development using java',
      'software java developer',
      'spring and microservices',
      'spring boot and microservices',
      'spring boot with microservices',
      'spring for microservices',
      'spring java microservices',
      'spring microservice',
      'spring microservices with spring boot',
      'spring with microservices',
      'use of microservices in java']}
      />
      <HeroBanner />
      <Services />
      <hr />
      <Newsletter/>
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
