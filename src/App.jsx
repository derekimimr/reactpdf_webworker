import { RenderedPDFViewer } from './RenderedPDFViewer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

    <RenderedPDFViewer
      style={{ backgroundColor: 'grey', width: '500px', height: '760px' }}
    />

  </div>
  )
}

export default App
