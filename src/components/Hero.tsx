import React from 'react';
import { benefits } from '../data/benefits';
import { BenefitCard } from './BenefitCard';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
          alt="Yoga background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Life Through
            <span className="text-purple-600"> Yoga</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover inner peace, enhance your physical well-being, and achieve harmony
            in mind and body through our transformative yoga practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <BenefitCard
                key={index}
                icon={<Icon className="w-8 h-8 text-purple-500" />}
                title={benefit.title}
                description={benefit.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}