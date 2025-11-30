import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;