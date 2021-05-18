import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Newsletter = () => {
  return (
    <Styled.Newsletter>
      <Container section>
        <TitleSection title={'Newsletter'} subtitle={'Reshape your tech career bit-by-bit'} center />
        <iframe src="https://ajaypremshankar.substack.com/embed" width="100%" height="150" style={{border:"1px solid #EEE", background:"#F7FAFC"}}></iframe>
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
