import { useEffect } from 'react';
import { useAsync } from 'react-use';

import { wrap } from 'comlink';
import Worker from './workers/pdf.worker?worker';

export const pdfWorker = wrap(new Worker());

export const useRenderPDF = () => {
  const { value: url, loading, error } = useAsync(async() => pdfWorker.renderPDFInWorker());

  // The URL.revokeObjectURL(url) method releases an object URL that was previously created by calling the URL.createObjectURL() method.
  // This is typically used to free up resources associated with the object URL, such as memory or disk space.
  useEffect(() => (url ? () => URL.revokeObjectURL(url) : undefined), [url]);

  return { url, loading, error };
};
