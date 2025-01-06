import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import PostPage from './pages/PostPage/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
