import React, { useState } from 'react';
import { PracticeQuestion, WorkingGridType } from '../../types/content';
import { FigureRenderer } from '../library/FigureRenderer';
import { WorkingGrid } from '../board/WorkingGrid';
import { Grid, Square, AlignJustify, Compass } from 'lucide-react';

interface PracticeRendererProps {
  questions: PracticeQuestion[];
}

export const PracticeRenderer: React.FC<PracticeRendererProps> = ({ questions }) => {
  const [selectedLevel, setSelectedLevel] = useState<1 | 2 | 3>(1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [gridType, setGridType] = useState<WorkingGridType>('square');

  // Filter questions for the selected level
  const levelQuestions = questions.filter((q) => q.level === selectedLevel);
  const currentQuestion = levelQuestions[selectedQuestionIndex] || levelQuestions[0];

  return (
    <div className="w-full h-full flex flex-col p-6 md:p-8 select-none overflow-hidden">
      {/* Top Controls: Level Chips & Question Index & Grid Style Toggle */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-200 shrink-0">
        {/* Level Chips */}
        <div className="flex items-center gap-2">
          {([1, 2, 3] as const).map((lvl) => {
            const count = questions.filter((q) => q.level === lvl).length;
            const label =
              lvl === 1 ? 'Level 1: Basic' : lvl === 2 ? 'Level 2: Medium' : 'Level 3: Challenge';
            const isActive = selectedLevel === lvl;

            return (
              <button
                key={lvl}
                type="button"
                onClick={() => {
                  setSelectedLevel(lvl);
                  setSelectedQuestionIndex(0);
                }}
                className={`px-5 py-2.5 rounded-2xl text-xl font-extrabold transition-all min-h-[52px] border-2 ${
                  isActive
                    ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{label}</span>
                {count > 0 && <span className="ml-2 opacity-75 text-base">({count})</span>}
              </button>
            );
          })}
        </div>

        {/* Question Selector if multiple in level */}
        {levelQuestions.length > 1 && (
          <div className="flex items-center gap-2">
            {levelQuestions.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedQuestionIndex(idx)}
                className={`w-12 h-12 rounded-xl text-xl font-black transition-all border-2 ${
                  selectedQuestionIndex === idx
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Q{idx + 1}
              </button>
            ))}
          </div>
        )}

        {/* Working Space Background Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-2xl">
          {(
            [
              { type: 'blank', label: 'Blank' },
              { type: 'dot', label: 'Dot' },
              { type: 'square', label: 'Grid' },
              { type: 'lined', label: 'Lined' },
              { type: 'axes', label: 'Axes' },
            ] as const
          ).map((g) => (
            <button
              key={g.type}
              type="button"
              onClick={() => setGridType(g.type)}
              className={`px-3 py-2 text-sm md:text-base font-bold rounded-xl transition-all min-h-[44px] ${
                gridType === g.type
                  ? 'bg-amber-100 text-amber-900 font-black'
                  : 'text-slate-600 hover:text-navy hover:bg-slate-50'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Layout: Question ~40%, Working Space ~60% */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 min-h-0 overflow-hidden">
        {/* Left: Question + Visual (~40% = col-span-5) */}
        <div className="lg:col-span-5 flex flex-col space-y-6 overflow-y-auto pr-2">
          {currentQuestion ? (
            <>
              <div className="text-[28px] md:text-[32px] font-extrabold text-[#0A192F] leading-snug">
                {currentQuestion.text}
              </div>

              {currentQuestion.figure && (
                <div className="w-full">
                  <FigureRenderer figure={currentQuestion.figure} />
                </div>
              )}
            </>
          ) : (
            <div className="text-2xl text-slate-500 font-bold">
              Practice question coming soon.
            </div>
          )}
        </div>

        {/* Right: Large Empty Working Space (~60% = col-span-7) */}
        <div className="lg:col-span-7 relative h-full rounded-3xl border-2 border-slate-300/80 overflow-hidden shadow-inner bg-[#FAF7F2]">
          <WorkingGrid type={gridType} />
        </div>
      </div>
    </div>
  );
};
