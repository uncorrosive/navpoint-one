import React from 'react';
import Header from './components/Header';
import NavigationForm from './components/NavigationForm';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-12 sm:px-0">
            <div className="text-center mb-12 scroll-blur">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Navigate Any Indoor Space
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Step-by-step navigation for complex indoor environments, powered by advanced AI technology.
              </p>
            </div>
            <NavigationForm />
          </div>
        </div>
      </main>
    </div>
  );
}