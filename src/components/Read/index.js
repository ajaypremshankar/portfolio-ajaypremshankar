import React from 'react';
import styled from 'styled-components';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Read = () => {
  return (
    <Container section>
      <div id="read"></div>
      <TitleSection title={'Read'} subtitle={' '} center />
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