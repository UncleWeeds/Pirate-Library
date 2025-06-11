import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';

export default function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        {/* Category pages */}
        <Route path="/:categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}
