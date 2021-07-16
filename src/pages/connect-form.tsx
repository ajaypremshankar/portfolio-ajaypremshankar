import Layout from 'components/Layout';
import SEO from 'components/SEO';
import React from 'react';
import { Link } from 'gatsby';
import Button from 'components/ui/Button';

const FormApp: React.FC = () => {

  return (
    <Layout>
      <SEO title="Connect with Ajay Prem Shankar, public form" />
      <Link to='/calendly/'>
          <Button>Book my calendar instead</Button>
      </Link>

    </Layout>
  );
};

export default FormApp;
