import React from 'react';
import { WorkingGridType } from '../../types/content';

interface WorkingGridProps {
  type: WorkingGridType;
  className?: string;
}

export const WorkingGrid: React.FC<WorkingGridProps> = ({ type, className = '' }) => {
  if (type === 'blank') {
    return <div className={`w-full h-full bg-[#FAF7F2] ${className}`} />;
  }

  if (type === 'dot') {
    return (
      <div
        className={`w-full h-full bg-[#FAF7F2] ${className}`}
        style={{
          backgroundImage:
            'radial-gradient(circle, #94A3B8 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />
    );
  }

  if (type === 'square') {
    return (
      <div
        className={`w-full h-full bg-[#FAF7F2] ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148, 163, 184, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
    );
  }

  if (type === 'lined') {
    return (
      <div
        className={`w-full h-full bg-[#FAF7F2] ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(148, 163, 184, 0.4) 1px, transparent 1px)',
          backgroundSize: '100% 36px',
        }}
      />
    );
  }

  if (type === 'axes') {
    return (
      <div className={`relative w-full h-full bg-[#FAF7F2] overflow-hidden ${className}`}>
        {/* Light grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148, 163, 184, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.25) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        {/* Axes SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker
              id="arrow-x"
              markerWidth="10"
              markerHeight="10"
              refX="6"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#0A192F" />
            </marker>
            <marker
              id="arrow-y"
              markerWidth="10"
              markerHeight="10"
              refX="3"
              refY="6"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,9 L6,9 L3,0 z" fill="#0A192F" />
            </marker>
          </defs>
          {/* Centered or lower-left axes */}
          <line
            x1="60"
            y1="50%"
            x2="96%"
            y2="50%"
            stroke="#0A192F"
            strokeWidth="2.5"
            markerEnd="url(#arrow-x)"
          />
          <line
            x1="50%"
            y1="94%"
            x2="50%"
            y2="4%"
            stroke="#0A192F"
            strokeWidth="2.5"
            markerEnd="url(#arrow-y)"
          />
          <text x="96%" y="48%" fill="#0A192F" fontSize="22" fontWeight="bold">
            x
          </text>
          <text x="52%" y="4%" fill="#0A192F" fontSize="22" fontWeight="bold">
            y
          </text>
          <text x="47%" y="54%" fill="#64748B" fontSize="20" fontWeight="bold">
            0
          </text>
        </svg>
      </div>
    );
  }

  return <div className={`w-full h-full bg-[#FAF7F2] ${className}`} />;
};
