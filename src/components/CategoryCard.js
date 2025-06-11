// src/components/CategoryCard.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ id, icon, title, description }) {
  const base = process.env.PUBLIC_URL;
  return (
    <Link to={'/' + id}>
      <div
        className="
          group
          bg-black border-2 border-transparent
          p-6 rounded-xl flex flex-col items-center
          transform transition
          hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500
        "
      >
        <img
          src={base + icon}
          alt={title}
          className="
            w-12 h-12 mb-4
            transition
            group-hover:filter-none
          "
        />
        <h2
          className="
            text-xl font-semibold
            text-gray-200
            group-hover:text-blue-400
            transition-colors
          "
        >
          {title}
        </h2>
        <p className="mt-2 text-gray-400 text-center">
          {description}
        </p>
      </div>
    </Link>
  );
}

