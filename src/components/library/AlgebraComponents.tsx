import React, { useState } from 'react';
import { RotateCcw, Plus, Minus, ArrowRight } from 'lucide-react';

// ==================== 1. BalanceScale ====================
export interface BalanceScaleProps {
  leftExpression?: string;
  rightExpression?: string;
  initialLeftWeight?: number;
  initialRightWeight?: number;
}

export const BalanceScale: React.FC<BalanceScaleProps> = ({
  leftExpression = '2x + 3',
  rightExpression = '11',
  initialLeftWeight = 11,
  initialRightWeight = 11,
}) => {
  const [leftWeight, setLeftWeight] = useState(initialLeftWeight);
  const [rightWeight, setRightWeight] = useState(initialRightWeight);

  const diff = leftWeight - rightWeight;
  // Tilt angle between -15 and 15 degrees
  const tilt = Math.max(-15, Math.min(15, diff * 3));

  const handleReset = () => {
    setLeftWeight(initialLeftWeight);
    setRightWeight(initialRightWeight);
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy flex items-center gap-4">
          <span>{leftExpression}</span>
          <span className="text-indigo-600">=</span>
          <span>{rightExpression}</span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="relative h-64 flex items-center justify-center select-none overflow-hidden">
        <svg className="w-full h-full max-w-lg" viewBox="0 0 500 240">
          {/* Fulcrum base */}
          <polygon points="250,140 220,220 280,220" fill="#0A192F" />

          {/* Pivoting Beam */}
          <g transform={`rotate(${tilt}, 250, 140)`}>
            <rect x="70" y="134" width="360" height="12" rx="6" fill="#2563EB" />
            <circle cx="250" cy="140" r="8" fill="#FFFFFF" stroke="#0A192F" strokeWidth="3" />

            {/* Left Pan Hanger */}
            <line x1="100" y1="140" x2="100" y2="185" stroke="#64748B" strokeWidth="3" />
            <path d="M 60 185 Q 100 205 140 185" fill="none" stroke="#0A192F" strokeWidth="5" />
            <text x="100" y="175" textAnchor="middle" fill="#0A192F" fontSize="20" fontWeight="bold">
              {leftWeight}
            </text>

            {/* Right Pan Hanger */}
            <line x1="400" y1="140" x2="400" y2="185" stroke="#64748B" strokeWidth="3" />
            <path d="M 360 185 Q 400 205 440 185" fill="none" stroke="#0A192F" strokeWidth="5" />
            <text x="400" y="175" textAnchor="middle" fill="#0A192F" fontSize="20" fontWeight="bold">
              {rightWeight}
            </text>
          </g>
        </svg>
      </div>

      {/* Operations on both sides */}
      <div className="grid grid-cols-2 gap-6 pt-2">
        <div className="flex flex-col items-center gap-2 p-3 bg-blue-50/50 rounded-xl border border-blue-200">
          <span className="font-bold text-lg text-navy">Left Side</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setLeftWeight((w) => w - 1)}
              className="p-3 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 min-h-[48px] min-w-[48px] flex items-center justify-center font-bold"
            >
              <Minus className="w-5 h-5 text-red-600" />
            </button>
            <button
              type="button"
              onClick={() => setLeftWeight((w) => w + 1)}
              className="p-3 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 min-h-[48px] min-w-[48px] flex items-center justify-center font-bold"
            >
              <Plus className="w-5 h-5 text-emerald-600" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 p-3 bg-indigo-50/50 rounded-xl border border-indigo-200">
          <span className="font-bold text-lg text-navy">Right Side</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRightWeight((w) => w - 1)}
              className="p-3 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 min-h-[48px] min-w-[48px] flex items-center justify-center font-bold"
            >
              <Minus className="w-5 h-5 text-red-600" />
            </button>
            <button
              type="button"
              onClick={() => setRightWeight((w) => w + 1)}
              className="p-3 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 min-h-[48px] min-w-[48px] flex items-center justify-center font-bold"
            >
              <Plus className="w-5 h-5 text-emerald-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== 2. AlgebraTiles ====================
