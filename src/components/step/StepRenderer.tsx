import React, { useState } from 'react';
import { Step, Block } from '../../types/content';
import { MathFormula } from '../common/MathFormula';
import { FigureRenderer } from '../library/FigureRenderer';
import { ChevronRight, RotateCcw } from 'lucide-react';

interface StepRendererProps {
  step: Step;
}

export const StepRenderer: React.FC<StepRendererProps> = ({ step }) => {
  const [revealedBuildIndex, setRevealedBuildIndex] = useState<Record<number, number>>({});

  const handleNextBuildStep = (blockIndex: number, total: number) => {
    setRevealedBuildIndex((prev) => {
      const current = prev[blockIndex] ?? 0;
      return {
        ...prev,
        [blockIndex]: Math.min(total - 1, current + 1),
      };
    });
  };

  const handleResetBuildSteps = (blockIndex: number) => {
    setRevealedBuildIndex((prev) => ({
      ...prev,
      [blockIndex]: 0,
    }));
  };

  const renderBlock = (block: Block, blockIndex: number) => {
    switch (block.type) {
      case 'text':
        return (
          <p
            key={blockIndex}
            className="text-[28px] md:text-[32px] leading-relaxed font-semibold text-[#0A192F] max-w-4xl"
          >
            {block.content}
          </p>
        );

      case 'objective_item':
        return (
          <div
            key={blockIndex}
            className="p-6 bg-white/95 border-2 border-indigo-200/80 rounded-2xl shadow-xs flex items-start gap-5 max-w-4xl"
          >
            <span className="mt-1 px-3.5 py-1.5 bg-slate-200 text-slate-800 text-base font-black rounded-xl tracking-wide shrink-0">
              {block.code}
            </span>
            <span className="text-[28px] md:text-[32px] font-bold text-[#0A192F] leading-snug">
              {block.text}
            </span>
          </div>
        );

      case 'keyterm':
        return (
          <div key={blockIndex} className="my-2 space-y-2">
            <div className="text-[44px] md:text-[52px] font-black tracking-tight text-[#0A192F]">
              {block.term}
            </div>
            {block.definition && (
              <p className="text-[28px] md:text-[30px] font-medium text-slate-700 leading-normal max-w-3xl">
                {block.definition}
              </p>
            )}
          </div>
        );

      case 'formula':
        return (
          <div key={blockIndex} className="my-4">
            <MathFormula math={block.math} block={true} label={block.label} />
          </div>
        );

      case 'table':
        return (
          <div
            key={blockIndex}
            className="my-4 overflow-x-auto border-2 border-[#0A192F] rounded-2xl bg-white max-w-3xl"
          >
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-blue-50/70 border-b-2 border-[#0A192F]">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="p-4 text-2xl font-black text-[#0A192F] border-r-2 border-[#0A192F] last:border-r-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 text-[26px] font-bold text-[#0A192F]"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="p-4 border-r-2 border-[#0A192F] last:border-r-0"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'list':
        return (
          <ul key={blockIndex} className="my-3 space-y-3 max-w-3xl">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="text-[28px] md:text-[30px] font-semibold text-[#0A192F] flex items-start gap-3"
              >
                <span className="text-indigo-600 mt-1 select-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'sentence_frame':
        return (
          <div
            key={blockIndex}
            className="my-4 p-6 bg-amber-50/70 border-2 border-amber-300 rounded-2xl text-[28px] md:text-[32px] font-bold text-[#0A192F] leading-relaxed max-w-3xl"
          >
            {block.template}
          </div>
        );

      case 'figure':
        return (
          <div key={blockIndex} className="my-4 max-w-3xl">
            <FigureRenderer figure={block.figure} />
          </div>
        );

      case 'build_steps': {
        const currentRevealed = revealedBuildIndex[blockIndex] ?? 0;
        const totalSteps = block.steps.length;

        return (
          <div key={blockIndex} className="my-4 space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={currentRevealed >= totalSteps - 1}
                onClick={() => handleNextBuildStep(blockIndex, totalSteps)}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-extrabold text-xl rounded-2xl min-h-[56px] shadow-sm active:scale-95 transition-all"
              >
                <span>Next step</span>
                <ChevronRight className="w-6 h-6" />
              </button>
              {currentRevealed > 0 && (
                <button
                  type="button"
                  onClick={() => handleResetBuildSteps(blockIndex)}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-lg rounded-2xl min-h-[56px]"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              {block.steps.slice(0, currentRevealed + 1).map((stepGroup, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 bg-white/90 border-2 border-indigo-200/80 rounded-2xl shadow-xs space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {stepGroup.map((subBlock, subIdx) =>
                    renderBlock(subBlock, subIdx)
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-8 md:p-12 overflow-y-auto select-none">
      {/* Title */}
      <h1 className="text-[40px] md:text-[46px] font-black tracking-tight text-[#0A192F] mb-6 leading-tight">
        {step.title}
      </h1>

      {/* Blocks */}
      <div className="flex-1 space-y-6">
        {step.blocks.map((b, i) => renderBlock(b, i))}
      </div>
    </div>
  );
};
