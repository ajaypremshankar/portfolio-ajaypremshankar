import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import useMedium from 'hooks/useMedium'
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Posts = () => {
  const posts = useMedium();

  return (
    <Container section>
      <div id="blog"></div>
      <TitleSection title={'Writeups'} subtitle={'My Blogs'} center />
      <Styled.Posts>
        {posts.map((item) => {
          const id = item.node.id;
          const title =  item.node.title;
          const text = item.node.virtuals.subtitle;
          const cover = `https://cdn-images-1.medium.com/max/400/${item.node.virtuals.previewImage.imageId}`;
          const url = `https://medium.com/@ajaypremshankar/${item.node.uniqueSlug}`;
          const date = item.node.createdAt;
          const time= item.node.virtuals.readingTime;

          return (
            <Styled.Post key={id}>
              <Link to={url}  target={'_blank'}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                  {cover && <CoverImage src={cover} height="200px" alt={title} />}
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{text}</Styled.Description>
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

export default Posts;

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;