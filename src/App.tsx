import { useState } from 'react'
import './App.css'

function App() {
  const [style, setStyle] = useState(`
    h1 {
      color: white;
    }
    `)

  return (
    <>
      <style>{style}</style>
      <h1>Customize me!</h1>
      <textarea
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        style={{ width: '100%', height: '200px' }}
      />
    </>
  )
}

export default App
