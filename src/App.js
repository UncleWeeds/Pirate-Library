import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize:    'cover',
          backgroundPosition:'center',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryId" element={<CategoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
