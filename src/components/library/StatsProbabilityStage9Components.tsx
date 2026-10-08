import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

// ==================== 1. QuadraticGraph ====================
export interface QuadraticGraphProps {
  initialA?: number; // y = x² + a
}

export const QuadraticGraph: React.FC<QuadraticGraphProps> = ({ initialA = -4 }) => {
  const [a, setA] = useState(initialA);

  const xVals = [-3, -2, -1, 0, 1, 2, 3];
  const table = xVals.map((x) => ({ x, y: x * x + a }));

  const width = 450;
  const height = 450;
  const pad = 45;
  const toX = (x: number) => pad + ((x + 4) / 8) * (width - 2 * pad);
  const toY = (y: number) => height - pad - ((y + 6) / 16) * (height - 2 * pad);

  // Parabolic SVG path
  const curvePoints: string[] = [];
  for (let x = -3.5; x <= 3.5; x += 0.2) {
    const y = x * x + a;
    curvePoints.push(`${toX(x)},${toY(y)}`);
  }

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Quadratic Graph: <span className="text-indigo-600">y = x² {a >= 0 ? `+ ${a}` : `- ${Math.abs(a)}`}</span>
        </div>
        <button
          type="button"
          onClick={() => setA(initialA)}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-md aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox={`0 0 ${width} ${height}`}>
          {/* Axes */}
          <line x1={pad} y1={toY(0)} x2={width - pad + 15} y2={toY(0)} stroke="#0A192F" strokeWidth="2.5" />
          <line x1={toX(0)} y1={height - pad} x2={toX(0)} y2={pad - 15} stroke="#0A192F" strokeWidth="2.5" />

          {/* Parabola */}
          <polyline points={curvePoints.join(' ')} fill="none" stroke="#2563EB" strokeWidth="4" />

          {/* Points from table */}
          {table.map((pt, i) => (
            <circle
              key={i}
              cx={toX(pt.x)}
              cy={toY(pt.y)}
              r="6"
              fill="#DC2626"
              stroke="#0A192F"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* Table of values */}
      <div className="overflow-x-auto border-2 border-[#0A192F] rounded-xl bg-white">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-blue-50 border-b-2 border-[#0A192F] text-lg font-bold">
              <th className="p-2 border-r border-[#0A192F]">x</th>
              {table.map((t) => (
                <th key={t.x} className="p-2 border-r border-slate-200 last:border-r-0">
                  {t.x}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="text-xl font-black text-indigo-700">
              <td className="p-2 border-r border-[#0A192F] bg-blue-50">y</td>
              {table.map((t) => (
                <td key={t.x} className="p-2 border-r border-slate-200 last:border-r-0">
                  {t.y}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ==================== 2. BackToBackStemLeaf ====================
export const BackToBackStemLeaf: React.FC = () => {
  const classA: Record<number, number[]> = {
    1: [2, 5],
    2: [1, 4, 8],
    3: [0, 3, 7],
  };

  const classB: Record<number, number[]> = {
    1: [4, 8, 9],
    2: [2, 6],
    3: [1, 5, 8],
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">Back-to-Back Stem-and-Leaf</div>
        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-lg font-bold text-amber-900">
          Key: 5 | 1 | 4 means 15 for Class A and 14 for Class B
        </div>
      </div>

      <div className="max-w-lg mx-auto border-2 border-[#0A192F] rounded-2xl overflow-hidden bg-white">
        <div className="grid grid-cols-[1fr_80px_1fr] bg-blue-50 border-b-2 border-[#0A192F] text-center font-bold text-xl py-3 text-navy">
          <div className="border-r-2 border-[#0A192F]">Class A Leaf</div>
          <div className="border-r-2 border-[#0A192F]">Stem</div>
          <div>Class B Leaf</div>
        </div>

        {[1, 2, 3].map((stem) => (
          <div
            key={stem}
            className="grid grid-cols-[1fr_80px_1fr] border-b border-slate-200 last:border-b-0 py-3 text-2xl font-black text-navy text-center"
          >
            <div className="border-r-2 border-[#0A192F] text-indigo-700 tracking-widest">
              {[...(classA[stem] || [])].reverse().join('   ')}
            </div>
            <div className="border-r-2 border-[#0A192F] bg-slate-50">{stem}</div>
            <div className="text-emerald-700 tracking-widest">
              {(classB[stem] || []).join('   ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== 3. ProbabilityTree ====================
export const ProbabilityTree: React.FC = () => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">
        Probability Tree: Two Independent Events
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-lg aspect-5/3 bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 500 280">
          {/* First event branches */}
          <line x1="60" y1="140" x2="200" y2="70" stroke="#0A192F" strokeWidth="3" />
          <line x1="60" y1="140" x2="200" y2="210" stroke="#0A192F" strokeWidth="3" />
          <text x="110" y="90" fill="#2563EB" fontSize="18" fontWeight="bold">0.6 (H)</text>
          <text x="110" y="195" fill="#2563EB" fontSize="18" fontWeight="bold">0.4 (T)</text>

          {/* Second event branches from top */}
          <line x1="200" y1="70" x2="340" y2="35" stroke="#0A192F" strokeWidth="3" />
          <line x1="200" y1="70" x2="340" y2="105" stroke="#0A192F" strokeWidth="3" />
          <text x="260" y="45" fill="#16A34A" fontSize="16" fontWeight="bold">0.6</text>
          <text x="260" y="100" fill="#16A34A" fontSize="16" fontWeight="bold">0.4</text>
          <text x="355" y="40" fill="#0A192F" fontSize="18" fontWeight="black">H, H: 0.36</text>
          <text x="355" y="110" fill="#0A192F" fontSize="18" fontWeight="black">H, T: 0.24</text>

          {/* Second event branches from bottom */}
          <line x1="200" y1="210" x2="340" y2="175" stroke="#0A192F" strokeWidth="3" />
          <line x1="200" y1="210" x2="340" y2="245" stroke="#0A192F" strokeWidth="3" />
          <text x="260" y="185" fill="#16A34A" fontSize="16" fontWeight="bold">0.6</text>
          <text x="260" y="240" fill="#16A34A" fontSize="16" fontWeight="bold">0.4</text>
          <text x="355" y="180" fill="#0A192F" fontSize="18" fontWeight="black">T, H: 0.24</text>
          <text x="355" y="250" fill="#0A192F" fontSize="18" fontWeight="black">T, T: 0.16</text>
        </svg>
      </div>

      <div className="text-center font-bold text-slate-600 text-lg">
        Multiply along the branches: P(H, H) = 0.6 × 0.6 = 0.36. Sum of all outcomes = 1.0.
      </div>
    </div>
  );
};

// ==================== 4. ConversionGraph ====================
export const ConversionGraph: React.FC = () => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">
        Conversion Graph: Miles to Kilometres (5 miles ≈ 8 km)
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-md aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 400 400">
          {/* Axes */}
          <line x1="40" y1="360" x2="380" y2="360" stroke="#0A192F" strokeWidth="3" />
          <line x1="40" y1="360" x2="40" y2="20" stroke="#0A192F" strokeWidth="3" />
          <text x="350" y="385" fill="#0A192F" fontSize="16" fontWeight="bold">Miles</text>
          <text x="20" y="30" fill="#0A192F" fontSize="16" fontWeight="bold">km</text>

          {/* Conversion Line (0,0) to (50 miles, 80 km) */}
          <line x1="40" y1="360" x2="360" y2="80" stroke="#2563EB" strokeWidth="4" />

          {/* Guide at 25 miles -> 40 km */}
          <line x1="200" y1="360" x2="200" y2="220" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="40" y1="220" x2="200" y2="220" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="200" cy="220" r="5" fill="#DC2626" />
        </svg>
      </div>
    </div>
  );
};
