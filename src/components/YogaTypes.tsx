import React from 'react';
import { yogaTypes } from '../data/yogaTypes';
import { YogaCard } from './YogaCard';

export function YogaTypes() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Different Types of Yoga
          </h2>
          <p className="text-xl text-gray-600">
            Find the perfect practice that resonates with your body and spirit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {yogaTypes.map((type, index) => (
            <YogaCard key={index} {...type} />
          ))}
        </div>
      </div>
    </div>
  );
}