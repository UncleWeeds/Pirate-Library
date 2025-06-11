import React from 'react';
// No change to imports
export default function CategoryCard({ icon, title, description }) {
  const base = process.env.PUBLIC_URL;
  return (
    <div className="bg-black p-6 rounded-xl flex flex-col items-center">
      <img
        src={base + icon}
        alt={title}
        className="w-12 h-12 mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-200">
        {title}
      </h2>
      <p className="mt-2 text-gray-400 text-center">
        {description}
      </p>
    </div>
  );
}
