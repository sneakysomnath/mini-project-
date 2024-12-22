import React from 'react';
import { X } from 'lucide-react';

interface YogaPoseModalProps {
  isOpen: boolean;
  onClose: () => void;
  yogaType: string;
  poses: Array<{
    name: string;
    steps: string[];
    image: string;
  }>;
}

export function YogaPoseModal({ isOpen, onClose, yogaType, poses }: YogaPoseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{yogaType} Poses</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          {poses.map((pose, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img
                    src={pose.image}
                    alt={pose.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">{pose.name}</h3>
                  <ol className="space-y-2">
                    {pose.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-2">
                        <span className="font-semibold text-purple-600">{stepIndex + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}