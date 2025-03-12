"use clientS"
import React from 'react';

const AnimatedButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-blue-600 bg-white rounded-full group">
      <span className="absolute inset-0 border-2 border-blue-600 rounded-full animate-border-spin"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default AnimatedButton;