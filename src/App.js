import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';

export default function App() {
  return (
    <Routes>
      {/* Home at “/” */}
      <Route path="/" element={<HomePage />} />
      {/* Category pages at “/someCategoryId” */}
      <Route path="/:categoryId" element={<CategoryPage />} />
    </Routes>
  );
}
