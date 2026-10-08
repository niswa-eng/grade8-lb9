import React, { useState } from 'react';
import { RotateCcw, ChevronRight } from 'lucide-react';

// ==================== 1. PrimeFactorTool (HCF & LCM Venn) ====================
export interface PrimeFactorToolProps {
  numA?: number;
  numB?: number;
  factorsA?: number[];
  factorsB?: number[];
}

export const PrimeFactorTool: React.FC<PrimeFactorToolProps> = ({
  numA = 24,
  numB = 36,
  factorsA = [2, 2, 2, 3],
  factorsB = [2, 2, 3, 3],
}) => {
  const [step, setStep] = useState(2); // 0: lists, 1: Venn, 2: HCF & LCM

  // Common: two 2s and one 3 (2*2*3 = 12)
  const intersection = [2, 2, 3];
  const onlyA = [2];
  const onlyB = [3];
  const hcf = 12;
  const lcm = 72;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          HCF &amp; LCM of {numA} and {numB}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setStep((s) => (s >= 2 ? 0 : s + 1))}
            className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
          >
            Next step
          </button>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative h-64 border-2 border-[#0A192F] rounded-2xl bg-amber-50/20 p-2 overflow-hidden flex items-center justify-center">
        <svg className="w-full h-full max-w-lg" viewBox="0 0 500 240">
          {/* Circle A */}
          <circle
            cx="190"
            cy="120"
            r="100"
            fill="rgba(37, 99, 235, 0.2)"
            stroke="#2563EB"
            strokeWidth="3.5"
          />
          {/* Circle B */}
          <circle
            cx="310"
            cy="120"
            r="100"
            fill="rgba(22, 163, 74, 0.2)"
            stroke="#16A34A"
            strokeWidth="3.5"
          />

          <text x="130" y="45" fill="#2563EB" fontSize="20" fontWeight="bold">
            {numA}
          </text>
          <text x="370" y="45" fill="#16A34A" fontSize="20" fontWeight="bold">
            {numB}
          </text>

          {/* Only in A */}
          {onlyA.map((f, i) => (
            <text key={`a_${i}`} x={140} y={125 + i * 30} fill="#2563EB" fontSize="24" fontWeight="black">
              {f}
            </text>
          ))}

          {/* Intersection */}
          {intersection.map((f, i) => (
            <text key={`ab_${i}`} x={250} y={90 + i * 35} textAnchor="middle" fill="#0A192F" fontSize="24" fontWeight="black">
              {f}
            </text>
          ))}

          {/* Only in B */}
          {onlyB.map((f, i) => (
            <text key={`b_${i}`} x={360} y={125 + i * 30} fill="#16A34A" fontSize="24" fontWeight="black">
              {f}
            </text>
          ))}
        </svg>
      </div>

      {step >= 2 && (
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <span className="text-slate-500 font-bold block text-lg">HCF (Intersection product)</span>
            <span className="text-2xl font-black text-navy">2 × 2 × 3 = {hcf}</span>
          </div>
          <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
            <span className="text-slate-500 font-bold block text-lg">LCM (Union product)</span>
            <span className="text-2xl font-black text-navy">2 × (2 × 2 × 3) × 3 = {lcm}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// ==================== 2. IndexLawsTool ====================
export interface IndexLawsToolProps {
  base?: string;
  m?: number;
  n?: number;
  law?: 'mult' | 'div' | 'power' | 'zero' | 'neg';
}

export const IndexLawsTool: React.FC<IndexLawsToolProps> = ({
  base = 'a',
  m = 3,
  n = 2,
  law = 'mult',
}) => {
  const [selectedLaw, setSelectedLaw] = useState<'mult' | 'div' | 'power' | 'zero' | 'neg'>(law);
  const [revealStep, setRevealStep] = useState(2);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-2xl font-black text-navy">Index Laws (Powers)</div>
        <div className="flex gap-2">
          {(['mult', 'div', 'power', 'zero', 'neg'] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setSelectedLaw(l);
                setRevealStep(2);
              }}
              className={`px-3 py-2 rounded-xl text-base font-bold capitalize transition-all ${
                selectedLaw === l
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {l === 'mult' ? 'Multiply' : l === 'div' ? 'Divide' : l === 'power' ? 'Power' : l === 'zero' ? 'a⁰' : 'a⁻ⁿ'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 bg-amber-50/40 border-2 border-amber-200 rounded-2xl text-center space-y-4">
        {selectedLaw === 'mult' && (
          <>
            <div className="text-3xl md:text-4xl font-black text-navy">
              {base}³ × {base}² = ({base} × {base} × {base}) × ({base} × {base})
            </div>
            <div className="text-4xl font-extrabold text-indigo-700">
              = {base}³⁺² = {base}⁵
            </div>
            <div className="text-xl font-bold text-slate-600">
              General Rule: {base}ᵐ × {base}ⁿ = {base}ᵐ⁺ⁿ
            </div>
          </>
        )}

        {selectedLaw === 'div' && (
          <>
            <div className="text-3xl md:text-4xl font-black text-navy">
              {base}⁵ ÷ {base}² = ({base} × {base} × {base} × {base} × {base}) ÷ ({base} × {base})
            </div>
            <div className="text-4xl font-extrabold text-indigo-700">
              = {base}⁵⁻² = {base}³
            </div>
            <div className="text-xl font-bold text-slate-600">
              General Rule: {base}ᵐ ÷ {base}ⁿ = {base}ᵐ⁻ⁿ
            </div>
          </>
        )}

        {selectedLaw === 'power' && (
          <>
            <div className="text-3xl md:text-4xl font-black text-navy">
              ({base}²)³ = ({base}²) × ({base}²) × ({base}²)
            </div>
            <div className="text-4xl font-extrabold text-indigo-700">
              = {base}²ˣ³ = {base}⁶
            </div>
            <div className="text-xl font-bold text-slate-600">
              General Rule: ({base}ᵐ)ⁿ = {base}ᵐⁿ
            </div>
          </>
        )}

        {selectedLaw === 'zero' && (
          <>
            <div className="text-3xl md:text-4xl font-black text-navy">
              {base}³ ÷ {base}³ = {base}³⁻³ = {base}⁰
            </div>
            <div className="text-4xl font-extrabold text-emerald-700">
              Any non-zero base: {base}⁰ = 1
            </div>
          </>
        )}

        {selectedLaw === 'neg' && (
          <>
            <div className="text-3xl md:text-4xl font-black text-navy">
              {base}² ÷ {base}⁵ = {base}²⁻⁵ = {base}⁻³
            </div>
            <div className="text-4xl font-extrabold text-indigo-700">
              {base}⁻³ = 1 / {base}³
            </div>
            <div className="text-xl font-bold text-slate-600">
              General Rule: {base}⁻ⁿ = 1 / {base}ⁿ
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ==================== 3. StandardFormTool ====================
export interface StandardFormToolProps {
  initialA?: number;
  initialN?: number;
}

export const StandardFormTool: React.FC<StandardFormToolProps> = ({
  initialA = 4.5,
  initialN = 3,
}) => {
  const [a, setA] = useState(initialA);
  const [n, setN] = useState(initialN);

  const ordinaryValue = (a * Math.pow(10, n)).toLocaleString('en-US', {
    maximumFractionDigits: 6,
  });

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">Standard Form (Scientific Notation)</div>
        <button
          type="button"
          onClick={() => {
            setA(initialA);
            setN(initialN);
          }}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-blue-50/30 border-2 border-blue-200 rounded-2xl text-center items-center">
        <div>
          <span className="text-slate-500 font-bold block text-lg mb-1">Standard Form: A × 10ⁿ</span>
          <span className="text-4xl font-black text-indigo-700">
            {a.toFixed(1)} × 10{n !== 0 ? (<sup>{n}</sup> as any) : '⁰'}
          </span>
          <span className="text-sm font-semibold text-slate-500 block mt-2">1 ≤ A &lt; 10</span>
        </div>

        <div>
          <span className="text-slate-500 font-bold block text-lg mb-1">Ordinary Number</span>
          <span className="text-4xl font-black text-[#0A192F]">{ordinaryValue}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 pt-2">
        <div className="space-y-1">
          <div className="flex justify-between font-bold text-navy">
            <span>Coefficient (A)</span>
            <span className="text-indigo-600 text-xl">{a.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="1"
            max="9.9"
            step="0.1"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full h-6 accent-indigo-600 cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between font-bold text-navy">
            <span>Power (n)</span>
            <span className="text-indigo-600 text-xl">{n}</span>
          </div>
          <input
            type="range"
            min="-3"
            max="5"
            step="1"
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="w-full h-6 accent-indigo-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

// ==================== 4. SurdEstimator ====================
export interface SurdEstimatorProps {
  initialRadicand?: number;
}

export const SurdEstimator: React.FC<SurdEstimatorProps> = ({ initialRadicand = 20 }) => {
  const [val, setVal] = useState(initialRadicand);

  const sqrtVal = Math.sqrt(val);
  const lowerInt = Math.floor(sqrtVal);
  const upperInt = lowerInt + 1;
  const lowerSquare = lowerInt * lowerInt;
  const upperSquare = upperInt * upperInt;

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Estimating Surds: <span className="text-indigo-600">√{val} ≈ {sqrtVal.toFixed(2)}</span>
        </div>
        <button
          type="button"
          onClick={() => setVal(initialRadicand)}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 bg-amber-50/30 border-2 border-amber-200 rounded-2xl text-center space-y-2">
        <div className="text-2xl md:text-3xl font-black text-navy">
          √{lowerSquare} = {lowerInt} &lt; <span className="text-indigo-700">√{val}</span> &lt; √{upperSquare} = {upperInt}
        </div>
        <div className="text-lg font-bold text-slate-600">
          Since {val} is between {lowerSquare} and {upperSquare}, √{val} is between {lowerInt} and {upperInt}.
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <div className="flex justify-between font-bold text-slate-700">
          <span>Choose number inside root: {val}</span>
        </div>
        <input
          type="range"
          min="2"
          max="50"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          className="w-full h-6 accent-indigo-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

// ==================== 5. RationalIrrationalTool ====================
export const RationalIrrationalTool: React.FC = () => {
  const examples = [
    { num: '3/4', type: 'Rational', reason: 'Fraction of integers' },
    { num: '0.666...', type: 'Rational', reason: 'Recurring decimal (2/3)' },
    { num: '-5', type: 'Rational', reason: 'Integer (-5/1)' },
    { num: '√2', type: 'Irrational', reason: 'Non-terminating, non-recurring' },
    { num: 'π', type: 'Irrational', reason: 'Circumference/diameter constant' },
    { num: '√16', type: 'Rational', reason: '= 4 (whole number)' },
  ];

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="text-2xl font-black text-navy text-center">
        Rational vs. Irrational Numbers
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50/60 border-2 border-blue-200 rounded-2xl space-y-2">
          <h3 className="text-2xl font-extrabold text-blue-900 border-b border-blue-200 pb-2">
            Rational (ℚ)
          </h3>
          <p className="text-lg font-medium text-slate-700">
            Can be written as a fraction a/b where a and b are integers (b ≠ 0). Includes terminating and recurring decimals.
          </p>
        </div>

        <div className="p-4 bg-emerald-50/60 border-2 border-emerald-200 rounded-2xl space-y-2">
          <h3 className="text-2xl font-extrabold text-emerald-900 border-b border-emerald-200 pb-2">
            Irrational
          </h3>
          <p className="text-lg font-medium text-slate-700">
            Cannot be written as a fraction of two integers. Infinite, non-repeating decimal representations (e.g. √2, √3, π).
          </p>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-[#0A192F] rounded-xl bg-white">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b-2 border-[#0A192F] text-xl font-bold text-navy">
              <th className="p-3 border-r-2 border-[#0A192F]">Number</th>
              <th className="p-3 border-r-2 border-[#0A192F]">Classification</th>
              <th className="p-3">Reason</th>
            </tr>
          </thead>
          <tbody>
            {examples.map((ex, i) => (
              <tr key={i} className="border-b border-slate-200 last:border-b-0 text-xl font-bold">
                <td className="p-3 border-r-2 border-[#0A192F] font-black text-indigo-700">{ex.num}</td>
                <td className="p-3 border-r-2 border-[#0A192F] text-navy">{ex.type}</td>
                <td className="p-3 text-slate-600">{ex.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ==================== 6. RecurringDecimalTool ====================
export const RecurringDecimalTool: React.FC = () => {
  const [step, setStep] = useState(3);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          Convert Recurring Decimal to Fraction
        </div>
        <button
          type="button"
          onClick={() => setStep((s) => (s >= 3 ? 0 : s + 1))}
          className="px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold rounded-xl hover:bg-indigo-100 min-h-[48px]"
        >
          Next step
        </button>
      </div>

      <div className="p-6 bg-amber-50/40 border-2 border-amber-200 rounded-2xl space-y-3 font-mono text-2xl md:text-3xl font-black text-navy text-center">
        <div>Convert 0.7̇ = 0.7777... to a fraction:</div>
        {step >= 1 && <div className="text-indigo-700">Let x = 0.7777... (Equation 1)</div>}
        {step >= 2 && <div className="text-indigo-700">10x = 7.7777... (Equation 2)</div>}
        {step >= 3 && (
          <div className="p-4 bg-white border-2 border-indigo-300 rounded-xl space-y-2">
            <div>10x - x = 7.7777... - 0.7777...</div>
            <div className="text-3xl text-emerald-700">9x = 7  ⇒  x = 7/9</div>
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== 7. CompoundPercentTool ====================
export interface CompoundPercentToolProps {
  principal?: number;
  rate?: number;
  years?: number;
}

export const CompoundPercentTool: React.FC<CompoundPercentToolProps> = ({
  principal = 500,
  rate = 5,
  years = 3,
}) => {
  const [p, setP] = useState(principal);
  const [r, setR] = useState(rate);
  const [y, setY] = useState(years);

  const multiplier = 1 + r / 100;
  const finalAmount = p * Math.pow(multiplier, y);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">Compound Percentage Change</div>
        <button
          type="button"
          onClick={() => {
            setP(principal);
            setR(rate);
            setY(years);
          }}
          className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl min-h-[48px]"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 bg-blue-50/40 border-2 border-blue-200 rounded-2xl text-center space-y-2">
        <div className="text-3xl font-black text-navy">
          Final Amount = {p} × ({multiplier.toFixed(2)})<sup>{y}</sup> ={' '}
          <span className="text-indigo-700">£{finalAmount.toFixed(2)}</span>
        </div>
        <div className="text-xl font-bold text-slate-600">
          Multiplier: 100% + {r}% = {100 + r}% = {multiplier.toFixed(2)}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-2">
        <div className="space-y-1">
          <span className="font-bold text-navy block">Principal: £{p}</span>
          <input
            type="range"
            min="100"
            max="2000"
            step="100"
            value={p}
            onChange={(e) => setP(Number(e.target.value))}
            className="w-full h-6 accent-indigo-600"
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold text-navy block">Rate: {r}%</span>
          <input
            type="range"
            min="1"
            max="15"
            step="1"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full h-6 accent-indigo-600"
          />
        </div>
        <div className="space-y-1">
          <span className="font-bold text-navy block">Periods: {y}</span>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
            className="w-full h-6 accent-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

// ==================== 8. DirectInverseProportionGraph ====================
export const DirectInverseProportionGraph: React.FC = () => {
  const [type, setType] = useState<'direct' | 'inverse'>('direct');
  const [k, setK] = useState(4);

  return (
    <div className="w-full bg-white/80 rounded-2xl p-6 border-2 border-slate-200/80 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-black text-navy">
          {type === 'direct' ? 'Direct Proportion: y = kx' : 'Inverse Proportion: y = k / x'}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setType('direct')}
            className={`px-4 py-2 font-bold rounded-xl border min-h-[44px] ${
              type === 'direct' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Direct (y = kx)
          </button>
          <button
            type="button"
            onClick={() => setType('inverse')}
            className={`px-4 py-2 font-bold rounded-xl border min-h-[44px] ${
              type === 'inverse' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Inverse (y = k/x)
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <svg className="w-full max-w-md aspect-square bg-[#FAF7F2] rounded-2xl border-2 border-[#0A192F]" viewBox="0 0 400 400">
          {/* Axes */}
          <line x1="40" y1="360" x2="380" y2="360" stroke="#0A192F" strokeWidth="3" />
          <line x1="40" y1="360" x2="40" y2="20" stroke="#0A192F" strokeWidth="3" />
          <text x="370" y="385" fill="#0A192F" fontSize="18" fontWeight="bold">x</text>
          <text x="20" y="35" fill="#0A192F" fontSize="18" fontWeight="bold">y</text>

          {type === 'direct' ? (
            /* Straight line through origin */
            <line x1="40" y1="360" x2="360" y2="60" stroke="#2563EB" strokeWidth="4" />
          ) : (
            /* Hyperbola curve */
            <path
              d="M 50 40 Q 60 280 360 340"
              fill="none"
              stroke="#DC2626"
              strokeWidth="4"
            />
          )}
        </svg>
      </div>

      <div className="text-center font-bold text-slate-600 text-lg">
        {type === 'direct'
          ? 'As x doubles, y doubles. Graph is a straight line through the origin (0,0).'
          : 'As x doubles, y halves. Graph is a smooth curve that never touches the axes.'}
      </div>
    </div>
  );
};
