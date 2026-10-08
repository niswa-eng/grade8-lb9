import React, { useState } from 'react';
import { RotateCcw, ChevronRight } from 'lucide-react';

// ==================== 1. NumberLine ====================
export interface NumberLineProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  jumps?: { from: number; to: number; label?: string }[];
  inequality?: { point: number; type: 'gt' | 'gte' | 'lt' | 'lte' };
  showDraggable?: boolean;
}

export const NumberLine: React.FC<NumberLineProps> = ({
  min = -5,
  max = 5,
  step = 1,
  initialValue = 0,
  jumps = [],
  inequality,
  showDraggable = true,
}) => {
  const [val, setVal] = useState(initialValue);
  const [visibleJumps, setVisibleJumps] = useState<number>(jumps.length);

  const totalRange = max - min;
  const getXPercent = (num: number) => {
    return ((num - min) / totalRange) * 80 + 10; // 10% to 90%
  };

  const ticks: number[] = [];
  for (let i = min; i <= max; i += step) {
    ticks.push(i);
  }

  const handleReset = () => {
    setVal(initialValue);
    setVisibleJumps(jumps.length);
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-slate-700">
          Value: <span className="text-navy text-2xl font-extrabold">{val}</span>
        </div>
        <div className="flex items-center gap-3">
          {jumps.length > 0 && (
            <button
              type="button"
              onClick={() =>
                setVisibleJumps((prev) => (prev >= jumps.length ? 1 : prev + 1))
              }
              className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
            >
              Next step
            </button>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="relative h-44 select-none flex items-center">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 200">
          {/* Main Axis */}
          <line
            x1="60"
            y1="130"
            x2="940"
            y2="130"
            stroke="#0A192F"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Arrow Heads */}
          <polygon points="50,130 65,122 65,138" fill="#0A192F" />
          <polygon points="950,130 935,122 935,138" fill="#0A192F" />

          {/* Ticks and Labels */}
          {ticks.map((t) => {
            const x = (getXPercent(t) / 100) * 1000;
            const isZero = t === 0;
            return (
              <g key={t}>
                <line
                  x1={x}
                  y1={isZero ? 112 : 120}
                  x2={x}
                  y2={isZero ? 148 : 140}
                  stroke="#0A192F"
                  strokeWidth={isZero ? "4" : "3"}
                />
                <text
                  x={x}
                  y="175"
                  textAnchor="middle"
                  fill="#0A192F"
                  fontSize="24"
                  fontWeight="bold"
                >
                  {t}
                </text>
              </g>
            );
          })}

          {/* Jumps */}
          {jumps.slice(0, visibleJumps).map((j, idx) => {
            const x1 = (getXPercent(j.from) / 100) * 1000;
            const x2 = (getXPercent(j.to) / 100) * 1000;
            const midX = (x1 + x2) / 2;
            const height = 65;
            const pathD = `M ${x1} 125 Q ${midX} ${125 - height} ${x2} 125`;
            return (
              <g key={idx}>
                <path
                  d={pathD}
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="4"
                  strokeDasharray="6 4"
                />
                {/* Arrow at destination */}
                <circle cx={x2} cy="125" r="5" fill="#2563EB" />
                {j.label && (
                  <text
                    x={midX}
                    y={125 - height - 10}
                    textAnchor="middle"
                    fill="#2563EB"
                    fontSize="22"
                    fontWeight="bold"
                  >
                    {j.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Inequality Ray */}
          {inequality && (
            <g>
              {(() => {
                const ix = (getXPercent(inequality.point) / 100) * 1000;
                const isRight = inequality.type === 'gt' || inequality.type === 'gte';
                const isFilled = inequality.type === 'gte' || inequality.type === 'lte';
                const rayEnd = isRight ? 940 : 60;
                return (
                  <>
                    <line
                      x1={ix}
                      y1="90"
                      x2={rayEnd}
                      y2="90"
                      stroke="#DC2626"
                      strokeWidth="5"
                    />
                    <polygon
                      points={
                        isRight
                          ? `${rayEnd + 8},90 ${rayEnd - 10},82 ${rayEnd - 10},98`
                          : `${rayEnd - 8},90 ${rayEnd + 10},82 ${rayEnd + 10},98`
                      }
                      fill="#DC2626"
                    />
                    <circle
                      cx={ix}
                      cy="90"
                      r="10"
                      fill={isFilled ? "#DC2626" : "#FAF7F2"}
                      stroke="#DC2626"
                      strokeWidth="4"
                    />
                  </>
                );
              })()}
            </g>
          )}

          {/* Draggable marker */}
          {showDraggable && (
            <g>
              {(() => {
                const cx = (getXPercent(val) / 100) * 1000;
                return (
                  <>
                    <circle
                      cx={cx}
                      cy="130"
                      r="16"
                      fill="#D97706"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                    />
                    <line
                      x1={cx}
                      y1="75"
                      x2={cx}
                      y2="114"
                      stroke="#D97706"
                      strokeWidth="3.5"
                    />
                    <polygon
                      points={`${cx},114 ${cx - 7},100 ${cx + 7},100`}
                      fill="#D97706"
                    />
                  </>
                );
              })()}
            </g>
          )}
        </svg>
      </div>

      {showDraggable && (
        <div className="flex items-center gap-4 px-2">
          <span className="text-xl font-bold text-slate-600">{min}</span>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="flex-1 h-6 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
          />
          <span className="text-xl font-bold text-slate-600">{max}</span>
        </div>
      )}
    </div>
  );
};

// ==================== 2. PlaceValueChart ====================
export interface PlaceValueChartProps {
  initialNumber?: number;
  columns?: string[];
  showDecimals?: boolean;
}

export const PlaceValueChart: React.FC<PlaceValueChartProps> = ({
  initialNumber = 345.67,
  columns = ['Hundreds', 'Tens', 'Ones', 'tenths', 'hundredths', 'thousandths'],
}) => {
  const [val, setVal] = useState(initialNumber);

  const getDigit = (col: string): string => {
    const s = val.toFixed(3);
    const [whole, dec] = s.split('.');
    const padWhole = whole.padStart(4, '0');
    const padDec = (dec || '').padEnd(3, '0');

    switch (col.toLowerCase()) {
      case 'thousands':
        return padWhole[padWhole.length - 4] || '0';
      case 'hundreds':
        return padWhole[padWhole.length - 3] || '0';
      case 'tens':
        return padWhole[padWhole.length - 2] || '0';
      case 'ones':
        return padWhole[padWhole.length - 1] || '0';
      case 'tenths':
        return padDec[0] || '0';
      case 'hundredths':
        return padDec[1] || '0';
      case 'thousandths':
        return padDec[2] || '0';
      default:
        return '0';
    }
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-navy">
          Number: <span className="text-indigo-600">{val}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setVal((v) => Number((v * 10).toFixed(3)))}
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
          >
            × 10
          </button>
          <button
            type="button"
            onClick={() => setVal((v) => Number((v / 10).toFixed(3)))}
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
          >
            ÷ 10
          </button>
          <button
            type="button"
            onClick={() => setVal(initialNumber)}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-flow-col auto-cols-fr border-2 border-[#0A192F] rounded-xl overflow-hidden bg-white text-center">
        {columns.map((col, idx) => {
          const isDec = col.startsWith('tenth') || col.startsWith('hundredth') || col.startsWith('thousandth');
          const digit = getDigit(col);
          const count = parseInt(digit, 10) || 0;

          return (
            <div
              key={idx}
              className={`flex flex-col border-r border-[#0A192F] last:border-r-0 ${
                isDec ? 'bg-amber-50/50' : 'bg-blue-50/40'
              }`}
            >
              <div className="py-3 px-2 border-b border-[#0A192F] font-bold text-lg md:text-xl text-[#0A192F] capitalize">
                {col}
              </div>
              <div className="py-4 text-3xl font-extrabold text-indigo-700 border-b border-slate-200">
                {digit}
              </div>
              <div className="p-3 min-h-[100px] flex flex-wrap gap-1.5 items-center justify-center content-center">
                {Array.from({ length: count }).map((_, cIdx) => (
                  <span
                    key={cIdx}
                    className="w-5 h-5 rounded-full bg-indigo-600 border border-white shadow-xs inline-block"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==================== 3. FactorTree ====================
export interface FactorNode {
  val: number;
  isPrime?: boolean;
  left?: FactorNode;
  right?: FactorNode;
}

export interface FactorTreeProps {
  rootValue?: number;
  tree?: FactorNode;
}

export const FactorTree: React.FC<FactorTreeProps> = ({
  rootValue = 60,
  tree = {
    val: 60,
    left: { val: 6, left: { val: 2, isPrime: true }, right: { val: 3, isPrime: true } },
    right: { val: 10, left: { val: 2, isPrime: true }, right: { val: 5, isPrime: true } },
  },
}) => {
  const [revealedLevel, setRevealedLevel] = useState(3);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-navy">
          Prime Factors of {rootValue}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setRevealedLevel((l) => (l >= 3 ? 1 : l + 1))}
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
          >
            Next step
          </button>
          <button
            type="button"
            onClick={() => setRevealedLevel(1)}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative h-64 flex items-center justify-center">
        <svg className="w-full h-full max-w-lg" viewBox="0 0 500 240">
          {/* Level 0: Root */}
          <circle cx="250" cy="35" r="24" fill="#0A192F" />
          <text x="250" y="43" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="bold">
            {tree.val}
          </text>

          {/* Level 1 branches */}
          {revealedLevel >= 2 && tree.left && tree.right && (
            <>
              <line x1="230" y1="55" x2="150" y2="105" stroke="#0A192F" strokeWidth="3" />
              <line x1="270" y1="55" x2="350" y2="105" stroke="#0A192F" strokeWidth="3" />

              <circle cx="150" cy="115" r="22" fill={tree.left.isPrime ? "#16A34A" : "#2563EB"} />
              <text x="150" y="123" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">
                {tree.left.val}
              </text>

              <circle cx="350" cy="115" r="22" fill={tree.right.isPrime ? "#16A34A" : "#2563EB"} />
              <text x="350" y="123" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">
                {tree.right.val}
              </text>
            </>
          )}

          {/* Level 2 branches */}
          {revealedLevel >= 3 && tree.left?.left && tree.left?.right && tree.right?.left && tree.right?.right && (
            <>
              <line x1="135" y1="135" x2="90" y2="185" stroke="#0A192F" strokeWidth="3" />
              <line x1="165" y1="135" x2="210" y2="185" stroke="#0A192F" strokeWidth="3" />
              <line x1="335" y1="135" x2="290" y2="185" stroke="#0A192F" strokeWidth="3" />
              <line x1="365" y1="135" x2="410" y2="185" stroke="#0A192F" strokeWidth="3" />

              <circle cx="90" cy="195" r="20" fill="#16A34A" />
              <text x="90" y="202" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
                {tree.left.left.val}
              </text>

              <circle cx="210" cy="195" r="20" fill="#16A34A" />
              <text x="210" y="202" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
                {tree.left.right.val}
              </text>

              <circle cx="290" cy="195" r="20" fill="#16A34A" />
              <text x="290" y="202" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
                {tree.right.left.val}
              </text>

              <circle cx="410" cy="195" r="20" fill="#16A34A" />
              <text x="410" y="202" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">
                {tree.right.right.val}
              </text>
            </>
          )}
        </svg>
      </div>

      {revealedLevel >= 3 && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-center text-xl md:text-2xl font-bold text-green-900">
          Prime factorisation: 2 × 2 × 3 × 5 = 2² × 3 × 5
        </div>
      )}
    </div>
  );
};

// ==================== 4. VennDiagram ====================
export interface VennDiagramProps {
  setALabel?: string;
  setBLabel?: string;
  setAItems?: string[];
  setBItems?: string[];
  intersectionItems?: string[];
  universalItems?: string[];
}

export const VennDiagram: React.FC<VennDiagramProps> = ({
  setALabel = 'Multiples of 3',
  setBLabel = 'Multiples of 4',
  setAItems = ['3', '6', '9'],
  setBItems = ['4', '8', '16'],
  intersectionItems = ['12', '24'],
  universalItems = ['1', '2', '5', '7'],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="relative w-full h-80 border-2 border-[#0A192F] rounded-2xl bg-amber-50/20 p-2 overflow-hidden">
        <span className="absolute top-3 left-4 text-2xl font-black text-[#0A192F]">
          ξ (Universal Set)
        </span>

        <svg className="w-full h-full" viewBox="0 0 600 300">
          {/* Circle A */}
          <circle
            cx="230"
            cy="150"
            r="120"
            fill="rgba(37, 99, 235, 0.2)"
            stroke="#2563EB"
            strokeWidth="3.5"
          />
          {/* Circle B */}
          <circle
            cx="370"
            cy="150"
            r="120"
            fill="rgba(220, 38, 38, 0.2)"
            stroke="#DC2626"
            strokeWidth="3.5"
          />

          {/* Labels */}
          <text x="170" y="60" textAnchor="middle" fill="#2563EB" fontSize="20" fontWeight="bold">
            {setALabel}
          </text>
          <text x="430" y="60" textAnchor="middle" fill="#DC2626" fontSize="20" fontWeight="bold">
            {setBLabel}
          </text>

          {/* Items in A only */}
          {setAItems.map((item, i) => (
            <text
              key={i}
              x={160 + (i % 2) * 35}
              y={120 + i * 30}
              fill="#0A192F"
              fontSize="22"
              fontWeight="bold"
            >
              {item}
            </text>
          ))}

          {/* Items in Intersection */}
          {intersectionItems.map((item, i) => (
            <text
              key={i}
              x={300}
              y={130 + i * 35}
              textAnchor="middle"
              fill="#0A192F"
              fontSize="24"
              fontWeight="black"
            >
              {item}
            </text>
          ))}

          {/* Items in B only */}
          {setBItems.map((item, i) => (
            <text
              key={i}
              x={400 + (i % 2) * 35}
              y={120 + i * 30}
              fill="#0A192F"
              fontSize="22"
              fontWeight="bold"
            >
              {item}
            </text>
          ))}

          {/* Universal set outer items */}
          {universalItems.map((item, i) => (
            <text
              key={i}
              x={50 + i * 40}
              y={260}
              fill="#64748B"
              fontSize="20"
              fontWeight="bold"
            >
              {item}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

// ==================== 5. CarrollDiagram ====================
export interface CarrollDiagramProps {
  rowLabels?: [string, string];
  colLabels?: [string, string];
  cells?: string[][];
}

export const CarrollDiagram: React.FC<CarrollDiagramProps> = ({
  rowLabels = ['Even', 'Not Even'],
  colLabels = ['Multiple of 5', 'Not Multiple of 5'],
  cells = [
    ['10, 20, 30', '2, 4, 6, 8'],
    ['5, 15, 25', '1, 3, 7, 9'],
  ],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="grid grid-cols-3 border-2 border-[#0A192F] rounded-xl overflow-hidden bg-white text-center">
        {/* Top-left empty */}
        <div className="bg-slate-100 border-r-2 border-b-2 border-[#0A192F] p-3" />
        {/* Col Headers */}
        <div className="bg-blue-50 border-r-2 border-b-2 border-[#0A192F] p-4 text-xl font-bold text-navy">
          {colLabels[0]}
        </div>
        <div className="bg-blue-50 border-b-2 border-[#0A192F] p-4 text-xl font-bold text-navy">
          {colLabels[1]}
        </div>

        {/* Row 1 */}
        <div className="bg-amber-50 border-r-2 border-b-2 border-[#0A192F] p-4 text-xl font-bold text-navy flex items-center justify-center">
          {rowLabels[0]}
        </div>
        <div className="border-r-2 border-b-2 border-[#0A192F] p-6 text-2xl font-bold text-navy min-h-[90px] flex items-center justify-center">
          {cells[0]?.[0]}
        </div>
        <div className="border-b-2 border-[#0A192F] p-6 text-2xl font-bold text-navy min-h-[90px] flex items-center justify-center">
          {cells[0]?.[1]}
        </div>

        {/* Row 2 */}
        <div className="bg-amber-50 border-r-2 border-[#0A192F] p-4 text-xl font-bold text-navy flex items-center justify-center">
          {rowLabels[1]}
        </div>
        <div className="border-r-2 border-[#0A192F] p-6 text-2xl font-bold text-navy min-h-[90px] flex items-center justify-center">
          {cells[1]?.[0]}
        </div>
        <div className="p-6 text-2xl font-bold text-navy min-h-[90px] flex items-center justify-center">
          {cells[1]?.[1]}
        </div>
      </div>
    </div>
  );
};

// ==================== 6. ArithmeticLayout ====================
export interface ArithmeticLayoutProps {
  operation?: 'add' | 'subtract' | 'multiply' | 'divide';
  numbers?: (number | string)[];
  steps?: { label?: string; lines: string[] }[];
}

export const ArithmeticLayout: React.FC<ArithmeticLayoutProps> = ({
  operation = 'add',
  numbers = [458, 276],
  steps = [
    { label: 'Units: 8 + 6 = 14', lines: ['  4 5 8', '+ 2 7 6', '      4'] },
    { label: 'Tens: 5 + 7 + 1 = 13', lines: ['  4 5 8', '+ 2 7 6', '    3 4'] },
    { label: 'Hundreds: 4 + 2 + 1 = 7', lines: ['  4 5 8', '+ 2 7 6', '  7 3 4'] },
  ],
}) => {
  const [currentStep, setCurrentStep] = useState(steps.length - 1);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-slate-700">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep]?.label}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setCurrentStep((s) => (s + 1 < steps.length ? s + 1 : 0))
            }
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
          >
            Next step
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(0)}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-center p-6 bg-amber-50/30 rounded-xl border border-amber-200">
        <pre className="font-mono text-3xl md:text-4xl leading-relaxed text-[#0A192F] tracking-widest font-black">
          {steps[currentStep]?.lines.join('\n')}
        </pre>
      </div>
    </div>
  );
};

// ==================== 7. GridPercent ====================
export interface GridPercentProps {
  initialPercent?: number;
}

export const GridPercent: React.FC<GridPercentProps> = ({ initialPercent = 35 }) => {
  const [percent, setPercent] = useState(initialPercent);

  const toggleCell = (index: number) => {
    setPercent(index + 1);
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-6 text-2xl font-black text-[#0A192F]">
          <div>
            Percentage: <span className="text-indigo-600">{percent}%</span>
          </div>
          <div>
            Fraction: <span className="text-emerald-600">{percent}/100</span>
          </div>
          <div>
            Decimal: <span className="text-amber-600">{(percent / 100).toFixed(2)}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPercent(initialPercent)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="grid grid-cols-10 gap-1 p-2 bg-slate-100 rounded-xl border-2 border-[#0A192F]">
          {Array.from({ length: 100 }).map((_, idx) => {
            const isShaded = idx < percent;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleCell(idx)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xs transition-colors ${
                  isShaded
                    ? 'bg-indigo-600 border border-indigo-700'
                    : 'bg-white border border-slate-300 hover:bg-slate-50'
                }`}
              />
            );
          })}
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          className="w-full max-w-md h-6 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
        />
      </div>
    </div>
  );
};

// ==================== 8. BarModel ====================
export interface BarModelProps {
  total?: number | string;
  segments?: { label: string; value?: number; color?: string; flex?: number }[];
}

export const BarModel: React.FC<BarModelProps> = ({
  total = '120',
  segments = [
    { label: '3 parts (72)', flex: 3, color: '#2563EB' },
    { label: '2 parts (48)', flex: 2, color: '#16A34A' },
  ],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      {total && (
        <div className="text-center font-extrabold text-2xl text-navy">
          Total = {total}
        </div>
      )}

      {/* Bracket over total */}
      <div className="relative h-6 flex justify-center">
        <div className="w-full border-t-2 border-x-2 border-[#0A192F] h-4 rounded-t-lg" />
      </div>

      {/* Bars */}
      <div className="flex h-20 border-2 border-[#0A192F] rounded-xl overflow-hidden shadow-sm">
        {segments.map((seg, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-white font-extrabold text-xl md:text-2xl border-r border-[#0A192F] last:border-r-0"
            style={{
              flex: seg.flex || 1,
              backgroundColor: seg.color || '#2563EB',
            }}
          >
            {seg.label}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== 9. DoubleNumberLine ====================
export interface DoubleNumberLineProps {
  topLabel?: string;
  bottomLabel?: string;
  pairs?: [number | string, number | string][];
}

export const DoubleNumberLine: React.FC<DoubleNumberLineProps> = ({
  topLabel = 'Kilograms (kg)',
  bottomLabel = 'Cost (£)',
  pairs = [
    [0, 0],
    [1, 3.5],
    [2, 7.0],
    [4, 14.0],
  ],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-6">
      <div className="relative py-4 select-none">
        {/* Top Line */}
        <div className="text-xl font-bold text-navy mb-2">{topLabel}</div>
        <div className="relative h-12 flex items-center">
          <div className="w-full h-1 bg-[#0A192F] rounded" />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            {pairs.map(([topVal], idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-1 h-5 bg-[#0A192F]" />
                <span className="text-2xl font-extrabold text-navy mt-1">
                  {topVal}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Space and scaling connector arrows */}
        <div className="h-10 flex justify-between items-center px-6">
          {pairs.slice(1).map((_, i) => (
            <div key={i} className="text-indigo-600 font-bold text-lg">
              ↕
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="text-xl font-bold text-navy mb-2">{bottomLabel}</div>
        <div className="relative h-12 flex items-center">
          <div className="w-full h-1 bg-[#0A192F] rounded" />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            {pairs.map(([, btmVal], idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-1 h-5 bg-[#0A192F]" />
                <span className="text-2xl font-extrabold text-indigo-700 mt-1">
                  {btmVal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== 10. FractionBar ====================
export interface FractionBarProps {
  fractions?: { numerator: number; denominator: number; color?: string }[];
}

export const FractionBar: React.FC<FractionBarProps> = ({
  fractions = [
    { numerator: 1, denominator: 2, color: '#2563EB' },
    { numerator: 2, denominator: 4, color: '#16A34A' },
    { numerator: 4, denominator: 8, color: '#D97706' },
  ],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      {fractions.map((f, idx) => (
        <div key={idx} className="space-y-1">
          <div className="text-xl font-bold text-navy">
            {f.numerator}/{f.denominator}
          </div>
          <div className="flex h-12 border-2 border-[#0A192F] rounded-xl overflow-hidden bg-white">
            {Array.from({ length: f.denominator }).map((_, cIdx) => (
              <div
                key={cIdx}
                className="flex-1 border-r border-[#0A192F] last:border-r-0 flex items-center justify-center font-bold text-lg"
                style={{
                  backgroundColor:
                    cIdx < f.numerator ? f.color || '#2563EB' : 'transparent',
                  color: cIdx < f.numerator ? '#FFFFFF' : '#64748B',
                }}
              >
                1/{f.denominator}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ==================== 11. FractionCircle ====================
export interface FractionCircleProps {
  numerator?: number;
  denominator?: number;
}

export const FractionCircle: React.FC<FractionCircleProps> = ({
  numerator = 3,
  denominator = 8,
}) => {
  const [num, setNum] = useState(numerator);

  const anglePerSlice = 360 / denominator;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Fraction: <span className="text-indigo-600">{num}/{denominator}</span>
        </div>
        <button
          type="button"
          onClick={() => setNum(numerator)}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <svg className="w-64 h-64 overflow-visible" viewBox="-120 -120 240 240">
          <circle cx="0" cy="0" r="100" fill="#FAF7F2" stroke="#0A192F" strokeWidth="3" />
          {Array.from({ length: denominator }).map((_, idx) => {
            const startAngle = (idx * anglePerSlice - 90) * (Math.PI / 180);
            const endAngle = ((idx + 1) * anglePerSlice - 90) * (Math.PI / 180);
            const x1 = 100 * Math.cos(startAngle);
            const y1 = 100 * Math.sin(startAngle);
            const x2 = 100 * Math.cos(endAngle);
            const y2 = 100 * Math.sin(endAngle);
            const isShaded = idx < num;

            return (
              <path
                key={idx}
                d={`M 0 0 L ${x1} ${y1} A 100 100 0 0 1 ${x2} ${y2} Z`}
                fill={isShaded ? '#2563EB' : 'transparent'}
                stroke="#0A192F"
                strokeWidth="2.5"
                className="cursor-pointer transition-colors"
                onClick={() => setNum(idx + 1 === num ? idx : idx + 1)}
              />
            );
          })}
        </svg>

        <div className="flex items-center gap-3 mt-4">
          <button
            type="button"
            disabled={num <= 0}
            onClick={() => setNum((n) => Math.max(0, n - 1))}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl disabled:opacity-40 min-h-[48px]"
          >
            - 1
          </button>
          <span className="text-xl font-bold text-slate-700">{num} shaded</span>
          <button
            type="button"
            disabled={num >= denominator}
            onClick={() => setNum((n) => Math.min(denominator, n + 1))}
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl disabled:opacity-40 min-h-[48px]"
          >
            + 1
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== 12. ProportionTable ====================
export interface ProportionTableProps {
  itemLabel?: string;
  costLabel?: string;
  rows?: [string | number, string | number][];
  scalingOperations?: { fromIdx: number; toIdx: number; op: string }[];
}

export const ProportionTable: React.FC<ProportionTableProps> = ({
  itemLabel = 'Apples',
  costLabel = 'Price (£)',
  rows = [
    [5, '3.00'],
    [1, '0.60'],
    [12, '7.20'],
  ],
  scalingOperations = [
    { fromIdx: 0, toIdx: 1, op: '÷ 5' },
    { fromIdx: 1, toIdx: 2, op: '× 12' },
  ],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full border-2 border-[#0A192F] text-center border-collapse">
          <thead>
            <tr className="bg-blue-50 text-xl font-bold text-navy border-b-2 border-[#0A192F]">
              <th className="p-4 border-r-2 border-[#0A192F]">{itemLabel}</th>
              <th className="p-4">{costLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([item, cost], idx) => (
              <tr
                key={idx}
                className="text-2xl font-extrabold text-navy border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
              >
                <td className="p-4 border-r-2 border-[#0A192F]">{item}</td>
                <td className="p-4 text-indigo-700">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {scalingOperations.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          {scalingOperations.map((sop, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-amber-50 border border-amber-300 rounded-xl font-bold text-amber-900 text-lg"
            >
              Step {i + 1}: {sop.op}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
