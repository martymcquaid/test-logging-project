import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <Hero />
      <Features />
      <ContactForm />
    </div>
  );
};

export default LandingPage;