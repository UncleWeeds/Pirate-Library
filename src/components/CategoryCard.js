import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ id, icon, title, description }) {
  return (
    <Link to={`/${id}`}>
      <div
        className="
          group
          bg-black
          border-2 border-transparent
          hover:border-blue-500
          hover:-translate-y-2
          hover:shadow-2xl
          p-6 rounded-xl flex flex-col items-center
          transform transition
        "
      >
        <img src={icon} alt="" className="w-12 h-12 mb-4" />
        <h2 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        <p className="mt-2 text-gray-400 text-center">{description}</p>
      </div>
    </Link>
  );
}

