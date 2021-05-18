import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Button from 'components/ui/Button';
import Container from 'components/ui/Container';
import { Link } from 'gatsby';
import React from 'react';

const Calendly: React.FC = () => {

  return (
    <Layout>
      <SEO title="Ajay Prem Shankar's public calendar" />
      <Container section>
        <Link to='/connect-form/'>
          <Button>Request a connect instead</Button>
        </Link>
      </Container>
      {/**<InlineWidget url="https://calendly.com/ajaypremshankar/connect-with-ajay-prem-shankar" />*/}
    </Layout>
  );
};

export default Calendly;
