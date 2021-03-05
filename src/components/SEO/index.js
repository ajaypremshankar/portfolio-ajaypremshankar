import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description ? title +' - ' + description : site.siteMetadata.description;

  const metaTags=['Ajay', 'Ajay Prem Shankar', 
  'ajaypremshankar', 'apremshankar', 
  'personal leadership', 'leadership',
  'coding', 'java', 'microservices',
  'reader', 'self development',
  'portrait', 'photography',
  'ajaypremshankar.medium',
  'organizeyou', 'todo',
  'personal growth', 'professional growth', 'growth', 
  'mentor', 'mentoring', 'mentorship', 'mentee', 'mentorship']
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: `ajaypremshankar`
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)
      .concat(metaTags)
    }
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.any,
  title: PropTypes.string.isRequired
};

export default SEO;
