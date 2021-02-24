import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';
import Read from 'components/Read';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Read />
    </Layout>
  );
};

export default BlogPage;
