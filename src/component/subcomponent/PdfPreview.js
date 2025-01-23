import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

const PdfPreview = ({ fileUrl }) => (
  <PDFViewer
    document={{
      url: fileUrl,
    }}
    css="customViewer"
    canvasCss="customCanvas"
    scale={1.5}
  />
);

export default PdfPreview;
