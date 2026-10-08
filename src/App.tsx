import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Maximize,
  Minimize,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Zap,
  ZapOff,
} from 'lucide-react';

import { UNITS_REGISTRY } from './content';
import { Unit, Subtopic, Step, WhiteboardStroke, ToolType } from './types/content';
import { StepRenderer } from './components/step/StepRenderer';
import { PracticeRenderer } from './components/step/PracticeRenderer';
import { WhiteboardCanvas } from './components/board/WhiteboardCanvas';
import { WhiteboardToolbar } from './components/board/WhiteboardToolbar';
import { HelpModal } from './components/board/HelpModal';

const STROKES_STORAGE_KEY = 'maths_board_strokes_stage9_v1';
const STEP_MEMORY_STORAGE_KEY = 'maths_board_subtopic_step_memory_stage9_v1';

export default function App() {
  // Navigation State
  const [selectedUnitId, setSelectedUnitId] = useState<string>(UNITS_REGISTRY[0].id);
  const currentUnit = useMemo(
    () => UNITS_REGISTRY.find((u) => u.id === selectedUnitId) || UNITS_REGISTRY[0],
    [selectedUnitId]
  );

  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>(
    currentUnit.subtopics[0]?.id || ''
  );

  // Sync subtopic when unit changes
  useEffect(() => {
    if (currentUnit.subtopics.length > 0) {
      // Restore remembered step if any
      setSelectedSubtopicId(currentUnit.subtopics[0].id);
    } else {
      setSelectedSubtopicId('');
    }
  }, [currentUnit]);

  const currentSubtopic: Subtopic | undefined = useMemo(
    () => currentUnit.subtopics.find((s) => s.id === selectedSubtopicId),
    [currentUnit, selectedSubtopicId]
  );

  // Build complete steps list (including synthesized Practice step if questions exist)
  const stepsList: Step[] = useMemo(() => {
    if (!currentSubtopic) return [];
    const base = [...currentSubtopic.steps];
    if (currentSubtopic.practice && currentSubtopic.practice.length > 0) {
      const hasPracticeStep = base.some((s) => s.kind === 'practice');
      if (!hasPracticeStep) {
        base.push({
          id: `${currentSubtopic.id}_practice`,
          title: 'Practice Questions',
          kind: 'practice',
          blocks: [],
        });
      }
    }
    return base;
  }, [currentSubtopic]);

  // Remember last step per subtopic
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [subtopicStepMemory, setSubtopicStepMemory] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(STEP_MEMORY_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // When subtopic changes, restore remembered step index
  useEffect(() => {
    if (selectedSubtopicId && subtopicStepMemory[selectedSubtopicId] !== undefined) {
      const remembered = subtopicStepMemory[selectedSubtopicId];
      setStepIndex(Math.min(remembered, Math.max(0, stepsList.length - 1)));
    } else {
      setStepIndex(0);
    }
  }, [selectedSubtopicId, stepsList.length, subtopicStepMemory]);

  const handleStepChange = (newIndex: number) => {
    setStepIndex(newIndex);
    if (selectedSubtopicId) {
      setSubtopicStepMemory((prev) => {
        const next = { ...prev, [selectedSubtopicId]: newIndex };
        try {
          localStorage.setItem(STEP_MEMORY_STORAGE_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    }
  };

  const currentStep: Step | undefined = stepsList[stepIndex];

  // Fullscreen State
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Animation Toggle (Normal, Slow, Off)
  const [animSpeed, setAnimSpeed] = useState<'normal' | 'slow' | 'off'>('normal');

  // Help Modal State
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  // Whiteboard State
  const [isDrawMode, setIsDrawMode] = useState(false);
  const [tool, setTool] = useState<ToolType>('pen');
  const [color, setColor] = useState<string>('#0A192F');
  const [strokeWidth, setStrokeWidth] = useState<number>(7);
  const [dashed, setDashed] = useState<boolean>(false);

  // Screen key for stroke storage
  const currentScreenKey = useMemo(() => {
    return `${selectedUnitId}_${selectedSubtopicId || 'nosub'}_step_${stepIndex}`;
  }, [selectedUnitId, selectedSubtopicId, stepIndex]);

  // Strokes per screen
  const [allStrokes, setAllStrokes] = useState<Record<string, WhiteboardStroke[]>>(() => {
    try {
      const saved = localStorage.getItem(STROKES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Undo / Redo history stacks per screen
  const [undoStack, setUndoStack] = useState<WhiteboardStroke[][]>([]);
  const [redoStack, setRedoStack] = useState<WhiteboardStroke[][]>([]);

  // Current screen strokes
  const currentStrokes = useMemo(() => {
    return allStrokes[currentScreenKey] || [];
  }, [allStrokes, currentScreenKey]);

  // Clear undo/redo when screen key changes
  useEffect(() => {
    setUndoStack([]);
    setRedoStack([]);
  }, [currentScreenKey]);

  // Update strokes for current screen
  const handleStrokesChange = useCallback(
    (newStrokes: WhiteboardStroke[]) => {
      setUndoStack((prev) => [...prev, currentStrokes]);
      setRedoStack([]);

      setAllStrokes((prev) => {
        const next = { ...prev, [currentScreenKey]: newStrokes };
        try {
          localStorage.setItem(STROKES_STORAGE_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [currentScreenKey, currentStrokes]
  );

  const handleUndo = () => {
    if (undoStack.length === 0) return;
    const previous = undoStack[undoStack.length - 1];
    setUndoStack((prev) => prev.slice(0, -1));
    setRedoStack((prev) => [...prev, currentStrokes]);

    setAllStrokes((prev) => {
      const next = { ...prev, [currentScreenKey]: previous };
      try {
        localStorage.setItem(STROKES_STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const nextStrokes = redoStack[redoStack.length - 1];
    setRedoStack((prev) => prev.slice(0, -1));
    setUndoStack((prev) => [...prev, currentStrokes]);

    setAllStrokes((prev) => {
      const next = { ...prev, [currentScreenKey]: nextStrokes };
      try {
        localStorage.setItem(STROKES_STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleClearStrokes = () => {
    setUndoStack((prev) => [...prev, currentStrokes]);
    setRedoStack([]);
    setAllStrokes((prev) => {
      const next = { ...prev, [currentScreenKey]: [] };
      try {
        localStorage.setItem(STROKES_STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex flex-col bg-[#FAF7F2] text-[#0A192F] select-none overflow-hidden overscroll-none ${
        animSpeed === 'slow' ? 'motion-safe:transition-all duration-700' : ''
      }`}
      style={{ touchAction: 'none' }}
    >
      {/* =========================================================================
          TOP BAR (Strict Contract: Brand / Two Dropdowns & Step / Primary Actions)
          ========================================================================= */}
      <header className="h-20 shrink-0 px-6 bg-white/90 backdrop-blur-md border-b-2 border-slate-200/90 flex items-center justify-between gap-4 z-30 shadow-xs">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            className="w-4 h-10 rounded-full"
            style={{ backgroundColor: currentUnit.accentColor }}
          />
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#0A192F] whitespace-nowrap">
            Maths Teacher Board: Stage 9
          </h1>
        </div>

        {/* Dropdowns Zone: Unit Dropdown + Subtopic Dropdown */}
        <div className="flex items-center gap-3 flex-1 max-w-3xl min-w-0">
          {/* Unit Dropdown */}
          <div className="flex-1 min-w-[220px]">
            <select
              value={selectedUnitId}
              onChange={(e) => setSelectedUnitId(e.target.value)}
              className="w-full h-13 px-4 text-lg md:text-xl font-extrabold bg-[#FAF7F2] border-2 border-slate-300 rounded-2xl text-[#0A192F] cursor-pointer focus:outline-hidden focus:ring-3 focus:ring-indigo-500 truncate"
            >
              {UNITS_REGISTRY.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.title} {u.codes && u.codes.length > 0 ? `(${u.codes.join(', ')})` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Subtopic Dropdown */}
          {currentUnit.subtopics.length > 0 && (
            <div className="flex-1 min-w-[200px]">
              <select
                value={selectedSubtopicId}
                onChange={(e) => setSelectedSubtopicId(e.target.value)}
                className="w-full h-13 px-4 text-lg md:text-xl font-bold bg-[#FAF7F2] border-2 border-slate-300 rounded-2xl text-[#0A192F] cursor-pointer focus:outline-hidden focus:ring-3 focus:ring-indigo-500 truncate"
              >
                {currentUnit.subtopics.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Current Step Label / Cambridge Codes Badge */}
          {currentSubtopic?.codes && currentSubtopic.codes.length > 0 && (
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-xl text-slate-700 font-extrabold text-sm shrink-0">
              <span>{currentSubtopic.codes.join(' · ')}</span>
            </div>
          )}
        </div>

        {/* Actions Zone: Animation speed, Help Guide, Fullscreen */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Animation Toggle */}
          <button
            type="button"
            onClick={() =>
              setAnimSpeed((prev) =>
                prev === 'normal' ? 'slow' : prev === 'slow' ? 'off' : 'normal'
              )
            }
            title={`Animation Speed: ${animSpeed}`}
            className="h-13 px-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-2xl text-slate-700 font-bold flex items-center gap-1.5 min-w-[52px]"
          >
            {animSpeed === 'off' ? (
              <ZapOff className="w-5 h-5 text-slate-400" />
            ) : (
              <Zap className={`w-5 h-5 ${animSpeed === 'slow' ? 'text-amber-500' : 'text-indigo-600'}`} />
            )}
            <span className="hidden sm:inline capitalize text-sm">{animSpeed}</span>
          </button>

          {/* Help Modal '?' Button */}
          <button
            type="button"
            onClick={() => setIsHelpOpen(true)}
            title="Teacher Guide"
            className="w-13 h-13 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 flex items-center justify-center min-w-[52px]"
          >
            <HelpCircle className="w-7 h-7" />
          </button>

          {/* Fullscreen Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            className="w-13 h-13 rounded-2xl bg-indigo-700 hover:bg-indigo-800 text-white flex items-center justify-center shadow-sm min-w-[52px]"
          >
            {isFullscreen ? <Minimize className="w-7 h-7" /> : <Maximize className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* =========================================================================
          MIDDLE STAGE (Content Layer + Whiteboard Overlay)
          ========================================================================= */}
      <main className="relative flex-1 w-full overflow-hidden flex flex-col">
        {/* Full-Stage Whiteboard Canvas Layer */}
        <WhiteboardCanvas
          isDrawMode={isDrawMode}
          tool={tool}
          color={color}
          width={strokeWidth}
          dashed={dashed}
          strokes={currentStrokes}
          onStrokesChange={handleStrokesChange}
        />

        {/* Floating Dockable Whiteboard Toolbar */}
        <WhiteboardToolbar
          isDrawMode={isDrawMode}
          onToggleDrawMode={() => setIsDrawMode((d) => !d)}
          tool={tool}
          onSelectTool={setTool}
          color={color}
          onSelectColor={setColor}
          width={strokeWidth}
          onSelectWidth={setStrokeWidth}
          dashed={dashed}
          onToggleDashed={() => setDashed((d) => !d)}
          canUndo={undoStack.length > 0}
          canRedo={redoStack.length > 0}
          onUndo={handleUndo}
          onRedo={handleRedo}
          onClear={handleClearStrokes}
        />

        {/* Content Underneath */}
        <div className="relative z-10 w-full h-full flex flex-col overflow-hidden">
          {stepsList.length === 0 ? (
            /* Coming Soon Screen for subtopics/units without steps yet */
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: currentUnit.accentColor }}
              >
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-xl font-extrabold text-slate-500 uppercase tracking-wider">
                  {currentUnit.title}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#0A192F]">
                  {currentSubtopic ? currentSubtopic.title : currentUnit.title}
                </h2>
              </div>
              {((currentSubtopic?.codes && currentSubtopic.codes.length > 0) ||
                (currentUnit.codes && currentUnit.codes.length > 0)) && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {(currentSubtopic?.codes || currentUnit.codes || []).map((c) => (
                    <span
                      key={c}
                      className="px-3.5 py-1.5 bg-slate-200/80 rounded-xl text-slate-800 font-extrabold text-lg"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
              <div className="max-w-xl text-2xl font-semibold text-slate-600 leading-relaxed">
                Lesson content for this subtopic is being prepared for Cambridge Lower Secondary Stage 9.
              </div>
              <div className="p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl text-xl font-bold text-amber-900">
                To test Whiteboard tools and figures, switch to &quot;0 Demo (Testing &amp; Visuals)&quot; in the dropdown above.
              </div>
            </div>
          ) : currentStep ? (
            /* Active Step Display */
            currentStep.kind === 'practice' ? (
              <PracticeRenderer questions={currentSubtopic?.practice || []} />
            ) : (
              <StepRenderer step={currentStep} />
            )
          ) : null}
        </div>
      </main>

      {/* =========================================================================
          BOTTOM BAR (Back / Next / Progress Strip / Counter)
          ========================================================================= */}
      <footer className="h-24 shrink-0 px-8 bg-white/95 backdrop-blur-md border-t-2 border-slate-200/90 flex items-center justify-between gap-6 z-30 shadow-md">
        {/* Back Button */}
        <button
          type="button"
          disabled={stepIndex <= 0}
          onClick={() => handleStepChange(stepIndex - 1)}
          className="flex items-center gap-3 px-8 h-16 rounded-2xl font-black text-2xl border-2 border-slate-300 bg-slate-100 hover:bg-slate-200 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all min-w-[140px]"
        >
          <ChevronLeft className="w-8 h-8" />
          <span>Back</span>
        </button>

        {/* Tappable Progress Strip & Counter */}
        {stepsList.length > 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-2 max-w-2xl px-4">
            <div className="flex items-center gap-2.5 w-full justify-center overflow-x-auto py-1">
              {stepsList.map((st, idx) => {
                const isActive = idx === stepIndex;
                const isPast = idx < stepIndex;

                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => handleStepChange(idx)}
                    title={st.title}
                    className={`h-4.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'w-14 bg-indigo-600 ring-4 ring-indigo-200 shadow-sm'
                        : isPast
                        ? 'w-6 bg-slate-400 hover:bg-slate-500'
                        : 'w-6 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                );
              })}
            </div>

            {/* Counter */}
            <div className="text-xl font-extrabold text-[#0A192F]">
              <span>Step {stepIndex + 1} of {stepsList.length}</span>
              {currentStep && (
                <span className="text-slate-500 font-bold ml-2">
                  — {currentStep.title}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-xl font-extrabold text-slate-500">
            {currentSubtopic ? currentSubtopic.title : currentUnit.title}
          </div>
        )}

        {/* Next Button */}
        <button
          type="button"
          disabled={stepIndex >= stepsList.length - 1}
          onClick={() => handleStepChange(stepIndex + 1)}
          className="flex items-center gap-3 px-8 h-16 rounded-2xl font-black text-2xl text-white bg-indigo-700 hover:bg-indigo-800 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-md min-w-[140px]"
        >
          <span>Next</span>
          <ChevronRight className="w-8 h-8" />
        </button>
      </footer>

      {/* Hidden Help Guide Modal */}
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}
