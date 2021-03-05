import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import GrowthEnabler from 'components/Growth';

const MentorPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Ajay Prem Shankar, Engineer and Personal Growth Enabler" />
      <GrowthEnabler />
    </Layout>
  );
};

export default MentorPage;
