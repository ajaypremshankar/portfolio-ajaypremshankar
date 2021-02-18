import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      {/*<AnchorLink href="#blogs">Blogs</AnchorLink>*/}
      <AnchorLink href="#instagram">Captures</AnchorLink>
      <a href='https://drive.google.com/file/d/1ovb9NHzeRZDIxaTT_vyj0M2_Vk6YPc6l/view?usp=sharing' target='_blank'>Resume</a>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
