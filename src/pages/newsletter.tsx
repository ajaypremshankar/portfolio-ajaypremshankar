import Layout from 'components/Layout';
import Newsletter from 'components/Newsletter';
import SEO from 'components/SEO';
import React from 'react';

const FormApp: React.FC = () => {

  return (
    <Layout>
      <div style={{alignItems: 'center'}}>
      <SEO title="Newsletter Ajay Prem Shankar, substack" />
      <Newsletter/>
      </div>
    </Layout>
  );
};

export default FormApp;
