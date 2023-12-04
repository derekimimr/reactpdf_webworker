import { useState } from 'react';
// import { saveAs } from 'file-saver';
import { RenderedPDFViewer } from './RenderedPDFViewer';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

    <input value={text} onChange={(e) => setText(e.target.value)} />
{/* 
    <button
      onClick={async () => {
        const { renderPDF } = await import('./renderPDF');
        const blob = await renderPDF({ text });
        saveAs(blob, 'test.pdf');
      }}
    >
      Download
    </button> */}

    <RenderedPDFViewer
      style={{ backgroundColor: 'grey', width: '500px', height: '760px' }}
      text={text}
    />

  </div>
  )
}

export default App