export interface AlgebraTilesProps {
  initialCounts?: { x2: number; x: number; one: number };
}

export const AlgebraTiles: React.FC<AlgebraTilesProps> = ({
  initialCounts = { x2: 1, x: 3, one: 2 },
}) => {
  const [counts, setCounts] = useState(initialCounts);

  const update = (key: 'x2' | 'x' | 'one', delta: number) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(10, prev[key] + delta)),
    }));
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Expression:{' '}
          <span className="text-indigo-600">
            {counts.x2 > 0 && `${counts.x2 === 1 ? '' : counts.x2}x² `}
            {counts.x > 0 && `+ ${counts.x === 1 ? '' : counts.x}x `}
            {counts.one > 0 && `+ ${counts.one}`}
            {counts.x2 === 0 && counts.x === 0 && counts.one === 0 && '0'}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setCounts(initialCounts)}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Tiles display area */}
      <div className="min-h-[140px] p-6 bg-amber-50/20 border-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap items-center gap-4">
        {Array.from({ length: counts.x2 }).map((_, i) => (
          <div
            key={`x2_${i}`}
            className="w-20 h-20 bg-blue-500 border-2 border-blue-700 rounded-lg text-white font-extrabold text-2xl flex items-center justify-center shadow-sm"
          >
            x²
          </div>
        ))}
        {Array.from({ length: counts.x }).map((_, i) => (
          <div
            key={`x_${i}`}
            className="w-8 h-20 bg-emerald-500 border-2 border-emerald-700 rounded-lg text-white font-extrabold text-xl flex items-center justify-center shadow-sm"
          >
            x
          </div>
        ))}
        {Array.from({ length: counts.one }).map((_, i) => (
          <div
            key={`one_${i}`}
            className="w-8 h-8 bg-amber-400 border-2 border-amber-600 rounded-lg text-navy font-black text-lg flex items-center justify-center shadow-sm"
          >
            1
          </div>
        ))}
      </div>

      {/* Controls to add/remove tiles */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-200">
          <span className="font-bold text-navy">x²</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => update('x2', -1)}
              className="w-10 h-10 bg-white border border-slate-300 rounded-lg font-bold"
            >
              -
            </button>
            <span className="font-extrabold text-xl">{counts.x2}</span>
            <button
              type="button"
              onClick={() => update('x2', 1)}
              className="w-10 h-10 bg-white border border-slate-300 rounded-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-emerald-200">
          <span className="font-bold text-navy">x</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => update('x', -1)}
              className="w-10 h-10 bg-white border border-slate-300 rounded-lg font-bold"
            >
              -
            </button>
            <span className="font-extrabold text-xl">{counts.x}</span>
            <button
              type="button"
              onClick={() => update('x', 1)}
              className="w-10 h-10 bg-white border border-slate-300 rounded-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-200">
          <span className="font-bold text-navy">1</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => update('one', -1)}
              className="w-10 h-10 bg-white border border-slate-300 rounded-lg font-bold"
            >
              -
            </button>
            <span className="font-extrabold text-xl">{counts.one}</span>
            <button
              type="button"
              onClick={() => update('one', 1)}
              className="w-10 h-10 bg-white border border-slate-300 rounded-lg font-bold"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== 3. AreaModel ====================
export interface AreaModelProps {
  topTerms?: [string, string];
  sideTerms?: [string, string];
  cellExpressions?: [string, string, string, string];
}

