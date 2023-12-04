import { expose } from 'comlink';
import './workerShim';

const renderPDFInWorker = async (props) => {
  try {
    const { renderPDF } = await import('../renderPDF');

    // URL.createObjectURL() is used to create an object URL from a Blob object 
    return URL.createObjectURL(await renderPDF(props));
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

expose({ renderPDFInWorker })