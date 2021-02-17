import React from "react"
import Img from "gatsby-image"
import Heart from "./heart"
import "./style.css"
import { Container, Card, TitleWrap } from 'components/common';
import useInstagram from "hooks/useInstagram"
import { Wrapper } from './styles';

export const Instagram = () => {
  const nodes = useInstagram();
  
  return (
    <Wrapper as={Container} id="instagram">
      <h2>Instagram</h2>
    <div className="instagram-grid">
      {nodes.map((post) => {
        const title = post.caption ? post.caption.split(`#`)[0] : ``
        const date = new Date(post.timestamp * 1000).toLocaleDateString(`en-US`)

        return (
          <a key={post.id} className="instagram-link-styles"
           href={`https://www.instagram.com/p/${post.id}/`}>
            <div className="instagram-overlay" />
            <Img fluid={post.localFile.childImageSharp.fluid} />
            <div className="instagram-content">
              <div className="instagram-title">{title}</div>
              <div className="instagram-bottom">
                <span className="instagram-heart">
                  <Heart /> {post.likes}
                </span>
                <span>{date}</span>
              </div>
            </div>
          </a>
        )
      })}
    </div>
    </Wrapper>
  )
}
