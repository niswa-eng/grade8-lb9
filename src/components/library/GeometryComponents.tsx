import React, { useState } from 'react';
import { RotateCcw, Move, RotateCw, Scissors } from 'lucide-react';

// ==================== 1. AnglesTool ====================
export interface AnglesToolProps {
  angleDegrees?: number;
  type?: 'single' | 'parallel' | 'polygon';
  polygonSides?: number;
}

export const AnglesTool: React.FC<AnglesToolProps> = ({
  angleDegrees = 55,
  type = 'single',
  polygonSides = 3,
}) => {
  const [deg, setDeg] = useState(angleDegrees);
  const [showProtractor, setShowProtractor] = useState(true);
  const [protractorRot, setProtractorRot] = useState(0);

  const rad = (deg * Math.PI) / 180;
  const rayLen = 170;
  const endX = 250 + rayLen * Math.cos(-rad);
  const endY = 220 + rayLen * Math.sin(-rad);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-2xl font-black text-navy">
          Angle:{' '}
          <span className="text-indigo-600">
            {deg}° ({deg < 90 ? 'Acute' : deg === 90 ? 'Right angle' : deg < 180 ? 'Obtuse' : 'Reflex'})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowProtractor((p) => !p)}
            className={`px-4 py-2 font-bold rounded-xl border min-h-[48px] ${
              showProtractor
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            {showProtractor ? 'Hide Protractor' : 'Show Protractor'}
          </button>
          <button
            type="button"
            onClick={() => {
              setDeg(angleDegrees);
              setProtractorRot(0);
            }}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <svg
          className="w-full max-w-lg aspect-4/3 bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F] select-none"
          viewBox="0 0 500 320"
        >
          {/* Base ray */}
          <line x1="250" y1="220" x2="440" y2="220" stroke="#0A192F" strokeWidth="4" />
          <polygon points="440,220 425,212 425,228" fill="#0A192F" />

          {/* Angled ray */}
          <line x1="250" y1="220" x2={endX} y2={endY} stroke="#0A192F" strokeWidth="4" />

          {/* Vertex point */}
          <circle cx="250" cy="220" r="6" fill="#0A192F" />

          {/* Angle Arc */}
          <path
            d={`M 310 220 A 60 60 0 0 0 ${250 + 60 * Math.cos(-rad)} ${250 + 60 * Math.sin(-rad) - 30}`}
            fill="none"
            stroke="#2563EB"
            strokeWidth="3.5"
          />
          <text x="315" y="195" fill="#2563EB" fontSize="22" fontWeight="black">
            {deg}°
          </text>

          {/* Translucent Protractor Overlay */}
          {showProtractor && (
            <g
              transform={`rotate(${protractorRot}, 250, 220)`}
              className="cursor-pointer opacity-85"
              onClick={() => setProtractorRot((r) => (r + 15) % 360)}
            >
              <path
                d="M 110 220 A 140 140 0 0 1 390 220 Z"
                fill="rgba(217, 119, 6, 0.15)"
                stroke="#D97706"
                strokeWidth="2.5"
              />
              <circle cx="250" cy="220" r="4" fill="#D97706" />
              {/* Protractor tick marks */}
              {Array.from({ length: 19 }).map((_, i) => {
                const tickDeg = i * 10;
                const tickRad = (tickDeg * Math.PI) / 180;
                const x1 = 250 - 140 * Math.cos(tickRad);
                const y1 = 220 - 140 * Math.sin(tickRad);
                const x2 = 250 - 128 * Math.cos(tickRad);
                const y2 = 220 - 128 * Math.sin(tickRad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#D97706"
                    strokeWidth={i % 3 === 0 ? "2" : "1"}
                  />
                );
              })}
            </g>
          )}
        </svg>
      </div>

      <div className="flex items-center gap-4 px-2">
        <span className="text-xl font-bold text-slate-600">0°</span>
        <input
          type="range"
          min="10"
          max="175"
          value={deg}
          onChange={(e) => setDeg(Number(e.target.value))}
          className="flex-1 h-6 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
        />
        <span className="text-xl font-bold text-slate-600">180°</span>
      </div>
    </div>
  );
};

// ==================== 2. ShapeBuilder ====================
export interface ShapeBuilderProps {
  shapeType?: 'triangle' | 'parallelogram' | 'trapezium' | 'circle';
  dimensions?: { b: number; h: number; a?: number };
}

export const ShapeBuilder: React.FC<ShapeBuilderProps> = ({
  shapeType = 'parallelogram',
  dimensions = { b: 8, h: 5 },
}) => {
  const [cutRearrange, setCutRearrange] = useState(false);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy capitalize">
          {shapeType}: Area = base × height = {dimensions.b} × {dimensions.h} ={' '}
          <span className="text-indigo-600">{dimensions.b * dimensions.h} cm²</span>
        </div>
        <button
          type="button"
          onClick={() => setCutRearrange((c) => !c)}
          className={`flex items-center gap-2 px-4 py-2 font-bold rounded-xl border min-h-[48px] ${
            cutRearrange
              ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
              : 'bg-indigo-50 text-indigo-700 border-indigo-200'
          }`}
        >
          <Scissors className="w-5 h-5" />
          <span>{cutRearrange ? 'Restore' : 'Cut & Rearrange to Rectangle'}</span>
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-lg aspect-4/3 bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 500 280">
          {shapeType === 'parallelogram' && (
            <>
              {/* If cut & rearranged, show rectangle */}
              {cutRearrange ? (
                <g>
                  <rect
                    x="130"
                    y="70"
                    width="240"
                    height="140"
                    fill="rgba(37, 99, 235, 0.2)"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                  />
                  <line x1="210" y1="70" x2="210" y2="210" stroke="#DC2626" strokeWidth="2" strokeDasharray="6 4" />
                </g>
              ) : (
                /* Original parallelogram */
                <g>
                  <polygon
                    points="130,210 210,70 410,70 330,210"
                    fill="rgba(37, 99, 235, 0.2)"
                    stroke="#2563EB"
                    strokeWidth="3.5"
                  />
                  {/* Height line */}
                  <line x1="210" y1="70" x2="210" y2="210" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="6 4" />
                  <rect x="210" y="195" width="15" height="15" fill="none" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="218" y="145" fill="#DC2626" fontSize="18" fontWeight="bold">
                    h = {dimensions.h} cm
                  </text>
                </g>
              )}

              {/* Base label */}
              <text x="250" y="245" textAnchor="middle" fill="#0A192F" fontSize="22" fontWeight="bold">
                base = {dimensions.b} cm
              </text>
            </>
          )}

          {shapeType === 'triangle' && (
            <g>
              <polygon
                points="100,210 250,60 400,210"
                fill="rgba(22, 163, 74, 0.2)"
                stroke="#16A34A"
                strokeWidth="3.5"
              />
              <line x1="250" y1="60" x2="250" y2="210" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="6 4" />
              <text x="258" y="145" fill="#DC2626" fontSize="18" fontWeight="bold">
                h
              </text>
              <text x="250" y="245" textAnchor="middle" fill="#0A192F" fontSize="22" fontWeight="bold">
                base
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

// ==================== 3. TransformationGrid ====================
export interface TransformationGridProps {
  type?: 'reflect' | 'translate' | 'rotate';
}

export const TransformationGrid: React.FC<TransformationGridProps> = ({
  type = 'reflect',
}) => {
  const [transformed, setTransformed] = useState(false);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy capitalize">
          Transformation: {type === 'reflect' ? 'Reflection in line x = 0' : type}
        </div>
        <button
          type="button"
          onClick={() => setTransformed((t) => !t)}
          className={`px-4 py-2 font-bold rounded-xl border min-h-[48px] ${
            transformed
              ? 'bg-amber-100 text-amber-900 border-amber-300'
              : 'bg-indigo-600 text-white border-indigo-700'
          }`}
        >
          {transformed ? 'Reset original' : 'Apply transformation'}
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-md aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 400 400">
          {/* Mirror line (x = 0 / center) */}
          <line x1="200" y1="20" x2="200" y2="380" stroke="#DC2626" strokeWidth="3" strokeDasharray="8 6" />
          <text x="210" y="40" fill="#DC2626" fontSize="16" fontWeight="bold">
            Mirror line
          </text>

          {/* Original Shape (Triangle A) */}
          <polygon
            points="240,140 320,140 240,240"
            fill="rgba(37, 99, 235, 0.3)"
            stroke="#2563EB"
            strokeWidth="3"
          />
          <text x="270" y="180" fill="#2563EB" fontSize="22" fontWeight="black">
            A
          </text>

          {/* Reflected Ghost Shape (Triangle A') */}
          {transformed && (
            <g>
              <polygon
                points="160,140 80,140 160,240"
                fill="rgba(22, 163, 74, 0.4)"
                stroke="#16A34A"
                strokeWidth="3.5"
              />
              <text x="120" y="180" fill="#16A34A" fontSize="22" fontWeight="black">
                A′
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

// ==================== 4. SymmetryTool ====================
export interface SymmetryToolProps {
  orderOfRotation?: number;
}

export const SymmetryTool: React.FC<SymmetryToolProps> = ({
  orderOfRotation = 4,
}) => {
  const [rotAngle, setRotAngle] = useState(0);
  const [matchCount, setMatchCount] = useState(1);

  const rotateStep = () => {
    const next = (rotAngle + 90) % 360;
    setRotAngle(next);
    if (next % (360 / orderOfRotation) === 0) {
      setMatchCount((m) => (next === 0 ? 1 : m + 1));
    }
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Rotational Symmetry: Order {orderOfRotation} (Matches: {matchCount})
        </div>
        <button
          type="button"
          onClick={rotateStep}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 min-h-[48px]"
        >
          <RotateCw className="w-5 h-5" />
          <span>Rotate 90°</span>
        </button>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-sm aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 300 300">
          {/* Ghost outline */}
          <rect
            x="75"
            y="75"
            width="150"
            height="150"
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* Rotating shape */}
          <g transform={`rotate(${rotAngle}, 150, 150)`}>
            <rect
              x="75"
              y="75"
              width="150"
              height="150"
              fill="rgba(37, 99, 235, 0.25)"
              stroke="#2563EB"
              strokeWidth="4"
            />
            {/* Distinct corner marker to see rotation */}
            <circle cx="95" cy="95" r="10" fill="#DC2626" />
          </g>

          {/* Centre point */}
          <circle cx="150" cy="150" r="5" fill="#0A192F" />
        </svg>
      </div>
    </div>
  );
};
