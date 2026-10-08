import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

// ==================== 1. CoordinateGrid ====================
export interface CoordinateGridProps {
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  initialM?: number;
  initialC?: number;
  points?: { x: number; y: number; label?: string }[];
  showLineSliders?: boolean;
}

export const CoordinateGrid: React.FC<CoordinateGridProps> = ({
  xMin = -5,
  xMax = 5,
  yMin = -5,
  yMax = 5,
  initialM = 2,
  initialC = 1,
  points = [],
  showLineSliders = true,
}) => {
  const [m, setM] = useState(initialM);
  const [c, setC] = useState(initialC);

  const width = 500;
  const height = 500;
  const pad = 40;

  const toSvgX = (x: number) => {
    return pad + ((x - xMin) / (xMax - xMin)) * (width - 2 * pad);
  };

  const toSvgY = (y: number) => {
    return height - pad - ((y - yMin) / (yMax - yMin)) * (height - 2 * pad);
  };

  const originX = toSvgX(0);
  const originY = toSvgY(0);

  // Line end points for y = mx + c
  const lineY1 = m * xMin + c;
  const lineY2 = m * xMax + c;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-2xl font-black text-navy">
          Line equation:{' '}
          <span className="text-indigo-600">
            y = {m !== 0 ? `${m === 1 ? '' : m === -1 ? '-' : m}x ` : ''}
            {c > 0 ? (m !== 0 ? `+ ${c}` : `${c}`) : c < 0 ? `- ${Math.abs(c)}` : m === 0 ? '0' : ''}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setM(initialM);
            setC(initialC);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="flex justify-center">
        <svg
          className="w-full max-w-md aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F] shadow-inner select-none"
          viewBox={`0 0 ${width} ${height}`}
        >
          {/* Light Grid Lines */}
          {Array.from({ length: xMax - xMin + 1 }).map((_, i) => {
            const val = xMin + i;
            const x = toSvgX(val);
            return (
              <line
                key={`gx_${val}`}
                x1={x}
                y1={pad}
                x2={x}
                y2={height - pad}
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
            );
          })}
          {Array.from({ length: yMax - yMin + 1 }).map((_, i) => {
            const val = yMin + i;
            const y = toSvgY(val);
            return (
              <line
                key={`gy_${val}`}
                x1={pad}
                y1={y}
                x2={width - pad}
                y2={y}
                stroke="#E2E8F0"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Axes */}
          <line
            x1={pad - 10}
            y1={originY}
            x2={width - pad + 15}
            y2={originY}
            stroke="#0A192F"
            strokeWidth="3"
          />
          <line
            x1={originX}
            y1={height - pad + 10}
            x2={originX}
            y2={pad - 15}
            stroke="#0A192F"
            strokeWidth="3"
          />

          {/* Axis Labels */}
          <text x={width - pad + 20} y={originY + 6} fill="#0A192F" fontSize="20" fontWeight="bold">
            x
          </text>
          <text x={originX - 6} y={pad - 22} fill="#0A192F" fontSize="20" fontWeight="bold">
            y
          </text>

          {/* Ticks & Numbers */}
          {Array.from({ length: xMax - xMin + 1 }).map((_, i) => {
            const val = xMin + i;
            if (val === 0) return null;
            const x = toSvgX(val);
            return (
              <g key={`tx_${val}`}>
                <line x1={x} y1={originY - 5} x2={x} y2={originY + 5} stroke="#0A192F" strokeWidth="2" />
                <text x={x} y={originY + 22} textAnchor="middle" fill="#0A192F" fontSize="14" fontWeight="bold">
                  {val}
                </text>
              </g>
            );
          })}
          {Array.from({ length: yMax - yMin + 1 }).map((_, i) => {
            const val = yMin + i;
            if (val === 0) return null;
            const y = toSvgY(val);
            return (
              <g key={`ty_${val}`}>
                <line x1={originX - 5} y1={y} x2={originX + 5} stroke="#0A192F" strokeWidth="2" />
                <text x={originX - 14} y={y + 5} textAnchor="end" fill="#0A192F" fontSize="14" fontWeight="bold">
                  {val}
                </text>
              </g>
            );
          })}

          {/* The line */}
          <line
            x1={toSvgX(xMin)}
            y1={toSvgY(lineY1)}
            x2={toSvgX(xMax)}
            y2={toSvgY(lineY2)}
            stroke="#2563EB"
            strokeWidth="4"
          />

          {/* Static plotted points */}
          {points.map((p, idx) => {
            const px = toSvgX(p.x);
            const py = toSvgY(p.y);
            return (
              <g key={idx}>
                <circle cx={px} cy={py} r="6" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                {p.label && (
                  <text x={px + 8} y={py - 8} fill="#DC2626" fontSize="16" fontWeight="bold">
                    {p.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Sliders for m and c */}
      {showLineSliders && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 space-y-2">
            <div className="flex justify-between font-bold text-navy">
              <span>Gradient (m)</span>
              <span className="text-xl text-indigo-700">{m}</span>
            </div>
            <input
              type="range"
              min="-4"
              max="4"
              step="0.5"
              value={m}
              onChange={(e) => setM(Number(e.target.value))}
              className="w-full h-6 accent-indigo-600 cursor-pointer"
            />
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
            <div className="flex justify-between font-bold text-navy">
              <span>y-intercept (c)</span>
              <span className="text-xl text-amber-800">{c}</span>
            </div>
            <input
              type="range"
              min="-4"
              max="4"
              step="1"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full h-6 accent-amber-600 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// ==================== 2. TimeSeriesGraph ====================
export interface TimeSeriesGraphProps {
  title?: string;
  xLabel?: string;
  yLabel?: string;
  data?: { time: string; value: number }[];
}

export const TimeSeriesGraph: React.FC<TimeSeriesGraphProps> = ({
  title = 'Temperature over 5 Days',
  xLabel = 'Day',
  yLabel = 'Temperature (°C)',
  data = [
    { time: 'Mon', value: 14 },
    { time: 'Tue', value: 16 },
    { time: 'Wed', value: 13 },
    { time: 'Thu', value: 18 },
    { time: 'Fri', value: 20 },
  ],
}) => {
  const maxVal = 25;
  const minVal = 10;
  const height = 300;
  const width = 500;
  const pad = 50;

  const getSvgX = (index: number) => {
    return pad + (index / (data.length - 1)) * (width - 2 * pad);
  };

  const getSvgY = (val: number) => {
    return height - pad - ((val - minVal) / (maxVal - minVal)) * (height - 2 * pad);
  };

  const pathD = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getSvgX(i)} ${getSvgY(d.value)}`)
    .join(' ');

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">{title}</div>
      <div className="flex justify-center">
        <svg className="w-full max-w-lg aspect-4/3 bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox={`0 0 ${width} ${height}`}>
          {/* Axes */}
          <line x1={pad} y1={height - pad} x2={width - pad + 20} y2={height - pad} stroke="#0A192F" strokeWidth="3" />
          <line x1={pad} y1={height - pad} x2={pad} y2={pad - 20} stroke="#0A192F" strokeWidth="3" />

          {/* Labels */}
          <text x={width / 2} y={height - 10} textAnchor="middle" fill="#0A192F" fontSize="18" fontWeight="bold">
            {xLabel}
          </text>
          <text x={pad - 30} y={height / 2} textAnchor="middle" fill="#0A192F" fontSize="18" fontWeight="bold" transform={`rotate(-90 ${pad - 30} ${height / 2})`}>
            {yLabel}
          </text>

          {/* Path */}
          <path d={pathD} fill="none" stroke="#2563EB" strokeWidth="4" />

          {/* Points */}
          {data.map((d, i) => {
            const px = getSvgX(i);
            const py = getSvgY(d.value);
            return (
              <g key={i}>
                <circle cx={px} cy={py} r="6" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                <text x={px} y={py - 12} textAnchor="middle" fill="#0A192F" fontSize="16" fontWeight="bold">
                  {d.value}
                </text>
                <text x={px} y={height - pad + 24} textAnchor="middle" fill="#0A192F" fontSize="16" fontWeight="bold">
                  {d.time}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// ==================== 3. ScatterGraph ====================
export interface ScatterGraphProps {
  title?: string;
  points?: { x: number; y: number }[];
  showLineOfBestFit?: boolean;
}

export const ScatterGraph: React.FC<ScatterGraphProps> = ({
  title = 'Maths vs Science Scores',
  points = [
    { x: 30, y: 35 },
    { x: 45, y: 50 },
    { x: 55, y: 52 },
    { x: 60, y: 68 },
    { x: 70, y: 72 },
    { x: 85, y: 88 },
  ],
}) => {
  const [showLine, setShowLine] = useState(false);

  const width = 450;
  const height = 450;
  const pad = 45;

  const toX = (val: number) => pad + (val / 100) * (width - 2 * pad);
  const toY = (val: number) => height - pad - (val / 100) * (height - 2 * pad);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">{title}</div>
        <button
          type="button"
          onClick={() => setShowLine((v) => !v)}
          className={`px-4 py-2 font-bold rounded-xl border min-h-[48px] ${
            showLine
              ? 'bg-indigo-600 text-white border-indigo-700'
              : 'bg-indigo-50 text-indigo-700 border-indigo-200'
          }`}
        >
          {showLine ? 'Hide Line of Best Fit' : 'Show Line of Best Fit'}
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-md aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox={`0 0 ${width} ${height}`}>
          {/* Axes */}
          <line x1={pad} y1={height - pad} x2={width - pad + 15} y2={height - pad} stroke="#0A192F" strokeWidth="3" />
          <line x1={pad} y1={height - pad} x2={pad} y2={pad - 15} stroke="#0A192F" strokeWidth="3" />

          {/* Points */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={toX(p.x)}
              cy={toY(p.y)}
              r="6"
              fill="#2563EB"
              stroke="#0A192F"
              strokeWidth="1.5"
            />
          ))}

          {/* Best fit line */}
          {showLine && (
            <line
              x1={toX(20)}
              y1={toY(25)}
              x2={toX(90)}
              y2={toY(92)}
              stroke="#DC2626"
              strokeWidth="3.5"
              strokeDasharray="6 4"
            />
          )}
        </svg>
      </div>
    </div>
  );
};
