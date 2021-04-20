import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import TitleSection from 'components/ui/TitleSection';
import Container from 'components/ui/Container';

import * as Styled from './styles';
import useInstagram from 'hooks/useInstagram';
const Captures = () => {
  const edges = useInstagram();

  return (
    <Container section>
      <TitleSection title={'Captures'} subtitle={' '} center />
      <Styled.Posts>
          {edges.map((edge) => {
            const post = edge.node
            const title = post.caption ? post.caption.split(`#`)[0] : ``
            const date = new Date(post.timestamp).toLocaleDateString(`en-In`)

            return (
                <Styled.Post key={post.id}>
                  <Link to={post.permalink} target='_blank'>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                    <Styled.Card>
                      <Styled.Image>
                        <Img fluid={post.localImage.childImageSharp.fluid} alt={title} />
                      </Styled.Image>
                      <Styled.Content>
                        <Styled.Date>{title.split(/\s+/).slice(0,10).join(" ")}</Styled.Date>
                        <Styled.Date>[{date}]</Styled.Date>
                      </Styled.Content>
                    </Styled.Card>
                  </motion.div>
                  </Link>
                </Styled.Post>
            );
          })}
      </Styled.Posts>
    </Container>
  );
};

export default Captures;
