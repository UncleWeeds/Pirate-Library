import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';

export default function App() {
  const base = process.env.PUBLIC_URL;
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: 'url(' + base + '/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}
