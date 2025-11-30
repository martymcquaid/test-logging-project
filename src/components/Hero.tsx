import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white text-center p-10 rounded-lg">
      <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
      <p className="mt-4">Your solution for everything you need.</p>
      <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded shadow">Get Started</button>
    </div>
  );
};

export default Hero;