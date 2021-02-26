import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import fetch from 'node-fetch'
import * as Styled from './styles';

const Posts = () => {
  const [state, setState] = useState([]);
  const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ajaypremshankar';
  fetch(URL)
    .then(res => res.json())
    .then((data) => {
      const content = data.items; //This is an array with the content. No feed, no info about author etc..
      const posts = content.filter(item => item.categories.length > 0);
      setState(posts);
    })


  return (
    <Container section>
      <div id="blog"></div>
      <TitleSection title={'Writeups'} subtitle={'My Blogs'} center />
      <Styled.Posts>
        {state.map((item) => {
          const id = item.guid
          const title = item.title;
          const cover = item.thumbnail;
          const url = item.link;
          const date = item.pubDate;
          return (
            <Styled.Post key={id}>
              <Link to={url} target={'_blank'}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    {cover && <CoverImage src={cover} height="200px" alt={title} />}
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
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

export default Posts;

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;