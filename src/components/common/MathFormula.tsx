import React, { useMemo } from 'react';
import katex from 'katex';

interface MathFormulaProps {
  math: string;
  block?: boolean;
  className?: string;
  label?: string;
}

export const MathFormula: React.FC<MathFormulaProps> = ({
  math,
  block = false,
  className = '',
  label,
}) => {
  const renderedHtml = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return `<code>${math}</code>`;
    }
  }, [math, block]);

  if (block) {
    return (
      <div className={`my-3 text-center ${className}`}>
        {label && (
          <div className="text-xl font-bold text-slate-700 mb-1">{label}</div>
        )}
        <div
          className="inline-block py-2 px-4 rounded-xl bg-amber-50/60 border border-amber-200/50 text-2xl md:text-3xl text-navy"
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
      </div>
    );
  }

  return (
    <span
      className={`inline-block align-middle text-2xl ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
