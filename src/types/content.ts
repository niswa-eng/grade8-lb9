export type StepKind = 
  | 'objectives'
  | 'concept'
  | 'worked'
  | 'interactive'
  | 'mistake'
  | 'vocab'
  | 'practice';

export interface FigureBlock {
  component: string;
  props: Record<string, any>;
}

export type Block =
  | { type: 'text'; content: string }
  | { type: 'objective_item'; code: string; text: string }
  | { type: 'keyterm'; term: string; definition?: string }
  | { type: 'formula'; math: string; label?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'list'; items: string[] }
  | { type: 'sentence_frame'; template: string; blanks?: string[] }
  | { type: 'figure'; figure: FigureBlock }
  | { type: 'build_steps'; steps: Block[][] };

export interface Step {
  id: string;
  title: string;
  kind: StepKind;
  blocks: Block[];
}

export interface PracticeQuestion {
  id: string;
  level: 1 | 2 | 3;
  text: string;
  figure?: FigureBlock;
  background?: 'blank' | 'dot' | 'square' | 'lined' | 'axes';
}

export interface Subtopic {
  id: string;
  title: string;
  codes?: string[];
  steps: Step[];
  practice?: PracticeQuestion[];
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  codes?: string[];
  accentColor: string;
  subtopics: Subtopic[];
}

export type WorkingGridType = 'blank' | 'dot' | 'square' | 'lined' | 'axes';

export interface StrokePoint {
  x: number;
  y: number;
  pressure?: number;
}

export type ToolType = 'pen' | 'highlighter' | 'eraser' | 'line' | 'rect' | 'circle';

export interface WhiteboardStroke {
  id: string;
  tool: ToolType;
  color: string;
  width: number;
  dashed?: boolean;
  points: StrokePoint[];
}
