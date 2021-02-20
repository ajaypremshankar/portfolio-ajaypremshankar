import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import TitleSection from 'components/ui/TitleSection';
import Container from 'components/ui/Container';

import * as Styled from './styles';
import useInstagram from 'hooks/useInstagram';

const Captures = () => {
  const nodes = useInstagram();

  return (
    <Container section>
      <TitleSection title={'Captures'} subtitle={' '} center />
      <Styled.Posts>
        {nodes.map((post) => {

        const title = post.caption ? post.caption.split(`#`)[0] : ``
        const date = new Date(post.timestamp * 1000).toLocaleDateString(`en-In`)
        
        return (
            <Styled.Post key={post.id}>
              <Link to={`https://www.instagram.com/p/${post.id}/`}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    <Styled.Image>
                      <Img fluid={post.localFile.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      {/*<Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>*/}
                    </Styled.Content>
                    {/*<Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                      </Styled.Tags>*/}
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
