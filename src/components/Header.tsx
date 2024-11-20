import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://preview.redd.it/navpoint-black-white-small-logo-v0-wss4rkc5rz1e1.png?width=1080&crop=smart&auto=webp&s=d4d4a62fa9ecc3cd3a8a866aebc3b1d0c5239f0b"
              alt="NavPoint Logo"
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold text-white">NavPoint</h1>
              <p className="text-sm font-mono text-gray-400">&lt;/Stay Curious.&gt;</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}