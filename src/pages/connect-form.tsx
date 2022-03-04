import Layout from 'components/Layout';
import SEO from 'components/SEO';
import React from 'react';
import { Link } from 'gatsby';
import Button from 'components/ui/Button';
import Container from 'components/ui/Container';

const FormApp: React.FC = () => {

  return (
    <Layout>
      <SEO title="Connect with Ajay Prem Shankar, public form" />
      <Container section>
      <Link to='https://topmate.io/ajaypremshankar' target={'_blank'}>
          <Button>Book my calendar</Button>
        </Link>
      </Container>

    </Layout>
  );
};

export default FormApp;
