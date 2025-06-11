import React from 'react';
import Header from './Header';
import CategoryCard from './CategoryCard';
import { categories } from '../data';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              icon={cat.icon}
              title={cat.title}
              description={cat.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}
