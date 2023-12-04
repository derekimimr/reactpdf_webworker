import { createElement } from 'react';

export const renderPDF = async () => {
  const { pdf } = await import('@react-pdf/renderer');
  const { PDF } = await import('./PDF');
  
  // pdf(createElement(PDF)) calls the pdf function with the PDF component as an argument. This generates a PDF document.
  // .toBlob() is a method that converts the generated PDF document into a Blob object.
  return pdf(createElement(PDF)).toBlob();
};
