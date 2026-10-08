import React, { useState } from 'react';
import {
  Pen,
  Hand,
  Eraser,
  Highlighter,
  Undo2,
  Redo2,
  Trash2,
  Minus,
  Square,
  Circle,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Move,
  Minimize2,
  Maximize2,
} from 'lucide-react';
import { ToolType } from '../../types/content';

interface WhiteboardToolbarProps {
  isDrawMode: boolean;
  onToggleDrawMode: () => void;
  tool: ToolType;
  onSelectTool: (tool: ToolType) => void;
  color: string;
  onSelectColor: (color: string) => void;
  width: number;
  onSelectWidth: (width: number) => void;
  dashed: boolean;
  onToggleDashed: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
}

const PALETTE = [
  { name: 'Navy', hex: '#0A192F' },
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Red', hex: '#DC2626' },
  { name: 'Green', hex: '#16A34A' },
  { name: 'Orange', hex: '#D97706' },
  { name: 'Purple', hex: '#7C3AED' },
];

const WIDTHS = [
  { label: 'Fine', value: 3 },
  { label: 'Medium', value: 7 },
  { label: 'Bold', value: 14 },
];

export const WhiteboardToolbar: React.FC<WhiteboardToolbarProps> = ({
  isDrawMode,
  onToggleDrawMode,
  tool,
  onSelectTool,
  color,
  onSelectColor,
  width,
  onSelectWidth,
  dashed,
  onToggleDashed,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onClear,
}) => {
  const [dockPosition, setDockPosition] = useState<'left' | 'right' | 'bottom'>('left');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showSecondaryTools, setShowSecondaryTools] = useState(false);

  // Position class
  const getDockClasses = () => {
    if (dockPosition === 'left') {
      return 'left-4 top-24 flex-col';
    }
    if (dockPosition === 'right') {
      return 'right-4 top-24 flex-col';
    }
    return 'bottom-20 left-1/2 -translate-x-1/2 flex-row';
  };

  return (
    <>
      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#FAF7F2] border-2 border-red-300 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <Trash2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold text-navy">Clear All Writing?</h3>
            <p className="text-xl text-slate-600">
              This will erase all whiteboard ink on this screen.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-4 px-6 text-xl font-bold bg-slate-200 hover:bg-slate-300 active:scale-98 text-slate-800 rounded-2xl min-h-[64px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onClear();
                  setShowClearConfirm(false);
                }}
                className="flex-1 py-4 px-6 text-xl font-bold bg-red-600 hover:bg-red-700 active:scale-98 text-white rounded-2xl min-h-[64px] shadow-lg"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toolbar Container */}
      <div
        className={`fixed ${getDockClasses()} z-45 flex items-center gap-2.5 transition-all duration-200 select-none`}
        style={{ touchAction: 'manipulation' }}
      >
        {/* BIG ALWAYS-VISIBLE MODE TOGGLE: Draw vs Interact */}
        <button
          type="button"
          onClick={onToggleDrawMode}
          title={isDrawMode ? 'Switch to Interact' : 'Switch to Draw'}
          className={`flex items-center justify-center gap-2 px-5 min-h-[64px] min-w-[64px] rounded-2xl shadow-xl font-extrabold text-xl transition-all active:scale-95 border-2 ${
            isDrawMode
              ? 'bg-amber-500 text-white border-amber-400 ring-4 ring-amber-300/40'
              : 'bg-indigo-700 text-white border-indigo-600 ring-4 ring-indigo-400/30'
          }`}
        >
          {isDrawMode ? (
            <>
              <Pen className="w-7 h-7" />
              <span className="tracking-wide">DRAW</span>
            </>
          ) : (
            <>
              <Hand className="w-7 h-7" />
              <span className="tracking-wide">INTERACT</span>
            </>
          )}
        </button>

        {/* Toolbar Panel (Shown in Draw mode or when not collapsed) */}
        {!isCollapsed && (
          <div
            className={`flex ${
              dockPosition === 'bottom' ? 'flex-row' : 'flex-col'
            } items-center gap-2 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-slate-300/80 shadow-2xl`}
          >
            {/* Dock Position / Collapse Controls */}
            <div
              className={`flex ${
                dockPosition === 'bottom' ? 'flex-row' : 'flex-row'
              } items-center justify-between w-full px-1 border-b border-slate-200 pb-1.5 gap-1`}
            >
              <button
                type="button"
                onClick={() => {
                  setDockPosition((prev) =>
                    prev === 'left' ? 'right' : prev === 'right' ? 'bottom' : 'left'
                  );
                }}
                title="Dock position"
                className="p-2 text-slate-500 hover:text-navy hover:bg-slate-100 rounded-xl"
              >
                <Move className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setIsCollapsed(true)}
                title="Minimize toolbar"
                className="p-2 text-slate-500 hover:text-navy hover:bg-slate-100 rounded-xl"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Drawing Tools (only enabled or prominent in Draw mode) */}
            <div
              className={`flex ${
                dockPosition === 'bottom' ? 'flex-row' : 'flex-col'
              } items-center gap-1.5`}
            >
              {/* Pen */}
              <button
                type="button"
                disabled={!isDrawMode}
                onClick={() => onSelectTool('pen')}
                className={`p-3 rounded-xl transition-all min-w-[52px] min-h-[52px] flex items-center justify-center ${
                  tool === 'pen' && isDrawMode
                    ? 'bg-amber-100 text-amber-900 border-2 border-amber-500 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                } ${!isDrawMode ? 'opacity-40' : ''}`}
                title="Pen"
              >
                <Pen className="w-6 h-6" />
              </button>

              {/* Highlighter */}
              <button
                type="button"
                disabled={!isDrawMode}
                onClick={() => onSelectTool('highlighter')}
                className={`p-3 rounded-xl transition-all min-w-[52px] min-h-[52px] flex items-center justify-center ${
                  tool === 'highlighter' && isDrawMode
                    ? 'bg-amber-100 text-amber-900 border-2 border-amber-500 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                } ${!isDrawMode ? 'opacity-40' : ''}`}
                title="Highlighter"
              >
                <Highlighter className="w-6 h-6" />
              </button>

              {/* Eraser */}
              <button
                type="button"
                disabled={!isDrawMode}
                onClick={() => onSelectTool('eraser')}
                className={`p-3 rounded-xl transition-all min-w-[52px] min-h-[52px] flex items-center justify-center ${
                  tool === 'eraser' && isDrawMode
                    ? 'bg-red-100 text-red-900 border-2 border-red-500 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                } ${!isDrawMode ? 'opacity-40' : ''}`}
                title="Stroke Eraser"
              >
                <Eraser className="w-6 h-6" />
              </button>

              {/* Secondary Shape Helpers Toggle */}
              <button
                type="button"
                disabled={!isDrawMode}
                onClick={() => setShowSecondaryTools((prev) => !prev)}
                className={`p-3 rounded-xl transition-all min-w-[52px] min-h-[52px] flex items-center justify-center ${
                  ['line', 'rect', 'circle'].includes(tool) && isDrawMode
                    ? 'bg-blue-100 text-blue-900 border-2 border-blue-500'
                    : 'text-slate-700 hover:bg-slate-100'
                } ${!isDrawMode ? 'opacity-40' : ''}`}
                title="Shapes and Lines"
              >
                <MoreVertical className="w-6 h-6" />
              </button>
            </div>

            {/* Secondary Helpers Popover / Expansion */}
            {showSecondaryTools && isDrawMode && (
              <div
                className={`flex ${
                  dockPosition === 'bottom' ? 'flex-row' : 'flex-col'
                } items-center gap-1.5 p-1.5 bg-slate-50 border border-slate-200 rounded-xl my-1`}
              >
                <button
                  type="button"
                  onClick={() => onSelectTool('line')}
                  className={`p-2.5 rounded-lg ${
                    tool === 'line' ? 'bg-blue-500 text-white' : 'text-slate-700 hover:bg-slate-200'
                  }`}
                  title="Straight line (snaps to axes)"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTool('rect')}
                  className={`p-2.5 rounded-lg ${
                    tool === 'rect' ? 'bg-blue-500 text-white' : 'text-slate-700 hover:bg-slate-200'
                  }`}
                  title="Rectangle"
                >
                  <Square className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectTool('circle')}
                  className={`p-2.5 rounded-lg ${
                    tool === 'circle' ? 'bg-blue-500 text-white' : 'text-slate-700 hover:bg-slate-200'
                  }`}
                  title="Circle / Ellipse"
                >
                  <Circle className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={onToggleDashed}
                  className={`px-2 py-1 text-xs font-bold rounded ${
                    dashed ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                  title="Dashed line toggle"
                >
                  ---
                </button>
              </div>
            )}

            <div
              className={`w-full ${
                dockPosition === 'bottom' ? 'h-8 w-px' : 'h-px w-full'
              } bg-slate-200 my-1`}
            />

            {/* 6 Color Swatches */}
            <div
              className={`grid ${
                dockPosition === 'bottom' ? 'grid-flow-col grid-rows-2' : 'grid-cols-2'
              } gap-1.5`}
            >
              {PALETTE.map((p) => (
                <button
                  key={p.hex}
                  type="button"
                  disabled={!isDrawMode}
                  onClick={() => onSelectColor(p.hex)}
                  className={`w-7 h-7 rounded-full transition-transform ${
                    color === p.hex && isDrawMode
                      ? 'scale-125 ring-3 ring-offset-2 ring-slate-800'
                      : 'hover:scale-110'
                  } ${!isDrawMode ? 'opacity-40' : ''}`}
                  style={{ backgroundColor: p.hex }}
                  title={p.name}
                />
              ))}
            </div>

            <div
              className={`w-full ${
                dockPosition === 'bottom' ? 'h-8 w-px' : 'h-px w-full'
              } bg-slate-200 my-1`}
            />

            {/* 3 Thicknesses */}
            <div
              className={`flex ${
                dockPosition === 'bottom' ? 'flex-row' : 'flex-col'
              } items-center gap-1.5`}
            >
              {WIDTHS.map((w) => (
                <button
                  key={w.value}
                  type="button"
                  disabled={!isDrawMode}
                  onClick={() => onSelectWidth(w.value)}
                  className={`p-2 rounded-xl flex items-center justify-center min-w-[36px] min-h-[36px] ${
                    width === w.value && isDrawMode
                      ? 'bg-slate-200 ring-2 ring-slate-700 font-bold'
                      : 'hover:bg-slate-100 text-slate-700'
                  } ${!isDrawMode ? 'opacity-40' : ''}`}
                  title={w.label}
                >
                  <span
                    className="rounded-full bg-slate-800 inline-block"
                    style={{
                      width: `${w.value + 4}px`,
                      height: `${w.value + 4}px`,
                    }}
                  />
                </button>
              ))}
            </div>

            <div
              className={`w-full ${
                dockPosition === 'bottom' ? 'h-8 w-px' : 'h-px w-full'
              } bg-slate-200 my-1`}
            />

            {/* Undo / Redo / Clear */}
            <div
              className={`flex ${
                dockPosition === 'bottom' ? 'flex-row' : 'flex-col'
              } items-center gap-1`}
            >
              <button
                type="button"
                disabled={!canUndo}
                onClick={onUndo}
                className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:hover:bg-transparent"
                title="Undo"
              >
                <Undo2 className="w-5 h-5" />
              </button>
              <button
                type="button"
                disabled={!canRedo}
                onClick={onRedo}
                className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:hover:bg-transparent"
                title="Redo"
              >
                <Redo2 className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setShowClearConfirm(true)}
                className="p-2.5 text-red-600 hover:bg-red-50 rounded-xl"
                title="Clear screen"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Collapsed Restore Button */}
        {isCollapsed && (
          <button
            type="button"
            onClick={() => setIsCollapsed(false)}
            title="Expand toolbar"
            className="p-3 bg-white border border-slate-300 rounded-2xl shadow-xl text-slate-700 hover:bg-slate-50"
          >
            <Maximize2 className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
};
