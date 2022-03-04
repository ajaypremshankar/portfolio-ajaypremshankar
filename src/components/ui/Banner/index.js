import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import SocialMediaButtons from 'react-social-media-buttons';

import * as Styled from './styles';
import Button from '../Button';

const Banner = ({ title, subtitle, content, linkTo, linkText }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>
        I'm a passionate engineering professional with strong developer ethics. <br /><br />
      Being in the software development industry for more than 7 years now. I have got the opportunity to learn from some really talented people who were kind enough to teach me. <br /><br />
Apart from engineering, my passion is to help students and early-stage professionals grow in their career.
      </Styled.Content>
      <Link to='https://topmate.io/ajaypremshankar' target={'_blank'}>
          <Button>Book my calendar</Button>
        </Link>

      <SocialMediaButtons
        links={[
          'https://www.linkedin.com/in/ajaypremshankar/',
          'https://github.com/ajaypremshankar',
          'https://www.instagram.com/aj.prem/']}
        buttonStyle={{ margin: '0px 10px', backgroundColor: '#ffffff', borderRadius: '50%', border: '1px groove #3c366b' }}
        iconStyle={{ color: '#2B6CB0' }}
        openNewTab={true} />

    </Container>
  </Styled.Banner>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default Banner;
