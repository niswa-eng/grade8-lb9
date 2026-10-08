import React from 'react';
import { FigureBlock } from '../../types/content';

// Numbers
import {
  NumberLine,
  PlaceValueChart,
  FactorTree,
  VennDiagram,
  CarrollDiagram,
  ArithmeticLayout,
  GridPercent,
  BarModel,
  DoubleNumberLine,
  FractionBar,
  FractionCircle,
  ProportionTable,
} from './NumberComponents';

import {
  PrimeFactorTool,
  IndexLawsTool,
  StandardFormTool,
  SurdEstimator,
  RationalIrrationalTool,
  RecurringDecimalTool,
  CompoundPercentTool,
  DirectInverseProportionGraph,
} from './NumberStage9Components';

// Algebra
import {
  BalanceScale,
  AlgebraTiles,
  AreaModel,
  FunctionMachine,
  ExpressionBuilder,
  SequenceBuilder,
} from './AlgebraComponents';

import {
  FormulaRearranger,
  AlgebraicFractionTool,
  SimultaneousEquationsGraph,
  InequalityNumberLine,
} from './AlgebraStage9Components';

// Graphs
import { CoordinateGrid, TimeSeriesGraph, ScatterGraph } from './GraphComponents';

// Geometry
import { AnglesTool, ShapeBuilder, TransformationGrid, SymmetryTool } from './GeometryComponents';
import { Solid3DComponent } from './Solid3DComponent';
import {
  PythagorasTool,
  CircleTool,
  BearingsTool,
  ConstructionTool,
  MidpointGrid,
} from './GeometryStage9Components';

// Stats & Probability
import {
  BarChart,
  PieChart,
  StemAndLeaf,
  DotPlot,
  Spinner,
  DiceRoller,
  ProbabilityScale,
} from './StatsProbabilityComponents';

import {
  QuadraticGraph,
  BackToBackStemLeaf,
  ProbabilityTree,
  ConversionGraph,
} from './StatsProbabilityStage9Components';

const COMPONENT_REGISTRY: Record<string, React.FC<any>> = {
  // Numbers
  NumberLine,
  PlaceValueChart,
  FactorTree,
  VennDiagram,
  CarrollDiagram,
  ArithmeticLayout,
  GridPercent,
  BarModel,
  DoubleNumberLine,
  FractionBar,
  FractionCircle,
  ProportionTable,
  PrimeFactorTool,
  IndexLawsTool,
  StandardFormTool,
  SurdEstimator,
  RationalIrrationalTool,
  RecurringDecimalTool,
  CompoundPercentTool,
  DirectInverseProportionGraph,

  // Algebra
  BalanceScale,
  AlgebraTiles,
  AreaModel,
  FunctionMachine,
  ExpressionBuilder,
  SequenceBuilder,
  FormulaRearranger,
  AlgebraicFractionTool,
  SimultaneousEquationsGraph,
  InequalityNumberLine,

  // Graphs
  CoordinateGrid,
  TimeSeriesGraph,
  ScatterGraph,
  QuadraticGraph,
  ConversionGraph,

  // Geometry
  AnglesTool,
  ShapeBuilder,
  TransformationGrid,
  Solid3D: Solid3DComponent,
  Solid3DComponent,
  SymmetryTool,
  PythagorasTool,
  CircleTool,
  BearingsTool,
  ConstructionTool,
  MidpointGrid,
  CompoundShapeTool: ShapeBuilder,

  // Stats & Probability
  BarChart,
  DualBarChart: BarChart,
  CompoundBarChart: BarChart,
  FrequencyDiagram: BarChart,
  FrequencyPolygon: TimeSeriesGraph,
  PieChart,
  StemAndLeaf,
  BackToBackStemLeaf,
  DataTable: ProportionTable,
  DotPlot,
  Spinner,
  DiceRoller,
  ProbabilityScale,
  SampleSpaceGrid: CarrollDiagram,
  TreeDiagram: FactorTree,
  ProbabilityTree,
};

interface FigureRendererProps {
  figure: FigureBlock;
  className?: string;
}

export const FigureRenderer: React.FC<FigureRendererProps> = ({ figure, className = '' }) => {
  const Component = COMPONENT_REGISTRY[figure.component];

  if (!Component) {
    return (
      <div className={`p-6 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 text-center ${className}`}>
        <p className="text-xl font-bold text-slate-500">
          Visual Diagram: {figure.component}
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <Component {...figure.props} />
    </div>
  );
};
