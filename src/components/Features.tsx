import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  { title: 'Feature 1', description: 'Description of feature 1.' },
  { title: 'Feature 2', description: 'Description of feature 2.' },
  { title: 'Feature 3', description: 'Description of feature 3.' }
];

const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
};

export default Features;