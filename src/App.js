import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';

export default function App() {
  const base = process.env.PUBLIC_URL;

  return (
    <BrowserRouter basename={base}>
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: `url(${base}/background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryId" element={<CategoryPage />} />
        </Routes>

        {/* Vercel Analytics: tracks page views & visitors */}
        <Analytics />
      </div>
    </BrowserRouter>
  );
}
