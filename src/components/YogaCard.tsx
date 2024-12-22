import React, { useState } from 'react';
import { YogaPoseModal } from './YogaPoseModal';

interface YogaCardProps {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  image: string;
  poses: Array<{
    name: string;
    steps: string[];
    image: string;
  }>;
}

export function YogaCard({ id, name, description, benefits, image, poses }: YogaCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2">
            <h4 className="font-semibold text-purple-600">Key Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
          <button 
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Poses
          </button>
        </div>
      </div>

      <YogaPoseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        yogaType={name}
        poses={poses}
      />
    </>
  );
}