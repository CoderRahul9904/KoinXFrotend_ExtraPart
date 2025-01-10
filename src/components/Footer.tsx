import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">KoinXCrypto</h2>
            <p className="text-sm text-gray-400">Your trusted crypto companion.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-200"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-200"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500 transition duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} KoinXCrypto. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
