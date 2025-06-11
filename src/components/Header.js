import React from 'react';

export default function Header() {
  const base = process.env.PUBLIC_URL;
  return (
    <header className="flex items-center justify-between px-4 py-6 max-w-4xl mx-auto">
      <div className="flex-1 text-center">
        <img
          src={base + '/logo.png'}
          alt="Pirate Library"
          className="mx-auto w-32 h-32"
        />
        <h1 className="mt-2 text-xl sm:text-3xl font-bold">
          Your gateway to entertainment and tools
        </h1>
      </div>
      <div className="w-10 h-10" /> {/* Dark/light toggle */}
    </header>
  );
}
