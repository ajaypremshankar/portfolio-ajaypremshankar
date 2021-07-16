import Layout from 'components/Layout';
import SEO from 'components/SEO';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly: React.FC = () => {

  return (
    <Layout>
      <SEO title="Ajay Prem Shankar's public calendar" />
      <InlineWidget url="https://calendly.com/ajaypremshankar/connect-with-ajay-prem-shankar" />
    </Layout>
  );
};

export default Calendly;