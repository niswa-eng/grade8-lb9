import React from 'react';
import { X, Pen, Hand, Move, Layers, Grid, ShieldCheck } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-60 p-4">
      <div className="bg-[#FAF7F2] border-2 border-slate-300 rounded-3xl max-w-2xl w-full p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <h2 className="text-3xl font-extrabold text-[#0A192F]">
            Teacher Guide &amp; Controls
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-3 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-2xl min-h-[52px] min-w-[52px] flex items-center justify-center"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="space-y-5 text-slate-700 text-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 text-amber-800 rounded-2xl shrink-0">
              <Pen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0A192F]">Draw Mode (Pencil)</h3>
              <p>
                Enables ink writing and drawing over the slide. All touches and stylus
                strokes go to the board canvas. Underneath buttons and sliders will not
                trigger while in Draw mode.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 text-indigo-800 rounded-2xl shrink-0">
              <Hand className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0A192F]">Interact Mode (Hand)</h3>
              <p>
                Allows tapping interactive diagrams, dragging sliders, operating balance
                scales, spinning wheels, and manipulating 3D solids. Ink remains visible on top.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-800 rounded-2xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0A192F]">Palm &amp; Stylus Rejection</h3>
              <p>
                When using a hardware stylus, finger touch is automatically ignored for drawing.
                Large contact surface areas (palms resting on the display) are rejected.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl shrink-0">
              <Move className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0A192F]">Toolbar Docking</h3>
              <p>
                Tap the move icon on the toolbar to dock it on the Left, Right, or Bottom of the screen
                to accommodate standing on either side of the IFP.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 text-purple-800 rounded-2xl shrink-0">
              <Grid className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0A192F]">Working Space Backgrounds</h3>
              <p>
                In Practice mode, use the background selector chips to toggle between Blank,
                Dot grid, Square grid, Ruled lines, and Graph-paper coordinate axes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 text-amber-800 rounded-2xl shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0A192F]">Persistent Screen Ink</h3>
              <p>
                Your written annotations are preserved individually per slide during your session,
                so you can freely step backwards and forwards without losing whiteboard notes.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-4 text-xl font-bold bg-[#0A192F] text-white rounded-2xl hover:bg-slate-800 min-h-[64px]"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
