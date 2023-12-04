// import { useState } from 'react';
import { RenderedPDFViewer } from './RenderedPDFViewer';

function App() {
  // const [text, setText] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

    {/* <input value={text} onChange={(e) => setText(e.target.value)} /> */}

    <RenderedPDFViewer
      style={{ backgroundColor: 'grey', width: '500px', height: '760px' }}
      // text={text}
    />

  </div>
  )
}

export default App