export const AreaModel: React.FC<AreaModelProps> = ({
  topTerms = ['x', '+ 3'],
  sideTerms = ['x', '+ 2'],
  cellExpressions = ['x²', '3x', '2x', '6'],
}) => {
  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">
        (x + 3)(x + 2) = x² + 5x + 6
      </div>

      <div className="grid grid-cols-[100px_1fr_1fr] grid-rows-[60px_120px_120px] max-w-lg mx-auto border-2 border-[#0A192F] rounded-2xl overflow-hidden text-center">
        {/* Top left blank */}
        <div className="bg-slate-100 border-r-2 border-b-2 border-[#0A192F] flex items-center justify-center font-bold text-2xl text-slate-400">
          ×
        </div>
        <div className="bg-blue-50 border-r-2 border-b-2 border-[#0A192F] flex items-center justify-center font-extrabold text-2xl text-navy">
          {topTerms[0]}
        </div>
        <div className="bg-blue-50 border-b-2 border-[#0A192F] flex items-center justify-center font-extrabold text-2xl text-navy">
          {topTerms[1]}
        </div>

        {/* Row 1 */}
        <div className="bg-emerald-50 border-r-2 border-b-2 border-[#0A192F] flex items-center justify-center font-extrabold text-2xl text-navy">
          {sideTerms[0]}
        </div>
        <div className="bg-blue-100/60 border-r-2 border-b-2 border-[#0A192F] flex items-center justify-center font-black text-3xl text-indigo-700">
          {cellExpressions[0]}
        </div>
        <div className="bg-emerald-100/60 border-b-2 border-[#0A192F] flex items-center justify-center font-black text-3xl text-indigo-700">
          {cellExpressions[1]}
        </div>

        {/* Row 2 */}
        <div className="bg-emerald-50 border-r-2 border-[#0A192F] flex items-center justify-center font-extrabold text-2xl text-navy">
          {sideTerms[1]}
        </div>
        <div className="bg-emerald-100/60 border-r-2 border-[#0A192F] flex items-center justify-center font-black text-3xl text-indigo-700">
          {cellExpressions[2]}
        </div>
        <div className="bg-amber-100/60 flex items-center justify-center font-black text-3xl text-indigo-700">
          {cellExpressions[3]}
        </div>
      </div>
    </div>
  );
};

// ==================== 4. FunctionMachine ====================
export interface FunctionMachineProps {
  initialInput?: number;
  operation1?: string;
  operation2?: string;
  computeOutput?: (input: number) => number;
}

export const FunctionMachine: React.FC<FunctionMachineProps> = ({
  initialInput = 4,
  operation1 = '× 3',
  operation2 = '+ 5',
  computeOutput = (x) => x * 3 + 5,
}) => {
  const [inp, setInp] = useState(initialInput);
  const [stage, setStage] = useState(2); // 0 = input, 1 = mid, 2 = output

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-slate-700">
          Function Machine: y = 3x + 5
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setStage((s) => (s >= 2 ? 0 : s + 1))}
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl min-h-[48px]"
          >
            Next step
          </button>
          <button
            type="button"
            onClick={() => {
              setInp(initialInput);
              setStage(2);
            }}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 py-6 overflow-x-auto">
        {/* Input */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-slate-500 mb-1">Input (x)</span>
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#0A192F] shadow-sm flex items-center justify-center text-3xl font-black text-navy">
            {inp}
          </div>
        </div>

        <ArrowRight className="w-8 h-8 text-slate-400" />

        {/* Machine 1 */}
        <div className="w-32 h-24 rounded-2xl bg-indigo-600 text-white shadow-lg flex flex-col items-center justify-center border-2 border-indigo-700">
          <span className="text-xs uppercase tracking-wider font-bold opacity-80">Op 1</span>
          <span className="text-2xl font-black">{operation1}</span>
        </div>

        <ArrowRight className="w-8 h-8 text-slate-400" />

        {/* Machine 2 */}
        <div className="w-32 h-24 rounded-2xl bg-emerald-600 text-white shadow-lg flex flex-col items-center justify-center border-2 border-emerald-700">
          <span className="text-xs uppercase tracking-wider font-bold opacity-80">Op 2</span>
          <span className="text-2xl font-black">{operation2}</span>
        </div>

        <ArrowRight className="w-8 h-8 text-slate-400" />

        {/* Output */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-slate-500 mb-1">Output (y)</span>
          <div className="w-20 h-20 rounded-2xl bg-amber-100 border-2 border-amber-500 shadow-sm flex items-center justify-center text-3xl font-black text-amber-900">
            {stage >= 2 ? computeOutput(inp) : '?'}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setInp((x) => x - 1)}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 font-extrabold text-xl rounded-xl min-h-[48px]"
        >
          - 1
        </button>
        <span className="text-2xl font-extrabold text-navy">x = {inp}</span>
        <button
          type="button"
          onClick={() => setInp((x) => x + 1)}
          className="px-5 py-2.5 bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold text-xl rounded-xl min-h-[48px]"
        >
          + 1
        </button>
      </div>
    </div>
  );
};

