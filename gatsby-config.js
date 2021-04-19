let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

module.exports = {
  siteMetadata: {
    title: `Ajay Prem Shankar`,
    description: `Portfolio - Ajay Prem Shankar`,
    author: `Starter written by Saimir Kapaj`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        //https://www.instagram.com/aj.prem/?__a=1
        access_token: process.env.LINKEDIN_ACCESS_TOKEN,
        //instagram_id: "1192172351",
      },

    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ajaypremshankar-personal-website`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#2B6CB0`,
        theme_color: `#2B6CB0`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.jpg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    }
  ]
};