import React, { useEffect, useRef } from 'react';
import Container from 'components/ui/Container';
import CloudPdfViewer from "@openbook/cloudpdf-viewer";

import * as Styled from './styles';

const CloudPdfResume = () => {

  const viewer = useRef(null);

  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "0a860d63-a518-4810-a508-c095680c3162",
        darkMode: true,
        themeColor: '#FFFFFF',
        initialMaxWidth: 800,
        appBarColored: true
      },
      viewer.current
    ).then((instance) => { });
  }, []);

  return (
    <Container section>
      <div style={{ width: '100%', minHeight: '200vh' }} className="viewer" ref={viewer} />
    </Container>
  )
};

export default CloudPdfResume;
