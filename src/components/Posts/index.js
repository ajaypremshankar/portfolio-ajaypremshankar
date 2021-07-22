import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import fetch from "node-fetch";
import * as Styled from "./styles";

const Posts = () => {
  const [state, setState] = useState({
    allPosts: [],
    filtered: [],
    search: ''
  });
  const URL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ajaypremshankar";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const content = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = content.filter((item) => item.categories.length > 0);
        setState({ ...state, allPosts: posts, filtered: posts });
      });
  }, []);

  const handleChange = (e) => {
    const search = e.target.value;
    const filtered = state.allPosts.filter(
      (item) => item.title.toLowerCase().includes(search.toLowerCase())
        || item.content.toLowerCase().includes(search.toLowerCase())
        || item.categories.filter((cat) => cat.toLowerCase().includes(search.toLowerCase())).length > 0);

    setState({ ...state, search: e.target.value, filtered: filtered });
  }

  return (
    <Container section>
      <div id="blog"></div>
      <TitleSection title={"My Posts"} subtitle={"Sourced from medium"} center />
      <Styled.Input
        id="Search"
        autocomplete="off"
        value={state.search}
        onChange={(e) => { handleChange(e) }}
        placeholder="Searching for specific content?"
      />
      <Styled.Posts>
        {state.filtered.map((item) => {
          const id = item.guid;
          const title = item.title;
          const cover = item.thumbnail;
          const url = item.link;
          const date = item.pubDate;
          return (
            <Styled.Post key={id}>
              <a href={url} target={"_blank"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <Styled.Card>
                    {cover && (
                      <CoverImage src={cover} height="200px" alt={title} />
                    )}
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                    </Styled.Content>
                    <Styled.Tags>
                      {item.categories.map((tag) => (
                        <Styled.Tag key={tag}>{tag}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </a>
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
