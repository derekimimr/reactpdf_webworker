import { createElement } from 'react';

export const renderPDF = async () => {
  const { pdf } = await import('@react-pdf/renderer');
  const { PDF } = await import('./PDF');
  
  return pdf(createElement(PDF)).toBlob();
};
