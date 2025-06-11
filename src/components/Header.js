import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-6 max-w-4xl mx-auto">
      <div className="flex-1 text-center">
        <img
          src="/logo.png"
          alt="Pirate Library"
          className="
            mx-auto
            w-23 h-23
            sm:w-23 sm:h-23
            md:w-23 md:h-23
          "
        />
        <h1 className="mt-2 text-xl sm:text-3xl font-bold">
          Libraty for all the popular pirate websites, for noobs      by UncleWeeds :)
        </h1>
      </div>
      <div className="w-10 h-10" /> {/* placeholder for future toggle */}
    </header>
  );
}

