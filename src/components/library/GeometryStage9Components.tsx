import React, { useState } from 'react';
import { RotateCcw, Compass, Scissors } from 'lucide-react';

// ==================== 1. PythagorasTool ====================
export interface PythagorasToolProps {
  initialA?: number;
  initialB?: number;
}

export const PythagorasTool: React.FC<PythagorasToolProps> = ({
  initialA = 3,
  initialB = 4,
}) => {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);

  const c2 = a * a + b * b;
  const c = Math.sqrt(c2);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Pythagoras’ Theorem: a² + b² = c²
        </div>
        <button
          type="button"
          onClick={() => {
            setA(initialA);
            setB(initialB);
          }}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 bg-blue-50/40 border-2 border-blue-200 rounded-2xl text-center space-y-2">
        <div className="text-3xl font-black text-navy">
          {a}² + {b}² = {a * a} + {b * b} = <span className="text-indigo-700">{c2}</span>
        </div>
        <div className="text-4xl font-black text-emerald-700">
          Hypotenuse c = √{c2} = {Number.isInteger(c) ? c : c.toFixed(2)} cm
        </div>
      </div>

      <div className="flex justify-center py-2">
        <svg className="w-full max-w-sm aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 300 300">
          {/* Right-angled triangle */}
          <polygon
            points="70,230 230,230 70,110"
            fill="rgba(37, 99, 235, 0.2)"
            stroke="#2563EB"
            strokeWidth="3.5"
          />
          {/* Right-angle square */}
          <rect x="70" y="210" width="20" height="20" fill="none" stroke="#2563EB" strokeWidth="2" />

          {/* Labels */}
          <text x="150" y="255" textAnchor="middle" fill="#0A192F" fontSize="18" fontWeight="bold">
            a = {a} cm
          </text>
          <text x="45" y="170" textAnchor="middle" fill="#0A192F" fontSize="18" fontWeight="bold">
            b = {b} cm
          </text>
          <text x="165" y="160" textAnchor="middle" fill="#16A34A" fontSize="20" fontWeight="black">
            c = {Number.isInteger(c) ? c : c.toFixed(2)}
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <span className="font-bold text-navy block">Side a: {a}</span>
          <input
            type="range"
            min="2"
            max="12"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full h-6 accent-indigo-600"
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold text-navy block">Side b: {b}</span>
          <input
            type="range"
            min="2"
            max="12"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full h-6 accent-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

// ==================== 2. CircleTool ====================
export interface CircleToolProps {
  initialRadius?: number;
}

export const CircleTool: React.FC<CircleToolProps> = ({ initialRadius = 5 }) => {
  const [r, setR] = useState(initialRadius);

  const circ = 2 * Math.PI * r;
  const area = Math.PI * r * r;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Circle: Radius r = {r} cm
        </div>
        <button
          type="button"
          onClick={() => setR(initialRadius)}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-2xl space-y-1">
          <span className="text-slate-500 font-bold block text-lg">Circumference C = 2πr = πd</span>
          <span className="text-3xl font-black text-indigo-700">{circ.toFixed(2)} cm</span>
        </div>

        <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl space-y-1">
          <span className="text-slate-500 font-bold block text-lg">Area A = πr²</span>
          <span className="text-3xl font-black text-emerald-700">{area.toFixed(2)} cm²</span>
        </div>
      </div>

      <div className="flex justify-center py-2">
        <svg className="w-64 h-64 overflow-visible" viewBox="-120 -120 240 240">
          <circle cx="0" cy="0" r="100" fill="rgba(37, 99, 235, 0.15)" stroke="#0A192F" strokeWidth="3" />
          {/* Radius line */}
          <line x1="0" y1="0" x2="100" y2="0" stroke="#DC2626" strokeWidth="3" />
          <circle cx="0" cy="0" r="4" fill="#0A192F" />
          <text x="50" y="-10" textAnchor="middle" fill="#DC2626" fontSize="18" fontWeight="bold">
            r = {r}
          </text>
        </svg>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between font-bold text-navy">
          <span>Radius: {r} cm</span>
        </div>
        <input
          type="range"
          min="1"
          max="15"
          value={r}
          onChange={(e) => setR(Number(e.target.value))}
          className="w-full h-6 accent-indigo-600"
        />
      </div>
    </div>
  );
};

