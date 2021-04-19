import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Captures from 'components/Captures';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Captures"
      description='Time spent in capturing simple pictures and then editing them'
      meta={['portrait',
      'instagram',
      'photography',
      'capture',
      'travel',
      'trip',
      'instagram m',
      'photography photo',
      'travel website',
      'travel sites']} />
      <Captures />
    </Layout>
  );
};

export default BlogPage;
