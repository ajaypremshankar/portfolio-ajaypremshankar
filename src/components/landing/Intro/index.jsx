import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import FollowAt from "react-social-media-follow";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const links = [
    'https://twitter.com/apremshankar',
    'https://www.instagram.com/aj.prem',
    'https://github.com/ajaypremshankar',
    'https://www.linkedin.com/in/ajaypremshankar/'
  ];

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Ajay and welcome to my virtual home.</h4>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
          <br/><br/><br/>
          <FollowAt color='#0074d9' links = {links}/>

        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Ajay and welcome to my virtual home." />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