// ==================== 3. BearingsTool ====================
export const BearingsTool: React.FC = () => {
  const [bearing, setBearing] = useState(65);

  const formattedBearing = bearing.toString().padStart(3, '0');
  const backBearing = ((bearing + 180) % 360).toString().padStart(3, '0');
  const rad = ((bearing - 90) * Math.PI) / 180;
  const lineX = 150 + 110 * Math.cos(rad);
  const lineY = 150 + 110 * Math.sin(rad);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Three-Figure Bearing:{' '}
          <span className="text-indigo-600 font-black">{formattedBearing}°</span>
        </div>
        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl font-bold text-amber-900 text-lg">
          Back Bearing: {backBearing}°
        </div>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-sm aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 300 300">
          {/* Compass circle */}
          <circle cx="150" cy="150" r="110" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

          {/* North line */}
          <line x1="150" y1="150" x2="150" y2="25" stroke="#0A192F" strokeWidth="3.5" />
          <polygon points="150,15 143,30 157,30" fill="#0A192F" />
          <text x="150" y="10" textAnchor="middle" fill="#0A192F" fontSize="18" fontWeight="black">N</text>

          {/* Bearing ray */}
          <line x1="150" y1="150" x2={lineX} y2={lineY} stroke="#2563EB" strokeWidth="4" />
          <circle cx="150" cy="150" r="5" fill="#0A192F" />

          {/* Clockwise arc from North */}
          <path
            d={`M 150 100 A 50 50 0 ${bearing > 180 ? 1 : 0} 1 ${150 + 50 * Math.sin((bearing * Math.PI) / 180)} ${150 - 50 * Math.cos((bearing * Math.PI) / 180)}`}
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between font-bold text-navy">
          <span>Bearing angle (Clockwise from North)</span>
          <span className="text-xl text-indigo-700">{formattedBearing}°</span>
        </div>
        <input
          type="range"
          min="0"
          max="359"
          value={bearing}
          onChange={(e) => setBearing(Number(e.target.value))}
          className="w-full h-6 accent-indigo-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

// ==================== 4. ConstructionTool ====================
export const ConstructionTool: React.FC = () => {
  const [step, setStep] = useState(2); // 0: baseline, 1: arcs, 2: 60° line

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Ruler &amp; Compass Construction: 60° Angle
        </div>
        <button
          type="button"
          onClick={() => setStep((s) => (s >= 2 ? 0 : s + 1))}
          className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
        >
          Next step
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-md aspect-4/3 bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 400 300">
          {/* Baseline */}
          <line x1="80" y1="230" x2="340" y2="230" stroke="#0A192F" strokeWidth="3.5" />
          <circle cx="100" cy="230" r="4" fill="#0A192F" />
          <text x="90" y="255" fill="#0A192F" fontSize="16" fontWeight="bold">A</text>

          {/* Arcs */}
          {step >= 1 && (
            <>
              {/* Arc from A */}
              <path d="M 210 230 A 120 120 0 0 0 160 126" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
              {/* Arc from baseline intersection */}
              <path d="M 140 110 A 120 120 0 0 1 180 150" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
              {/* Intersection point */}
              <circle cx="160" cy="126" r="4" fill="#DC2626" />
            </>
          )}

          {/* 60 deg Ray */}
          {step >= 2 && (
            <>
              <line x1="100" y1="230" x2="200" y2="57" stroke="#2563EB" strokeWidth="3.5" />
              <text x="140" y="215" fill="#2563EB" fontSize="18" fontWeight="black">60°</text>
            </>
          )}
        </svg>
      </div>

      <div className="text-center font-bold text-slate-600 text-lg">
        {step === 0 && 'Draw a straight baseline and mark vertex A.'}
        {step === 1 && 'Using compass with fixed radius, draw intersecting arcs from vertex A and baseline.'}
        {step === 2 && 'Draw line through the arc intersection to create an exact 60° angle.'}
      </div>
    </div>
  );
};

// ==================== 5. MidpointGrid ====================
export const MidpointGrid: React.FC = () => {
  const p1 = { x: 1, y: 2 };
  const p2 = { x: 5, y: 6 };
  const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">
        Midpoint of a Line Segment
      </div>

      <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl text-center space-y-1">
        <span className="text-slate-600 font-bold block text-lg">
          M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2) = (({p1.x} + {p2.x}) / 2, ({p1.y} + {p2.y}) / 2)
        </span>
        <span className="text-3xl font-black text-emerald-800">
          Midpoint M = ({mid.x}, {mid.y})
        </span>
      </div>
    </div>
  );
};
