import React from "react"
import Img from "gatsby-image"
import Heart from "./heart"
import "./style.css"
import { Container } from 'components/common';
import { Wrapper } from './styles';
import useMedium from "hooks/useMedium";

export const Medium = () => {
  const nodes = useMedium();
  console.log("Loaded")
  console.log(nodes)

  return (
    <Wrapper as={Container} id="blogs">
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
