import React, { useState } from 'react';
import { RotateCcw, ChevronRight, ArrowRight } from 'lucide-react';

// ==================== 1. FormulaRearranger ====================
export const FormulaRearranger: React.FC = () => {
  const [step, setStep] = useState(2);

  // Rearrange v = u + at for t
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Rearrange Formula: Make <span className="text-indigo-600 font-black">t</span> the Subject
        </div>
        <button
          type="button"
          onClick={() => setStep((s) => (s >= 2 ? 0 : s + 1))}
          className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
        >
          Next step
        </button>
      </div>

      <div className="p-6 bg-amber-50/40 border-2 border-amber-200 rounded-2xl space-y-4 text-center font-mono text-2xl md:text-3xl font-black text-navy">
        <div className="text-slate-600">Starting formula: v = u + at</div>
        {step >= 1 && (
          <div className="p-3 bg-white border border-slate-300 rounded-xl space-y-1">
            <div className="text-sm font-sans font-bold text-slate-500">Step 1: Subtract u from both sides (-u)</div>
            <div className="text-indigo-700">v - u = at</div>
          </div>
        )}
        {step >= 2 && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl space-y-1">
            <div className="text-sm font-sans font-bold text-slate-500">Step 2: Divide both sides by a (÷ a)</div>
            <div className="text-emerald-800">t = (v - u) / a</div>
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== 2. AlgebraicFractionTool ====================
export const AlgebraicFractionTool: React.FC = () => {
  const [step, setStep] = useState(2);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Algebraic Fractions: Addition
        </div>
        <button
          type="button"
          onClick={() => setStep((s) => (s >= 2 ? 0 : s + 1))}
          className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
        >
          Next step
        </button>
      </div>

      <div className="p-6 bg-blue-50/40 border-2 border-blue-200 rounded-2xl text-center space-y-4 font-mono text-2xl md:text-3xl font-black text-navy">
        <div>Simplify: x/2 + x/3</div>
        {step >= 1 && (
          <div className="text-indigo-700">
            Find common denominator (LCM of 2 and 3 = 6):
            <div className="mt-2 text-2xl font-sans text-slate-700">
              = 3x/6 + 2x/6
            </div>
          </div>
        )}
        {step >= 2 && (
          <div className="p-4 bg-white border-2 border-emerald-300 rounded-xl text-emerald-800">
            = (3x + 2x) / 6 = 5x / 6
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== 3. SimultaneousEquationsGraph ====================
export const SimultaneousEquationsGraph: React.FC = () => {
  // Line 1: y = 2x - 1
  // Line 2: y = -x + 5
  // Intersection: 2x - 1 = -x + 5 => 3x = 6 => x = 2, y = 3
  const [showCoords, setShowCoords] = useState(true);

  const width = 450;
  const height = 450;
  const pad = 40;
  const toX = (x: number) => pad + ((x + 2) / 8) * (width - 2 * pad);
  const toY = (y: number) => height - pad - ((y + 2) / 8) * (height - 2 * pad);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-2xl font-black text-navy">
          Simultaneous Equations: Graph Intersection
        </div>
        <button
          type="button"
          onClick={() => setShowCoords((s) => !s)}
          className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl min-h-[48px]"
        >
          {showCoords ? 'Hide Solution' : 'Show Solution'}
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-md aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox={`0 0 ${width} ${height}`}>
          {/* Axes */}
          <line x1={pad} y1={toY(0)} x2={width - pad + 15} y2={toY(0)} stroke="#0A192F" strokeWidth="2.5" />
          <line x1={toX(0)} y1={height - pad} x2={toX(0)} y2={pad - 15} stroke="#0A192F" strokeWidth="2.5" />

          {/* Line 1: y = 2x - 1 (Blue) */}
          <line x1={toX(-1)} y1={toY(-3)} x2={toX(3.5)} y2={toY(6)} stroke="#2563EB" strokeWidth="4" />
          <text x={toX(3.2)} y={toY(5.2)} fill="#2563EB" fontSize="16" fontWeight="bold">y = 2x - 1</text>

          {/* Line 2: y = -x + 5 (Red) */}
          <line x1={toX(-1)} y1={toY(6)} x2={toX(5)} y2={toY(0)} stroke="#DC2626" strokeWidth="4" />
          <text x={toX(4)} y={toY(1.5)} fill="#DC2626" fontSize="16" fontWeight="bold">y = -x + 5</text>

          {/* Intersection Point (2, 3) */}
          {showCoords && (
            <g>
              <circle cx={toX(2)} cy={toY(3)} r="8" fill="#16A34A" stroke="#FFFFFF" strokeWidth="3" />
              <text x={toX(2) + 12} y={toY(3) - 8} fill="#16A34A" fontSize="20" fontWeight="black">
                (2, 3)
              </text>
            </g>
          )}
        </svg>
      </div>

      {showCoords && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-center text-2xl font-black text-emerald-900">
          Solution: x = 2, y = 3
        </div>
      )}
    </div>
  );
};

// ==================== 4. InequalityNumberLine ====================
export interface InequalityNumberLineProps {
  minVal?: number;
  maxVal?: number;
  leftBound?: number;
  rightBound?: number;
  leftClosed?: boolean;
  rightClosed?: boolean;
}

export const InequalityNumberLine: React.FC<InequalityNumberLineProps> = ({
  minVal = -5,
  maxVal = 5,
  leftBound = -2,
  rightBound = 3,
  leftClosed = false,
  rightClosed = true,
}) => {
  const getX = (val: number) => 50 + ((val - minVal) / (maxVal - minVal)) * 500;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">
        Inequality: -2 &lt; x ≤ 3
      </div>

      <div className="flex justify-center py-4">
        <svg className="w-full max-w-lg" viewBox="0 0 600 120">
          {/* Main Axis */}
          <line x1="30" y1="80" x2="570" y2="80" stroke="#0A192F" strokeWidth="3.5" />

          {/* Ticks */}
          {Array.from({ length: maxVal - minVal + 1 }).map((_, i) => {
            const v = minVal + i;
            const x = getX(v);
            return (
              <g key={v}>
                <line x1={x} y1="72" x2={x} y2="88" stroke="#0A192F" strokeWidth="2" />
                <text x={x} y="110" textAnchor="middle" fill="#0A192F" fontSize="16" fontWeight="bold">
                  {v}
                </text>
              </g>
            );
          })}

          {/* Inequality Segment */}
          <line
            x1={getX(leftBound)}
            y1="45"
            x2={getX(rightBound)}
            y2="45"
            stroke="#2563EB"
            strokeWidth="5"
          />

          {/* Left Circle (open) */}
          <circle
            cx={getX(leftBound)}
            cy="45"
            r="8"
            fill={leftClosed ? '#2563EB' : '#FAF7F2'}
            stroke="#2563EB"
            strokeWidth="3.5"
          />

          {/* Right Circle (closed) */}
          <circle
            cx={getX(rightBound)}
            cy="45"
            r="8"
            fill={rightClosed ? '#2563EB' : '#FAF7F2'}
            stroke="#2563EB"
            strokeWidth="3.5"
          />
        </svg>
      </div>

      <div className="text-center font-bold text-slate-600 text-lg">
        Open circle indicates strict inequality (&lt;), closed circle indicates inclusive (≤).
      </div>
    </div>
  );
};
