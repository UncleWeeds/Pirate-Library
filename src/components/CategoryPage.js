import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-xl">Category not found.</p>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-400 hover:underline"
        >
          ← Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="text-gray-300 hover:text-white">
        ← Back
      </Link>

      <header className="text-center my-6">
        <img
          src={category.icon}
          alt={category.title}
          className="mx-auto w-16 h-16 mb-2"
        />
        <h1 className="text-3xl font-bold">{category.title}</h1>
      </header>

      {category.sections.map((section, si) => (
        <section key={si} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <ul className="space-y-4">
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-black hover:bg-gray-800 rounded-lg transition"
                >
                  <span className="font-semibold text-blue-400">
                    {idx + 1}.{' '}
                  </span>
                  <span className="text-gray-200">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
