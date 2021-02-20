import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';
import Captures from 'components/Captures';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Captures" />
      <Captures />
    </Layout>
  );
};

export default BlogPage;