// ==================== 5. ExpressionBuilder ====================
export interface ExpressionBuilderProps {
  availableTokens?: string[];
}

export const ExpressionBuilder: React.FC<ExpressionBuilderProps> = ({
  availableTokens = ['3x', '5', '2y', '+', '-', '×', '(', ')'],
}) => {
  const [tokens, setTokens] = useState<string[]>(['3x', '+', '5']);

  const addToken = (tok: string) => {
    setTokens((prev) => [...prev, tok]);
  };

  const popToken = () => {
    setTokens((prev) => prev.slice(0, -1));
  };

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-navy">Built Expression</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={popToken}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            Backspace
          </button>
          <button
            type="button"
            onClick={() => setTokens([])}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="min-h-[80px] p-4 bg-amber-50/30 border-2 border-[#0A192F] rounded-xl flex items-center flex-wrap gap-2 text-3xl font-black text-[#0A192F]">
        {tokens.length === 0 ? (
          <span className="text-slate-400 font-normal text-xl">
            Tap tokens below to build expression
          </span>
        ) : (
          tokens.map((tok, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white border border-slate-300 rounded-lg shadow-xs"
            >
              {tok}
            </span>
          ))
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {availableTokens.map((tok, i) => (
          <button
            key={i}
            type="button"
            onClick={() => addToken(tok)}
            className="px-5 py-3 bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 active:scale-95 text-2xl font-black rounded-xl min-h-[56px] min-w-[56px]"
          >
            {tok}
          </button>
        ))}
      </div>
    </div>
  );
};

// ==================== 6. SequenceBuilder ====================
export interface SequenceBuilderProps {
  formula?: string; // e.g. "3n + 2"
  multiplier?: number;
  constant?: number;
}

export const SequenceBuilder: React.FC<SequenceBuilderProps> = ({
  formula = '3n + 2',
  multiplier = 3,
  constant = 2,
}) => {
  const [termsCount, setTermsCount] = useState(4);

  const getTerm = (n: number) => multiplier * n + constant;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          nth term: <span className="text-indigo-600">{formula}</span>
        </div>
        <button
          type="button"
          onClick={() => setTermsCount((c) => (c >= 6 ? 3 : c + 1))}
          className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl min-h-[48px]"
        >
          Next term
        </button>
      </div>

      <div className="grid grid-flow-col auto-cols-fr border-2 border-[#0A192F] rounded-xl overflow-hidden bg-white text-center">
        {Array.from({ length: termsCount }).map((_, idx) => {
          const n = idx + 1;
          const val = getTerm(n);

          return (
            <div
              key={n}
              className="flex flex-col border-r border-[#0A192F] last:border-r-0"
            >
              <div className="py-2.5 bg-blue-50 border-b border-[#0A192F] font-bold text-lg text-slate-700">
                n = {n}
              </div>
              <div className="py-5 text-3xl font-black text-indigo-700">
                {val}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center font-bold text-slate-600 text-lg">
        Term-to-term rule: +{multiplier}
      </div>
    </div>
  );
};
