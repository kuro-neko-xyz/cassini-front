import { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [style, setStyle] = useState('');

  return (
    <>
      <style>{style}</style>
      <Post
        date={Date.now()}
        picture=""
        user="Donald J. Trump"
        username="realDonaldTrump"
        content="Despite the constant negative press covfefe"
      />
      <textarea
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        style={{ width: '100%', height: '200px' }}
      />
    </>
  );
}

export default App;
