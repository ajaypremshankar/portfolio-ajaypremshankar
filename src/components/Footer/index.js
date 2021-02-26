import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
      <Styled.Link href="https://www.linkedin.com/in/ajaypremshankar/" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
        <Styled.Link href="https://ajaypremshankar.medium.com/" rel="noreferrer noopener" target="_blank">
          Medium
        </Styled.Link>
        <Styled.Link href="https://github.com/ajaypremshankar" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.instagram.com/aj.prem/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Instagram
        </Styled.Link>
      </Styled.Links>
      <br /><br />
      <Styled.LightLinks>
      Credits:
      <Styled.LightLink
        href="https://www.gatsbyjs.com"
        rel="noreferrer noopener"
        target="_blank">
          Gatsby
        </Styled.LightLink> & 
        <Styled.LightLink
        href="https://github.com/SaimirKapaj"
        rel="noreferrer noopener"
        target="_blank">
          Saimir Kapaj
        </Styled.LightLink>
      </Styled.LightLinks>
    </Container>
  </Styled.Footer>
);

export default Footer;
