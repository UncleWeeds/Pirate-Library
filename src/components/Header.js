// src/components/Header.js
import React from 'react';

export default function Header() {
  const base = process.env.PUBLIC_URL;
  return (
    <header className="flex items-center justify-center md:justify-between px-4 py-6 max-w-4xl mx-auto">
      <div className="flex-1 text-center">
        <img
          src={base + '/logo.png'}
          alt="Pirate Library"
          className="mx-auto  w-[250px] h-[250px] "
        />
        <h1 className="mt-2 text-xl sm:text-3xl font-bold">
          Library for all the popular pirate websites
        </h1>
        <h1 className="mt-2 text-xl sm:text-3xl font-bold">
          by UncleWeeds :)
        </h1>
      </div>
      {/* Toggle placeholder—hidden on small screens so centering works */}
      <div className="hidden md:block w-10 h-10" />
    </header>
  );
}

