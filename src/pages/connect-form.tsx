import Layout from 'components/Layout';
import SEO from 'components/SEO';
import React from 'react';

const FormApp: React.FC = () => {

  return (
    <Layout>
      <SEO title="Connect with Ajay Prem Shankar, public form" />
      <iframe id="myFrame" allowTransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://forms.app/form/609e9769001f18095acf30e5" frameborder="0" style={{width: "1px", minWidth:"100%", height:"1000px", border:"none"}}></iframe>
    </Layout>
  );
};

export default FormApp;
