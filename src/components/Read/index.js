import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import useMedium from 'hooks/useMedium'
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Read = () => {
  const posts = useMedium();

  return (
    <Container section>
      <div id="read"></div>
      <TitleSection title={'Blog'} subtitle={' '} center />
      <Styled.Posts>
        Coming soon.
      </Styled.Posts>
    </Container>
  );
};

export default Read;

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;