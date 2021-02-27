import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';
import Read from 'components/Read';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blogs"
      description='Blogs on personal leadership and general life'
      meta={['leadership',
      'work life',
      'personalleadership',
      'self development',
      'values',
      'integrity',
      'integrity meaning',
      'self improvement',
      'values meaning',
      'personal values',
      'personal growth',
      'worklife',
      'leadership and management',
      'integrity meaning in english',
      'self growth',
      'values in life',
      'good values',
      'values and beliefs']} />
      <Posts/>
    </Layout>
  );
};

export default BlogPage;
