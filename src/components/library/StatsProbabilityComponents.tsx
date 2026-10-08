import React, { useState } from 'react';
import { RotateCcw, Dices, CircleDot } from 'lucide-react';

// ==================== 1. BarChart ====================
export interface BarChartProps {
  title?: string;
  categories?: string[];
  values?: number[];
  color?: string;
  yLabel?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
  title = 'Favourite Sports',
  categories = ['Football', 'Tennis', 'Netball', 'Rugby'],
  values = [12, 8, 15, 6],
  color = '#2563EB',
  yLabel = 'Frequency',
}) => {
  const [revealStage, setRevealStage] = useState(4); // 0: axes, 1: labels, 2: scale, 3: data/bars, 4: title

  const maxVal = Math.max(...values, 16);
  const height = 300;
  const width = 500;
  const pad = 50;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          {revealStage >= 4 ? title : 'Building Chart...'}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setRevealStage((s) => (s >= 4 ? 0 : s + 1))}
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
          >
            Next step
          </button>
          <button
            type="button"
            onClick={() => setRevealStage(4)}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-lg aspect-4/3 bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox={`0 0 ${width} ${height}`}>
          {/* Stage 0: Axes */}
          {revealStage >= 0 && (
            <>
              <line x1={pad} y1={height - pad} x2={width - 20} y2={height - pad} stroke="#0A192F" strokeWidth="3" />
              <line x1={pad} y1={height - pad} x2={pad} y2={20} stroke="#0A192F" strokeWidth="3" />
            </>
          )}

          {/* Stage 1: Scale */}
          {revealStage >= 1 && (
            <>
              {[0, 5, 10, 15, 20].map((t) => {
                const y = height - pad - (t / 20) * (height - 2 * pad);
                return (
                  <g key={t}>
                    <line x1={pad - 6} y1={y} x2={pad} stroke="#0A192F" strokeWidth="2" />
                    <line x1={pad} y1={y} x2={width - 20} y2={y} stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                    <text x={pad - 12} y={y + 5} textAnchor="end" fill="#0A192F" fontSize="14" fontWeight="bold">
                      {t}
                    </text>
                  </g>
                );
              })}
              <text x={pad - 30} y={height / 2} textAnchor="middle" fill="#0A192F" fontSize="16" fontWeight="bold" transform={`rotate(-90 ${pad - 30} ${height / 2})`}>
                {yLabel}
              </text>
            </>
          )}

          {/* Stage 2 & 3: Categories & Bars */}
          {categories.map((cat, idx) => {
            const barWidth = 60;
            const gap = (width - 2 * pad - categories.length * barWidth) / (categories.length + 1);
            const x = pad + gap + idx * (barWidth + gap);
            const barH = (values[idx] / 20) * (height - 2 * pad);
            const y = height - pad - barH;

            return (
              <g key={idx}>
                {revealStage >= 3 && (
                  <>
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barH}
                      fill={color}
                      stroke="#0A192F"
                      strokeWidth="2"
                      rx="4"
                    />
                    <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" fill="#0A192F" fontSize="18" fontWeight="black">
                      {values[idx]}
                    </text>
                  </>
                )}
                {revealStage >= 2 && (
                  <text x={x + barWidth / 2} y={height - pad + 24} textAnchor="middle" fill="#0A192F" fontSize="15" fontWeight="bold">
                    {cat}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// ==================== 2. PieChart ====================
export interface PieChartProps {
  title?: string;
  slices?: { label: string; count: number; color: string }[];
}

export const PieChart: React.FC<PieChartProps> = ({
  title = 'Student Transport (Total 360°)',
  slices = [
    { label: 'Walk (18)', count: 18, color: '#2563EB' },
    { label: 'Bus (9)', count: 9, color: '#16A34A' },
    { label: 'Cycle (6)', count: 6, color: '#D97706' },
    { label: 'Car (3)', count: 3, color: '#7C3AED' },
  ],
}) => {
  const total = slices.reduce((acc, s) => acc + s.count, 0);
  let cumulativeAngle = 0;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">{title}</div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-2">
        <svg className="w-64 h-64 overflow-visible" viewBox="-120 -120 240 240">
          <circle cx="0" cy="0" r="100" fill="#FAF7F2" stroke="#0A192F" strokeWidth="3" />
          {slices.map((slice, i) => {
            const sliceAngle = (slice.count / total) * 360;
            const startRad = (cumulativeAngle - 90) * (Math.PI / 180);
            cumulativeAngle += sliceAngle;
            const endRad = (cumulativeAngle - 90) * (Math.PI / 180);

            const x1 = 100 * Math.cos(startRad);
            const y1 = 100 * Math.sin(startRad);
            const x2 = 100 * Math.cos(endRad);
            const y2 = 100 * Math.sin(endRad);

            const largeArc = sliceAngle > 180 ? 1 : 0;
            const pathD = `M 0 0 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`;

            return (
              <path
                key={i}
                d={pathD}
                fill={slice.color}
                stroke="#0A192F"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        <div className="flex flex-col gap-2">
          {slices.map((slice, i) => {
            const angle = Math.round((slice.count / total) * 360);
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md" style={{ backgroundColor: slice.color }} />
                <span className="text-xl font-bold text-navy">
                  {slice.label} — {angle}°
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ==================== 3. StemAndLeaf ====================
export interface StemAndLeafProps {
  initialData?: number[];
  stemUnit?: number;
}

export const StemAndLeaf: React.FC<StemAndLeafProps> = ({
  initialData = [12, 15, 18, 22, 24, 27, 29, 31, 35, 42],
}) => {
  const [data, setData] = useState(initialData);

  // Group by tens
  const stemsMap: Record<number, number[]> = {};
  for (const n of data) {
    const stem = Math.floor(n / 10);
    const leaf = n % 10;
    if (!stemsMap[stem]) stemsMap[stem] = [];
    stemsMap[stem].push(leaf);
  }

  // Sort leaves
  Object.keys(stemsMap).forEach((st) => {
    stemsMap[Number(st)].sort((a, b) => a - b);
  });

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">Stem-and-Leaf Diagram</div>
        <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-lg font-bold text-amber-900">
          Key: 2 | 4 means 24
        </div>
      </div>

      <div className="max-w-md mx-auto border-2 border-[#0A192F] rounded-2xl overflow-hidden bg-white">
        <div className="grid grid-cols-[80px_1fr] bg-blue-50 border-b-2 border-[#0A192F] text-center font-bold text-xl py-3 text-navy">
          <div className="border-r-2 border-[#0A192F]">Stem</div>
          <div>Leaf</div>
        </div>

        {Object.entries(stemsMap).map(([stem, leaves]) => (
          <div
            key={stem}
            className="grid grid-cols-[80px_1fr] border-b border-slate-200 last:border-b-0 py-3 text-2xl font-black text-navy"
          >
            <div className="border-r-2 border-[#0A192F] text-center text-indigo-700">
              {stem}
            </div>
            <div className="px-6 tracking-widest text-slate-800">
              {leaves.join('   ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== 4. DotPlot ====================
export interface DotPlotProps {
  dataPoints?: number[];
  min?: number;
  max?: number;
}

export const DotPlot: React.FC<DotPlotProps> = ({
  dataPoints = [1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6],
  min = 0,
  max = 7,
}) => {
  const [showStats, setShowStats] = useState(false);

  // Frequency per number
  const counts: Record<number, number> = {};
  for (const n of dataPoints) {
    counts[n] = (counts[n] || 0) + 1;
  }

  const mean = (dataPoints.reduce((a, b) => a + b, 0) / dataPoints.length).toFixed(1);
  const sorted = [...dataPoints].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const mode = 3;
  const range = max - min;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">Dot Plot</div>
        <button
          type="button"
          onClick={() => setShowStats((s) => !s)}
          className={`px-4 py-2 font-bold rounded-xl border min-h-[48px] ${
            showStats
              ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
              : 'bg-indigo-50 text-indigo-700 border-indigo-200'
          }`}
        >
          {showStats ? 'Hide Summary Stats' : 'Show Mean / Median / Mode'}
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-lg aspect-5/3 bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 500 240">
          {/* Axis */}
          <line x1="40" y1="190" x2="460" y2="190" stroke="#0A192F" strokeWidth="3" />

          {/* Numbers & Dots */}
          {Array.from({ length: max - min + 1 }).map((_, i) => {
            const num = min + i;
            const x = 50 + (i / (max - min)) * 400;
            const count = counts[num] || 0;

            return (
              <g key={num}>
                <line x1={x} y1="185" x2={x} y2="195" stroke="#0A192F" strokeWidth="2" />
                <text x={x} y="220" textAnchor="middle" fill="#0A192F" fontSize="18" fontWeight="bold">
                  {num}
                </text>
                {Array.from({ length: count }).map((_, dIdx) => (
                  <circle
                    key={dIdx}
                    cx={x}
                    cy={175 - dIdx * 20}
                    r="8"
                    fill="#2563EB"
                    stroke="#0A192F"
                    strokeWidth="1.5"
                  />
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {showStats && (
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
            <span className="text-slate-500 font-bold block">Mean</span>
            <span className="text-2xl font-black text-navy">{mean}</span>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <span className="text-slate-500 font-bold block">Median</span>
            <span className="text-2xl font-black text-navy">{median}</span>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
            <span className="text-slate-500 font-bold block">Mode</span>
            <span className="text-2xl font-black text-navy">{mode}</span>
          </div>
          <div className="p-3 bg-purple-50 rounded-xl border border-purple-200">
            <span className="text-slate-500 font-bold block">Range</span>
            <span className="text-2xl font-black text-navy">{range}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// ==================== 5. Spinner ====================
export interface SpinnerProps {
  sectors?: { label: string; color: string; prob: number }[];
}

export const Spinner: React.FC<SpinnerProps> = ({
  sectors = [
    { label: 'Red', color: '#DC2626', prob: 0.5 },
    { label: 'Blue', color: '#2563EB', prob: 0.25 },
    { label: 'Green', color: '#16A34A', prob: 0.25 },
  ],
}) => {
  const [spinDeg, setSpinDeg] = useState(0);
  const [spinHistory, setSpinHistory] = useState<Record<string, number>>({
    Red: 0,
    Blue: 0,
    Green: 0,
  });

  const handleSpin = () => {
    const randomTurns = 360 * 3 + Math.floor(Math.random() * 360);
    const newDeg = spinDeg + randomTurns;
    setSpinDeg(newDeg);

    // Pick outcome
    const rand = Math.random();
    const outcome = rand < 0.5 ? 'Red' : rand < 0.75 ? 'Blue' : 'Green';
    setTimeout(() => {
      setSpinHistory((prev) => ({
        ...prev,
        [outcome]: (prev[outcome] || 0) + 1,
      }));
    }, 700);
  };

  const totalSpins = Object.values(spinHistory).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">Probability Spinner</div>
        <button
          type="button"
          onClick={handleSpin}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xl rounded-2xl min-h-[56px] shadow-md"
        >
          <CircleDot className="w-6 h-6" />
          <span>Spin</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-6 py-2">
        <div className="relative w-56 h-56 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="-100 -100 200 200">
            {/* Sector 1: Red (180 deg) */}
            <path d="M 0 0 L 100 0 A 100 100 0 0 1 -100 0 Z" fill="#DC2626" />
            <text x="0" y="50" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
              Red (1/2)
            </text>

            {/* Sector 2: Blue (90 deg) */}
            <path d="M 0 0 L -100 0 A 100 100 0 0 1 0 -100 Z" fill="#2563EB" />
            <text x="-40" y="-40" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">
              Blue
            </text>

            {/* Sector 3: Green (90 deg) */}
            <path d="M 0 0 L 0 -100 A 100 100 0 0 1 100 0 Z" fill="#16A34A" />
            <text x="40" y="-40" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">
              Green
            </text>

            <circle cx="0" cy="0" r="100" fill="none" stroke="#0A192F" strokeWidth="3" />
          </svg>

          {/* Rotating Spinner Needle */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 ease-out"
            style={{ transform: `rotate(${spinDeg}deg)` }}
          >
            <div className="w-3 h-24 bg-[#0A192F] rounded-full shadow-lg -translate-y-8 relative">
              <div className="w-0 h-0 border-x-8 border-x-transparent border-b-14 border-b-[#0A192F] absolute -top-3 -left-1.5" />
            </div>
            <div className="w-7 h-7 bg-amber-400 rounded-full border-3 border-[#0A192F] absolute" />
          </div>
        </div>

        {/* Running Frequency Table */}
        <div className="flex-1 max-w-sm space-y-2">
          <div className="font-bold text-navy text-lg">
            Total Spins: {totalSpins}
          </div>
          {Object.entries(spinHistory).map(([col, cnt]) => {
            const relFreq = totalSpins > 0 ? (cnt / totalSpins).toFixed(2) : '0.00';
            return (
              <div
                key={col}
                className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <span className="font-bold text-xl text-navy">{col}</span>
                <span className="text-xl font-black text-indigo-700">
                  {cnt} ({relFreq})
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ==================== 6. DiceRoller ====================
export const DiceRoller: React.FC = () => {
  const [die1, setDie1] = useState(3);
  const [die2, setDie2] = useState(4);
  const [history, setHistory] = useState<number[]>([7]);

  const roll = () => {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    setDie1(d1);
    setDie2(d2);
    setHistory((prev) => [d1 + d2, ...prev.slice(0, 7)]);
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Two Dice Sum: <span className="text-indigo-600">{die1 + die2}</span>
        </div>
        <button
          type="button"
          onClick={roll}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xl rounded-2xl min-h-[56px] shadow-md"
        >
          <Dices className="w-6 h-6" />
          <span>Roll</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-8 py-4">
        {/* Die 1 */}
        <div className="w-24 h-24 bg-white border-3 border-[#0A192F] rounded-2xl shadow-lg flex items-center justify-center text-5xl font-black text-navy">
          {die1}
        </div>
        <span className="text-4xl font-black text-slate-400">+</span>
        {/* Die 2 */}
        <div className="w-24 h-24 bg-white border-3 border-[#0A192F] rounded-2xl shadow-lg flex items-center justify-center text-5xl font-black text-navy">
          {die2}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-lg font-bold text-slate-600">
        Recent totals: {history.join(', ')}
      </div>
    </div>
  );
};

// ==================== 7. ProbabilityScale ====================
export interface ProbabilityScaleProps {
  markers?: { label: string; value: number; color?: string }[];
}

export const ProbabilityScale: React.FC<ProbabilityScaleProps> = ({
  markers = [
    { label: 'Impossible', value: 0 },
    { label: 'Unlikely', value: 0.25 },
    { label: 'Evens', value: 0.5 },
    { label: 'Likely', value: 0.75 },
    { label: 'Certain', value: 1.0 },
  ],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-6">
      <div className="text-2xl font-black text-navy text-center">
        Probability Scale (0 to 1)
      </div>

      <div className="relative py-8 select-none">
        {/* Main Line */}
        <div className="w-full h-2 bg-[#0A192F] rounded-full" />

        {/* Scale Points */}
        <div className="absolute inset-x-0 top-6 flex justify-between">
          {markers.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow-md mb-2" />
              <span className="text-xl font-black text-navy">{m.label}</span>
              <span className="text-base font-bold text-slate-500">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
