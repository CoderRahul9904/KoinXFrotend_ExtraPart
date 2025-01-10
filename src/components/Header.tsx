import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">KoinXCrypto</h1>
        <nav className="flex space-x-4">
          <a href="/" className="hover:text-yellow-500">Dashboard</a>
          <a href="/stats" className="hover:text-yellow-500">Stats</a>
          <a href="/coin" className="hover:text-yellow-500">Coin Details</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
